import { getStrongElement, getTextElement, matchStrong } from "./lexer";
import type { Token } from "./token";

const root: Token = {
  id: 0,
  elementType: 'root',
  content: '',
  parent: {} as Token,
}

const tokenize = ({
  textElement,
  initId = 0,
  initRoot = root,
}: {
  textElement: string;
  initId?: number;
  initRoot?: Token;
}) => {
  let els: Token[] = [];
  let id = initId;
  let parent: Token = initRoot;

  const _tokenize = (textElement: string, _parent: Token) => {
    let t = textElement;
    parent = _parent;
    
    while(t.length !== 0) {
      const matchStrongText = matchStrong(t) as RegExpMatchArray; // strong match
      id += 1;

      if (matchStrongText == null) { // 一時退避、textElement まできたらおしまい
        const text = getTextElement({
          id, 
          content: t, 
          parent,
        });
        t = '';
        els.push(text);
      } else {
        const el = getStrongElement({
          id, 
          content: '', 
          parent
        });
        parent = el;
        els.push(el);

        t = t.replace(matchStrongText[0], ''); // 読んだやつを消す、これがないと無限ループになる
        _tokenize(matchStrongText[1], parent); // 最初即時実行関数でやろうとしてたけど、再帰できないから定義した。
        parent = _parent;
      }
    }
  }
  _tokenize(textElement, parent);
  return els;
}

export const parse = (md: string) => {
  return tokenize({ textElement: md });
}
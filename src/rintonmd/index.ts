import { parse } from "./parser";

export const rintonmd = (md: string) => {
  const mdList = md.split(/\r\n|\r|\n/);
  const astList = mdList.map(md => parse(md));
  return astList;
}
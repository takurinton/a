import {
  FormControl,
  Input,
  Textarea,
} from '@chakra-ui/react';
import { useEffect, useRef, useState } from 'preact/hooks';

export const Form = ({
  id,
  title,
  is_open,
  contents,
  pub_date,
  value,
  onChange,
}: {
  id?: number;
  title?: string;
  is_open?: boolean;
  contents?: string;
  pub_date?: string;
  value: string;
  onChange: (event: React.TargetedEvent<HTMLTextAreaElement>) => void;
}) => {
  return (
    <form>
      <FormControl id="title" isRequired h='100px'>
        <Input name='title' placeholder="タイトルを入力" fontSize='2rem' border='none' onChange={onChange}/>
        <hr />
      </FormControl>
      
      <Textarea
        name='contents'
        value={value}
        onChange={onChange}
        placeholder="記事を書く"
        border="none"
        fontSize='1.2rem'
      />
    </form>
  );
};
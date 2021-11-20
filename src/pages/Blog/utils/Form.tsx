import {
  FormControl,
  Input,
  Textarea,
  Select,
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
      <FormControl id="title" isRequired m='0 0 40px'>
        <Input name='title' placeholder="タイトルを入力" fontSize='2rem' border='none' onChange={onChange}/>
        <hr />
      </FormControl>
      
      <Select p='0 0 40px' onChange={onChange} name='is_open'>
        <option value="true">公開</option>
        <option value="false">非公開</option>
      </Select>

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
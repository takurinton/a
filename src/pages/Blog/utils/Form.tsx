import React from 'react';
import {
  FormControl,
  Input,
  Textarea,
  Select,
} from '@chakra-ui/react';

export const Form = ({
  value,
  onChange,
}: {
  value: string;
  onChange: (event: any) => void;
}) => {
  return (
    <form>
      <FormControl id='title' isRequired h='100px'>
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

      <Select p='40px 0 40px' onChange={onChange} name='is_open'>
        <option value="true">公開</option>
        <option value="false">非公開</option>
      </Select>
    </form>
  );
};
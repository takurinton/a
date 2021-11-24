import React from 'react';
import {
  FormControl,
  Input,
  Textarea,
  Button,
} from '@chakra-ui/react';
import { Select } from "@chakra-ui/select"

export const Form = ({
  state,
  categories,
  onChange,
  onSubmit,
}: {
  state: any;
  categories: { category: { id: number, name: string }[]};
  onChange: (event: any) => void;
  onSubmit: () => void;
}) => {
  const getHight = (value: string) => {
    return value.split('\n').length;
  };
  
  return (
    <form>
      <FormControl id='title' isRequired h='100px'>
        <Input name='title' placeholder="タイトルを入力" fontSize='2rem' border='none' value={state.title} onChange={onChange}/>
        <hr />
      </FormControl>
    
      <Textarea
        name='contents'
        value={state.contents}
        onChange={onChange}
        placeholder="記事を書く"
        border="none"
        fontSize='1.2rem'
        minHeight='300px'
        rows={getHight(state.contents)}
      />

      <Select
        name='is_open'
        value={state.is_open}
        onChange={onChange}
        placeholder={state.is_open}
      >
        <option value='true'>公開</option>
        <option value='false'>非公開</option>
      </Select>

      <Select p='40px 0 40px' onChange={onChange} name='category' value={state.category} placeholder={state.category}>
        {
          categories.category.map(c => <option value={c.name}>{c.name}</option>)
        }
      </Select> 
      <Button 
        type='button' 
        onClick={onSubmit}
      >保存</Button>
    </form>
  );
};
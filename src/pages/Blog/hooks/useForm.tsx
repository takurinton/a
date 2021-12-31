import { useState } from "react";
import Router from 'next/router'
import { _fetcher } from "../../../utils/fetcher";

export const useForm = () => {
  const [state, setState] = useState({
    category: '',
    contents: '',
    is_open: 'false',
    pub_date: new Date(),
    title: '',
  })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target) {
      // @ts-ignore
      setState({ ...state, pub_date: event });
    } else {
      setState({ ...state, [event.target.name]: event.target.value});
    }
  };
  
  const handleSubmit = (token: string) => {
    (async () => await _fetcher({
      url: 'https://api.takurinton.com/admin/blog',
      _body: JSON.stringify({
        ...state,
        is_open: state.is_open === 'true' ? true: false,
        pub_date: state.pub_date.toISOString(),
      }),
      method: 'POST',
      token,
    })
    .then(res => {
      if (res.title !== state.title) {
        console.log('error');
      };

      Router.push('/posts');
    }))();
  }

  return {
    state,
    handleChange,
    handleSubmit,
  }
}
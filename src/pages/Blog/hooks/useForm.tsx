import { useState } from "react";
import { fetcher } from "../../../utils/fetcher";

export const useForm = () => {
  const [state, setState] = useState({
    category: '',
    contents: '',
    is_open: 'false',
    pub_date: new Date(),
    title: '',
  })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.value});
  };
  
  const handleSubmit = () => {
    (async () => await fetcher({
      url: 'https://api.takurinton.com/admin/blog',
      _body: JSON.stringify({
        ...state,
        is_open: state.is_open === 'true' ? true: false,
        pub_date: state.pub_date.toISOString(),
      }),
      method: 'POST'
    })
    .then(res => {
      if (res.status !== 201) {
        console.log('error');
      };
      window.history.pushState('', '', '/blog');
    }))();
  }

  return {
    state,
    handleChange,
    handleSubmit,
  }
}
import { useState } from "react";

export const useForm = () => {
  const [state, setState] = useState({
    category: '',
    contents: '',
    id: 0,
    is_open: null,
    pub_date: '',
    title: '',
  })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.value});
  };

  return {
    state,
    handleChange,
  }
}
import { useState } from "preact/hooks"

export const useForm = () => {
  const [state, setState] = useState({
    category: '',
    contents: '',
    id: 0,
    is_open: null,
    pub_date: '',
    title: '',
  })

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value});
  };

  return {
    state,
    handleChange,
  }
}
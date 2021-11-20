import { useState } from "preact/hooks"

export const useForm = (initialState) => {
  const [state, setState] = useState(initialState);

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value});
  };

  const handleSubmit = (event) => {
    event.preeventDefault();
    // newPost(event);
  }

  return {
    state,
    handleChange,
  }
}
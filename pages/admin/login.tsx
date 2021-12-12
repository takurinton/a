import React, { useState, createContext } from "react";

const IS_PRODUCTION = true;
const API_ROUTE = IS_PRODUCTION ? 'https://api.takurinton.com' : 'https://localhost:8080';

export interface Token { 
  token: string;
};

export interface User {
    username: string;
    password: string;
};

export const tokenContext = createContext<Token>({
    token: '',
});

const initialProps: User = {
    username: '', 
    password: '',
};

const getToken = async (user: User) => {
  const res = await fetch(`${API_ROUTE}/admin/user/login`, {
    method: 'POST', 
    body: JSON.stringify(user), 
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json'
    },
  })

  return res;
} 

const useLogin = () => {
  const [state, setState] = useState(initialProps);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({...state, [e.target.name]: e.target.value});
  };
    
  const handleSubmit = async (body: User) => {
    return getToken(body);
  };

  return {
    handleChange, 
    handleSubmit, 
    state, 
  };
};


export const Login = () => {
  const [token, setToken] = useState<Token>({ token: '' });

  const {
      handleChange, 
      handleSubmit, 
      state,
  } = useLogin();

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleChange(event)
  }

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    handleSubmit(state)
    .then(res => res.json())
    .then(token => setToken(token))
  }

  return (
    <div>
      <main>
        <h1>login page</h1>
        <form onSubmit={onSubmit}>
          <label>username:
            <input type="text" name="username" onChange={onChange} value={state.username} required={true}></input>
          </label>
          <br />
          <label>password:
            <input type="password" name="password" onChange={onChange} value={state.password} required={true}></input>
          </label>
          <br />
          <button type="submit">ログイン</button>
        </form>
      </main>
    </div>
  );
};

export default Login;
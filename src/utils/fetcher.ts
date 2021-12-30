import { getToken } from "./getToken";
import { noAuth } from "./noAuth";

export const fetcher = async (
  { 
    url, 
    _body, 
    method,
    token,
}: { 
    url: string; 
    _body?: any, 
    method: string;
    token?: any;
}) => {
  if (!token) return {};

  const body = _body ?? JSON.stringify(_body);
  return await fetch(url, {
    method,
    body,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`, 
    },
  }).then(res => {
    if (res.status === 401) {
        noAuth();
    }
    return res.json()
  }); 
}
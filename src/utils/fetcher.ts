import { getToken } from "./getToken";
import { noAuth } from "./noAuth";

export const fetcher = async (
  { 
    url, 
    body, 
    method
}: { 
    url: string; 
    body: any, 
    method: string 
}) => {
  const token = getToken();
  if (!token) return {};

  return await fetch(url, {
    method,
    body: JSON.stringify(body),
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
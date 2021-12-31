type Fetcher = {
  props: {
    token: string;
    status: number;
    res: any;
  };
} | {
  redirect: {
    permanent: boolean;
    destination: string;
  };
}

export const _fetcher = async (
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
  const body = _body ?? JSON.stringify(_body);
  return await fetch(url, {
    method,
    body,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
  }).then(res => {
    if (res.status === 401) return { status: 401 }
    else return res.json()
  });
}

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
  }): Promise<Fetcher> => {
  if (!token) return {
    redirect: {
      permanent: false,
      destination: '/401'
    }
  };

  const res = await _fetcher({
    url,
    _body,
    method,
    token,
  });

  if (res.status === 401) {
    return {
      redirect: {
        permanent: false,
        destination: '/401'
      }
    }
  } else {
    return {
      props: {
        token,
        status: 200,
        res
      }
    }
  }
}
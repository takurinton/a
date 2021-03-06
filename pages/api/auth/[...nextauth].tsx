import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

type Token = { 
  token: string;
};

type User = {
    username: string;
    password: string;
};

type Credentials = {
  username: {
      label: string;
      type: string;
      placeholder: string | undefined;
  },
  password: {
    label: string;
    type: string;
    placeholder: string | undefined;
  }
};

const getToken = async (user: User) => {
  const res = await fetch(`https://api.takurinton.com/admin/user/login`, {
    method: 'POST', 
    body: JSON.stringify(user), 
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json'
    },
  })
  return res;
} 

const findUserByCredentials = async (credentials: any) => {
  const username = credentials.username;
  const password = credentials.password;
  const body: User = { username, password };
  const res = await getToken(body).then(res => res.json());
  return { name: username, token: res.token };
}

export default NextAuth({
  providers: [
    Providers.Credentials({
      name: "username and password",
        credentials: {
          username: { label: "username", type: "text", placeholder: "username" },
          password: { label: "password", type: "password" },
      },
      authorize: async credentials => {
        const user = await findUserByCredentials(credentials);
        if (user) return Promise.resolve(user);
        else return Promise.reject('/admin');
      },
    }),
  ],
  callbacks: {
    async signIn(user, account) {
      // @ts-ignore
      account.accessToken = user.token;
      return true;
    },
    async jwt(token, account) {
      if (account?.token) {
        token.accessToken = account.token;
      }
      return token;
    },
    async session(session, token) {
      session.token = token.accessToken;
      return session;
    },
  },
});

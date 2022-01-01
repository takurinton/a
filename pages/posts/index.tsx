import { GetServerSideProps } from "next";
import { getSession } from "next-auth/client";
import React from "react";
import { Posts as Component } from "../../src/pages/Blog";
import { fetcher } from "../../src/utils/fetcher";
import { Posts } from "../../src/utils/types";

type Props = {
  res: Posts
}

const Posts = ({ res }: Props): JSX.Element => <Component posts={res} />;

export const getServerSideProps: GetServerSideProps = async (context) =>  {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        permanent: false,
        destination: '/401'
      }
    }
  }
  
  const url = `https://api.takurinton.com/admin/blog`;
  return await fetcher({
    url,
    method: 'GET',
    token: session.token,
  });
}

export default Posts;
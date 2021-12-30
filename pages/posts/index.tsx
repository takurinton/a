import { GetServerSideProps } from "next";
import { getSession } from "next-auth/client";
import React from "react";
import { Posts as Component } from "../../src/pages/Blog";
import { fetcher } from "../../src/utils/fetcher";

// TODO: 真面目にやる
const Posts = ({ posts }: { posts: any }): JSX.Element => (
  <Component posts={posts} />
);

export const getServerSideProps: GetServerSideProps = async (context) =>  {
  const session = await getSession(context);
  if (!session) {
    return { props: {} }
  }
  
  const url = `https://api.takurinton.com/admin/blog`;
  const posts = await fetcher({
    url,
    method: 'GET',
    token: session.token,
  });

  return {
    props: {
      posts
    }
  }
}

export default Posts;
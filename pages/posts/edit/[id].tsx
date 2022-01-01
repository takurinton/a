import { GetServerSideProps } from "next";
import { getSession } from "next-auth/client";
import React from "react";
import { Post as Component } from "../../../src/pages/Blog";
import { _fetcher } from "../../../src/utils/fetcher";
import { Categories, Post } from "../../../src/utils/types";

type Props = { 
  post: Post,
  categories: Categories;
  token: string;
}

const Post = ({
  post,
  categories,
  token,
}: Props): JSX.Element => <Component  post={post} categories={categories} token={token} />;

export const getServerSideProps: GetServerSideProps = async (context) =>  {
  const session = await getSession(context);
  if (!session) {
    return { props: {} }
  }

  const token = session?.token;
  const { id } = context.query;
  const postUrl = `https://api.takurinton.com/admin/blog/post/${id}`;
  const post = await _fetcher({
    url: postUrl,
    method: 'GET',
    token,
  });

  const categoryUrl = `https://api.takurinton.com/admin/blog/category`;
  const categories = await _fetcher({
    url: categoryUrl,
    method: 'GET',
    token,
  });

  return {
    props: {
      post,
      categories,
      token,
    }
  }
}

export default Post;
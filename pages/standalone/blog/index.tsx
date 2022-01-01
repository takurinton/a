import { GetServerSideProps } from "next";
import { Posts as Component } from "../../../src/pages/Standalone/Blog/Posts";
import { posts } from "../../../src/pages/Standalone/Blog/blog";
import { Posts } from "../../../src/utils/types";

type Props = {
  posts: Posts;
}

const Posts = ({ posts }: Props) => <Component posts={posts} />;

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
      posts,
    }
  }
}

export default Posts;
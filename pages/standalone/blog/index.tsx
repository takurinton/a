import { GetServerSideProps } from "next";
import { Posts as Component } from "../../../src/pages/Standalone/Blog/Posts";
import { posts } from "../../../src/pages/Standalone/Blog/blog";

const Posts = ({ posts }: { posts: any }) => <Component posts={posts} />;

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
      posts,
    }
  }
}

export default Posts;
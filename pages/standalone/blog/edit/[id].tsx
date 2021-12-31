import { GetServerSideProps } from "next";
import { Post as Component } from "../../../../src/pages/Standalone/Blog/Post";
import { posts, categories } from "../../../../src/pages/Standalone/Blog/blog";

const Post = ({ post, categories }: { post: any, categories: any }) => <Component post={post} categories={categories} />;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query;
  const post = posts.find(p => p.id.toString() === id);
  return {
    props: {
      post,
      categories,
    }
  }
}

export default Post;
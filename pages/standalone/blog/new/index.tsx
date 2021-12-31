import { GetServerSideProps } from "next";
import { New as Component } from "../../../../src/pages/Standalone/Blog/New";
import { categories } from "../../../../src/pages/Standalone/Blog/blog";

const New = ({ categories }: { categories: any }) => <Component categories={categories} />;

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
      categories,
    }
  }
}

export default New;
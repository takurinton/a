import { GetServerSideProps } from "next";
import { New as Component } from "../../../../src/pages/Standalone/Blog/New";
import { categories } from "../../../../src/pages/Standalone/Blog/blog";
import { Categories } from "../../../../src/utils/types";

type Props = {
  categories: Categories;
}

const New = ({ categories }: Props) => <Component categories={categories} />;

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
      categories,
    }
  }
}

export default New;
import { GetServerSideProps, NextPage } from "next";
import { getSession } from "next-auth/client";
import { New } from "../../../src/pages/Blog/New";
import { fetcher } from "../../../src/utils/fetcher";


// TODO: 真面目にやる
const CreatePosts = ({ 
  token,
  categories
}: { 
  token: string;
  categories: { category: { id: number; name: string; }[] }
}): JSX.Element => {
  return <New token={token} categories={categories} />
};

export const getServerSideProps: GetServerSideProps = async (context) =>  {
  const session = await getSession(context);
  if (!session) {
    return { 
      props: {}
    }
  }
  
  const token = session?.token;

  const url = `https://api.takurinton.com/admin/blog/category`;
  const categories = await fetcher({
    url,
    method: 'GET',
    token,
  });

  return {
    props: {
      token,
      categories
    }
  }
}

export default CreatePosts;
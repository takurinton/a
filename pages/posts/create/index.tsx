import { GetServerSideProps, NextPage } from "next";
import { getSession } from "next-auth/client";
import { New } from "../../../src/pages/Blog/New";
import { fetcher } from "../../../src/utils/fetcher";
import { Categories } from "../../../src/utils/types";

const CreatePosts = ({ 
  token,
  res
}: { 
  token: string;
  res: Categories
}): JSX.Element => <New token={token} categories={res} />;

export const getServerSideProps: GetServerSideProps = async (context) =>  {
  const session = await getSession(context);
  if (!session) {
    return { 
      props: {}
    }
  }
  
  const token = session?.token;

  const url = `https://api.takurinton.com/admin/blog/category`;
  return await fetcher({
    url,
    method: 'GET',
    token,
  });
}

export default CreatePosts;
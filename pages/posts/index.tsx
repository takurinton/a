import { GetServerSideProps, NextPage } from "next";
import React from "react";
import { Posts as Component } from "../../src/pages/Blog";

const Posts: NextPage = (): JSX.Element => (
  <Component />
);

export const getServerSideProps: GetServerSideProps = async () =>  {
  return {
    props: {}
  }
}

export default Posts;
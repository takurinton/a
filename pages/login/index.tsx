import { NextPage } from "next";
import React from "react";
import { Login as Component } from "../../src/pages/Login";

const Login: NextPage = (): JSX.Element => {
  return <Component isAdmin={true} />;
}

export default Login;
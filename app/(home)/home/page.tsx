"use client"

//pages/index.js

import React from "react";
import { Authenticator } from "@aws-amplify/ui-react";
import Context from "../../../components/Context"
import Layout from "../../../components/Layout";


const Home = () => {
  
  return (
    // <Authenticator>
      <Layout
        authText="Sign Up"
        username="none"
      >
          <Context />
      </Layout>
    // </Authenticator>
  );
}
export default Home;
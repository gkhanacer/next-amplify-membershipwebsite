"use client"

//pages/index.js

import React from "react";
import { Authenticator } from "@aws-amplify/ui-react";
import DefaultHeader from "../../../components/DefaultHeader"
import Layout from "../../../components/Layout";


const Home = () => {
  
  return (
    // <Authenticator>
      <Layout
        authText="Sign Up"
        username="none"
      >
          <DefaultHeader />
      </Layout>
    // </Authenticator>
  );
}
export default Home;
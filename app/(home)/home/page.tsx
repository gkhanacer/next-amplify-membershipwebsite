"use client"

//pages/index.js

import React from "react";
import { Authenticator } from "@aws-amplify/ui-react";
import Context from "../../../components/Context"
import Layout from "../../../components/Layout";
import { useRouter } from "next/navigation";
import { loadStripe } from "@stripe/stripe-js";

const Home = () => {
  async function handleClick() {
    const stripe = await loadStripe(
      "pk_test_51PpcTQDYtTQTKrS7GZl6WmQxKfo8Ho7rxPimfutYaMeV2L38TOncaP6vbPC4Hv6ltZSzMeF3aw45g5hTmAYAqcwa00UlFIydwu"
    );
    const { error } = await stripe.redirectToCheckout({
      lineItems: [{ price: "price_1Ppcl8DYtTQTKrS7GbBO7qrj", quantity: 1 }],
      mode: "subscription",
      successUrl: "http://localhost:3001/post",
      cancelUrl: "http://localhost:3001/cancel",
    });
    if (error) {
      console.error("Error redirecting to checkout:", error);
    }
  }
  
  const router = useRouter();

  return (
    // <Authenticator>
      <Layout
        handleClick={() => {
          router.push("/post");
        }}
        authText="Sign Up"
        username="none"
      >
          <Context handleClick={handleClick}/>
      </Layout>
    // </Authenticator>
  );
}
export default Home;
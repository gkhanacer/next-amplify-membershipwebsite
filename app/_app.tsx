"use client"

import "../styles/globals.css";
import { Amplify } from "aws-amplify";
import { studioTheme } from "../ui-components";
import { Authenticator, ThemeProvider, defaultTheme  } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import "@fontsource/inter";
import "../styles/reset.css";

import type { AppProps } from 'next/app';

import awsconfig from "../aws-exports";
Amplify.configure(awsconfig);

function MyApp({ Component, pageProps } : AppProps) {
  return (
    <ThemeProvider theme={studioTheme}>
        <Authenticator>
        <Component {...pageProps} />
        </Authenticator>
    </ThemeProvider>
  );
}
export default MyApp;
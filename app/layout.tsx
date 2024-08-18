"use client";


import { Inter } from "next/font/google";
import "./globals.css";

import "@aws-amplify/ui-react/styles.css";
import "@fontsource/inter";
import "../reset.css";

import { studioTheme } from "../ui-components";
import { ThemeProvider } from "@aws-amplify/ui-react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider theme={studioTheme}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

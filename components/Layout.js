"use client"

//components/Layout.js
import React from "react";
import { View } from "@aws-amplify/ui-react";
import { Nav } from "../ui-components";



import { Amplify } from "aws-amplify";
import awsconfig from "../aws-exports";
Amplify.configure(awsconfig);

function Layout({ children, handleClick, authText, username }) {
    
    return (
        <View width="1200px" marginLeft="auto" marginRight="auto">
        <Nav
            marginTop={"20px"}
            handlerAuth={handleClick}
            authText={authText}
            username={username}
            avatar={username.split("")[0].toUpperCase()}
        />
        {children}
        </View>
    );
}
export default Layout;
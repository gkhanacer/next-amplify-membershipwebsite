"use client"

//components/Layout.js
import React from "react";
import { View } from "@aws-amplify/ui-react";
import { Nav } from "../ui-components";

import { useRouter } from "next/navigation";

function Layout({ children, authText, username }) {
    const router = useRouter();
    return (
        <View width="1200px" marginLeft="auto" marginRight="auto">
        <Nav
            marginTop={"20px"}
            handlerAuth={() => {
                router.push("/post");
              }}
            authText={authText}
            username={username}
            avatar={username.split("")[0].toUpperCase()}
        />
        {children}
        </View>
    );
}
export default Layout;
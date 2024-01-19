import HomePageNavbar from "@/app/components/HomePageNavbar";
import FlowbiteScript from "@/app/components/FlowbiteScript";
import React from "react";

export default function RootLayout({children}) {
    return (
        <>
            <HomePageNavbar/>
            <div className="main px-8">
                {children}
            </div>
            <FlowbiteScript/>
        </>
    )
}
import React from "react";
import Header from "../comp/Header";

function Layout({ children, headerContent, className }) {
    return (
        <div className={"bg-gray-600 min-h-screen " + (className ? className : "")}>
            <Header headerContent={headerContent} />
            {children}
        </div>
    );
}

export default Layout;
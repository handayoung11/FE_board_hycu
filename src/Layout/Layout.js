import React from "react";
import Header from "../comp/Header";

function Layout({ children, headerContent }) {
    return (
        <div className="bg-gray-600 min-h-screen">
            <Header headerContent={headerContent} />
            {children}
        </div>
    );
}

export default Layout;
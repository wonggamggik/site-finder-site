import React from "react";
import Sidebar from "./Sidebar/Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="flex min-h-screen w-full">
      <Sidebar />
      <div className="flex-1 p-6 sm:p-8">{children}</div>
    </div>
  );
};

export default Layout;

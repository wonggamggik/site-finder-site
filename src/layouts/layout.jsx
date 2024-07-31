import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import "../index.css";

const Layout = ({ children }) => {
  return (
    <div lang="en" className="antialiased flex h-screen">
      <Sidebar />
      <div className="flex-1 p-6 sm:p-8 overflow-auto">{children}</div>
    </div>
  );
};

export default Layout;

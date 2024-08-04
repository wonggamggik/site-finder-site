import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-grow p-6 sm:ml-64 bg-custom_color">{children}</div>
    </div>
  );
};

export default Layout;

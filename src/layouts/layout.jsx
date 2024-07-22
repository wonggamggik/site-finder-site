import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import "../index.css";

export default function Layout({ children }) {
  return (
    <div lang="en" className="antialiased flex">
      <Sidebar />
      <div className="flex-1 font-heading font-body p-6">{children}</div>
    </div>
  );
}

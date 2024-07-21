// src/layouts/Layout.jsx
import React from "react";
import "../index.css";

export default function Layout({ children }) {
  return (
    <div lang="en" className="antialiased">
      <div className="font-heading font-body">{children}</div>
    </div>
  );
}

// src/components/ui/card.jsx
import React from "react";

export function Card({ className, children }) {
  return <div className={`rounded-lg shadow-md ${className}`}>{children}</div>;
}

export function CardContent({ className, children }) {
  return <div className={`p-4 ${className}`}>{children}</div>;
}

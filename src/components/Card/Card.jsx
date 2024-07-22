import React from "react";

export const Card = ({ children, className }) => {
  return (
    <div
      className={`bg-white shadow-md rounded-lg overflow-hidden ${className}`}
    >
      {children}
    </div>
  );
};

export const CardImage = ({ src, alt }) => {
  return <img className="w-full h-48 object-cover" src={src} alt={alt} />;
};

export const CardContent = ({ children, className }) => {
  return <div className={`p-4 ${className}`}>{children}</div>;
};

export const CardTags = ({ tags }) => {
  return (
    <div className="mt-4 flex flex-wrap gap-2">
      {tags.map((tag, index) => (
        <span
          key={index}
          className="px-2 py-1 bg-gray-200 rounded-full text-gray-600 text-sm"
        >
          {tag}
        </span>
      ))}
    </div>
  );
};

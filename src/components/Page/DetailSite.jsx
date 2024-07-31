import React from "react";
import { useParams } from "react-router-dom";

const DetailSite = ({ sites }) => {
  const { category, siteName } = useParams();

  if (!sites[category]) {
    return <div>Loading...</div>;
  }

  const site = sites[category]?.sites.find(
    (site) => site.name === decodeURIComponent(siteName)
  );

  if (!site) {
    return <div>Site not found</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 p-4">
          <div className="aspect-w-1 aspect-h-1">
            <img
              src={site.image}
              alt={`${site.name}`}
              className="object-cover w-full h-full rounded-lg"
            />
          </div>
        </div>
        <div className="w-full md:w-1/2 p-4 flex flex-col justify-between">
          <div>
            <h1 className="text-6xl font-bold mb-4">{site.name}</h1>
            <div className="flex flex-wrap gap-2 mb-4">
              {site.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 bg-gray-200 rounded-full text-gray-600 text-lg"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <a
            href={site.link}
            className="flex items-center justify-center px-4 py-6 text-white rounded-md text-center text-xl"
            target="_blank"
            rel="noopener noreferrer"
            style={{ height: "20%", backgroundColor: "#70DB7A" }}
          >
            사이트 방문
          </a>
        </div>
      </div>
      <div className="mt-6">
        <h2 className="text-2xl font-semibold mb-4">특징</h2>
        <ul className="list-disc list-inside mb-4">
          {site.features.map((feature, idx) => (
            <li key={idx}>{feature}</li>
          ))}
        </ul>
      </div>
      <div className="mt-6">
        <h2 className="text-2xl font-semibold mb-4">주요 기능</h2>
        <ul className="list-disc list-inside mb-4">
          {site.functions.map((func, idx) => (
            <li key={idx}>{func}</li>
          ))}
        </ul>
        <h2 className="text-2xl font-semibold mb-4">설명</h2>
        <p className="text-lg mb-4">{site.description}</p>
      </div>
    </div>
  );
};

export default DetailSite;

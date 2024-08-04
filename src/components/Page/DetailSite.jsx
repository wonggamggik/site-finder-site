import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const DetailSite = ({ sites }) => {
  const { category, siteName } = useParams();
  const site = sites[category]?.sites.find(
    (site) => site.name === decodeURIComponent(siteName)
  );

  useEffect(() => {
    if (site) {
      const recentSites = JSON.parse(localStorage.getItem("recentSites")) || [];
      const updatedRecentSites = [
        site,
        ...recentSites.filter((s) => s.name !== site.name),
      ].slice(0, 10);
      localStorage.setItem("recentSites", JSON.stringify(updatedRecentSites));
    }
  }, [site]);

  if (!site) {
    return <div className="container mx-auto p-6">Site not found</div>;
  }

  return (
    <div className="container mx-auto p-6 flex justify-center items-center min-h-screen">
      <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
        <img
          src={site.image}
          alt={site.name}
          className="md:w-1/2 w-full h-auto object-cover"
        />
        <div className="md:w-1/2 w-full p-6">
          <h1 className="text-3xl font-bold mb-4">{site.name}</h1>
          <div className="flex flex-wrap mb-4">
            {site.tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-2 py-1 bg-gray-200 rounded-full text-gray-600 text-sm mr-2 mb-2"
              >
                {tag}
              </span>
            ))}
          </div>
          <a
            href={site.link}
            className="inline-block bg-green-500 text-white px-4 py-2 rounded mb-4"
          >
            사이트 방문
          </a>
          <div className="mt-4">
            <h2 className="text-2xl font-bold">특징</h2>
            <ul className="list-disc pl-5">
              {site.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
          </div>
          <div className="mt-4">
            <h2 className="text-2xl font-bold">주요 기능</h2>
            <ul className="list-disc pl-5">
              {site.functions.map((func, idx) => (
                <li key={idx}>{func}</li>
              ))}
            </ul>
          </div>
          <div className="mt-4">
            <h2 className="text-2xl font-bold">설명</h2>
            <p>{site.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailSite;

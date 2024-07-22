import React from "react";
import { useParams } from "react-router-dom";

const DetailSite = ({ sites }) => {
  const { category, siteName } = useParams();
  console.log("Received sites:", sites);
  console.log("Category:", category, "Site Name:", siteName);

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
      <h1 className="text-3xl font-bold mb-6">{site.name}</h1>
      <img
        src={site.image}
        alt={`${site.name} Image`}
        className="object-cover w-full rounded-t-lg aspect-video mb-6"
      />
      <p className="text-lg mb-4">{site.description}</p>
      <h2 className="text-2xl font-semibold mb-2">Features</h2>
      <ul className="list-disc list-inside mb-4">
        {site.features.map((feature, idx) => (
          <li key={idx}>{feature}</li>
        ))}
      </ul>
      <h2 className="text-2xl font-semibold mb-2">Functions</h2>
      <ul className="list-disc list-inside mb-4">
        {site.functions.map((func, idx) => (
          <li key={idx}>{func}</li>
        ))}
      </ul>
      <a
        href={site.link}
        className="px-4 py-2 bg-blue-500 text-white rounded-md"
        target="_blank"
        rel="noopener noreferrer"
      >
        Visit Site
      </a>
    </div>
  );
};

export default DetailSite;

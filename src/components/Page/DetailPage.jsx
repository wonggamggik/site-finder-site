import React from "react";
import { useParams, Link } from "react-router-dom";
import { Card, CardImage, CardContent, CardTags } from "../Card/Card";

const DetailPage = ({ sites }) => {
  const { category } = useParams();
  const categorySites = sites[category]?.sites || [];

  console.log("DetailPage sites:", sites);
  console.log("DetailPage category:", category);
  console.log("DetailPage categorySites:", categorySites);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">{sites[category]?.ko}</h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {categorySites.map((site, idx) => (
          <Link
            to={`/introduce/${category}/${encodeURIComponent(site.name)}`}
            key={idx}
          >
            <Card className="bg-[#f5f5f5]">
              <CardImage
                src={site.image}
                alt={`${site.name} Image`}
                className="object-cover w-full rounded-t-lg aspect-video"
              />
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold text-[#6d6d6d]">
                  {site.name}
                </h3>
                <p className="text-sm text-[#8d8d8d]">
                  {site.simpleDescription}
                </p>
                <CardTags tags={site.tags} />
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DetailPage;

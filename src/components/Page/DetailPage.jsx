import React from "react";
import { useParams } from "react-router-dom";
import { Card, CardImage, CardContent, CardTags } from "../Card/Card";

const DetailPage = ({ sites }) => {
  const { category } = useParams();
  const categorySites = sites[category] || [];

  console.log("Category:", category);
  console.log("Sites:", sites);
  console.log("Category Sites:", categorySites);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">{category}</h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {categorySites.map((site, idx) => (
          <Card key={idx} className="bg-[#f5f5f5]">
            <CardImage
              src={site.image}
              alt={`${site.name} Image`}
              className="object-cover w-full rounded-t-lg aspect-video"
            />
            <CardContent className="p-4">
              <h3 className="text-lg font-semibold text-[#6d6d6d]">
                {site.name}
              </h3>
              <p className="text-sm text-[#8d8d8d]">{site.simpleDescription}</p>
              <CardTags tags={site.tags} />
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default DetailPage;

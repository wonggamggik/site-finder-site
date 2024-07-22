import React from "react";
import { Card, CardImage, CardContent, CardTags } from "./Card";

const IntroduceSite = ({ sites }) => {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {sites.map((site, index) => (
        <Card key={index} className="bg-[#f5f5f5]">
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
  );
};

export default IntroduceSite;

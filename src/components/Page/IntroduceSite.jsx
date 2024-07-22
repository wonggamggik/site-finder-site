import React from "react";
import { Card, CardImage, CardContent, CardTags } from "../Card/Card";

const IntroduceSite = ({ sites, title }) => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">{title}</h1>
      <div className="space-y-8">
        {Object.keys(sites).map((category, index) => (
          <div key={index}>
            <h2 className="text-2xl font-semibold mb-4">{category}</h2>
            <div className="flex space-x-4 overflow-x-auto">
              {sites[category].map((site, idx) => (
                <Card key={idx} className="bg-[#f5f5f5] flex-none w-80">
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
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IntroduceSite;

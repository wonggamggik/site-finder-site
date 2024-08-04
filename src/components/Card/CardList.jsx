import React from "react";
import { Card, CardImage, CardContent, CardTags } from "./Card";

const CardList = ({ sites }) => {
  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sites.map((site, index) => (
          <Card key={index} className="mx-auto flex flex-col justify-between">
            <CardImage src={site.image} alt={`${site.name} image`} />
            <CardContent className="flex-grow flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-bold mb-2">{site.name}</h2>
                <p className="text-gray-600 mb-4">{site.simpleDescription}</p>
              </div>
              <CardTags tags={site.tags} />
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CardList;

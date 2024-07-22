import React from "react";
import { Card, CardImage, CardContent, CardTags } from "./Card";

const CardList = ({ sites }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {sites.map((site, index) => (
        <Card key={index}>
          <CardImage src={site.image} alt={`${site.name} image`} />
          <CardContent>
            <h2 className="text-2xl font-bold mb-2">{site.name}</h2>
            <p className="text-gray-600 mb-4">{site.simpleDescription}</p>
            <CardTags tags={site.tags} />
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default CardList;

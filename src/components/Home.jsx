import React from "react";
import { Card, CardContent } from "./Card";

const Home = () => {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <Card className="bg-[#e0e0e0]">
        <img
          src="/home-placeholder.svg"
          alt="Home Image"
          width={400}
          height={300}
          className="object-cover w-full rounded-t-lg aspect-video"
        />
        <CardContent className="p-4">
          <h3 className="text-lg font-semibold text-[#4a4a4a]">Home Section</h3>
          <p className="text-sm text-[#6d6d6d]">
            Welcome to the Home Page. Here is some introductory content.
          </p>
        </CardContent>
      </Card>
      {/* 다른 카드 컴포넌트들 추가 */}
    </div>
  );
};

export default Home;

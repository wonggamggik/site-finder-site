import React from "react";
import { Card, CardContent } from "./ui/Card";

const Home = () => {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <Card className="bg-[#f5f5f5]">
        <img
          src="/placeholder.svg"
          alt="Product Image"
          width={400}
          height={300}
          className="object-cover w-full rounded-t-lg aspect-video"
        />
        <CardContent className="p-4">
          <h3 className="text-lg font-semibold text-[#6d6d6d]">Product Name</h3>
          <p className="text-sm text-[#8d8d8d]">
            A short description of the product.
          </p>
        </CardContent>
      </Card>
      {/* 다른 카드 컴포넌트들 추가 */}
    </div>
  );
};

export default Home;

import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <img
        src="images/siteLogo.png"
        alt="Site Logo"
        className="mb-6 w-64 h-auto"
      />
      <h1 className="text-3xl font-bold mb-4">
        당신의 창작 활동에 도움을 줄 사이트를 모아뒀어요!
      </h1>
      <p className="text-gray-600 mb-2">
        개발, 대학 생활, 그리고 창작 활동에 필요한 모든 정보를 한 곳에서
        확인하세요.
      </p>
      <p className="text-gray-600">
        쉽고 간단한 설명과 함께 당신의 스킬을 업그레이드하세요!
      </p>
    </div>
  );
};

export default Home;

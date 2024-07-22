import React from "react";

const Permanent = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <img
        src="images/permanentVisual.png"
        alt="Permanent Page Visual"
        className="mb-6 w-64 h-auto"
      />
      <h1 className="text-3xl font-bold mb-4">
        영구 페이지에 오신 것을 환영합니다!
      </h1>
      <p className="text-gray-600 mb-2">
        이곳에서 영구적으로 보관된 중요한 정보를 확인할 수 있습니다.
      </p>
      <p className="text-gray-600">필요한 정보를 쉽게 찾고 활용하세요!</p>
    </div>
  );
};

export default Permanent;

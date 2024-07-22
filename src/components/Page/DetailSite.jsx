import React from "react";
import { useParams } from "react-router-dom";

const DetailSite = ({ sites }) => {
  const { category, siteName } = useParams();

  if (!sites[category]) {
    return <div>Loading...</div>;
  }

  const site = sites[category]?.sites.find(
    (site) => site.name === decodeURIComponent(siteName)
  );

  if (!site) {
    return <div>Site not found</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-col md:flex-row">
        {/* 좌측 상단: 이미지 */}
        <div className="w-full md:w-1/2 p-4">
          <div className="aspect-w-1 aspect-h-1">
            {" "}
            {/* 정사각형 비율 유지 */}
            <img
              src={site.image}
              alt={`${site.name}`} // alt 속성에서 "Image" 단어 제거
              className="object-cover w-full h-full rounded-lg"
            />
          </div>
        </div>

        {/* 우측 상단: 사이트 이름, 주요 태그, 링크 및 버튼 */}
        <div className="w-full md:w-1/2 p-4 flex flex-col justify-between">
          <div>
            <h1 className="text-6xl font-bold mb-4">{site.name}</h1>
            <div className="flex flex-wrap gap-2 mb-4">
              {site.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 bg-gray-200 rounded-full text-gray-600 text-lg" // 태그 크기 조정
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <a
            href={site.link}
            className="flex items-center justify-center px-4 py-6 text-white rounded-md text-center text-xl"
            target="_blank"
            rel="noopener noreferrer"
            style={{ height: "20%", backgroundColor: "#70DB7A" }} // 버튼 높이와 배경 색상 조정
          >
            사이트 방문
          </a>
        </div>
      </div>

      {/* 중단: 사이트 특징 */}
      <div className="mt-6">
        <h2 className="text-2xl font-semibold mb-4">특징</h2>
        <ul className="list-disc list-inside mb-4">
          {site.features.map((feature, idx) => (
            <li key={idx}>{feature}</li>
          ))}
        </ul>
      </div>

      {/* 하단: 사이트 주요 기능 및 설명 */}
      <div className="mt-6">
        <h2 className="text-2xl font-semibold mb-4">주요 기능</h2>
        <ul className="list-disc list-inside mb-4">
          {site.functions.map((func, idx) => (
            <li key={idx}>{func}</li>
          ))}
        </ul>
        <h2 className="text-2xl font-semibold mb-4">설명</h2>
        <p className="text-lg mb-4">{site.description}</p>
      </div>
    </div>
  );
};

export default DetailSite;

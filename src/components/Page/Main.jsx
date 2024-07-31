import React, { useRef, useState, useEffect } from "react";
import { Card, CardImage, CardContent, CardTags } from "../Card/Card";
import { Link } from "react-router-dom";
import { fetchSitesData } from "../../utils/fetchData";

const Main = ({ title }) => {
  const [scrollable, setScrollable] = useState({});
  const [allSites, setAllSites] = useState([]);
  const scrollRefs = useRef({});

  useEffect(() => {
    const fetchData = async () => {
      const sitesData = await fetchSitesData();
      const sitesArray = Object.keys(sitesData).flatMap((category) =>
        sitesData[category].sites.map((site) => ({ ...site, category }))
      );
      setAllSites(sitesArray);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const checkScrollable = () => {
      ["mostUsed", "recentlyAdded"].forEach((section) => {
        const ref = scrollRefs.current[section];
        if (ref) {
          setScrollable((prev) => ({
            ...prev,
            [section]: ref.scrollWidth > ref.clientWidth,
          }));
        }
      });
    };

    checkScrollable();

    const handleResize = () => {
      checkScrollable();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [allSites]);

  const scroll = (section, direction) => {
    const ref = scrollRefs.current[section];
    if (ref) {
      const scrollAmount = 2 * 320; // Assuming each card is 320px wide including margin
      ref.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">{title}</h1>
      <div>
        <h2 className="text-2xl font-semibold mb-4">많이 사용한 사이트</h2>
        <div className="relative group">
          {scrollable.mostUsed && (
            <>
              <div
                onClick={() => scroll("mostUsed", "left")}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 bg-opacity-50 p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ userSelect: "none", cursor: "pointer" }}
              >
                &lt;
              </div>
              <div
                onClick={() => scroll("mostUsed", "right")}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 bg-opacity-50 p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ userSelect: "none", cursor: "pointer" }}
              >
                &gt;
              </div>
            </>
          )}
          <div
            ref={(el) => (scrollRefs.current.mostUsed = el)}
            className="flex space-x-4 overflow-x-auto scrollbar-hide scroll-smooth"
          >
            {allSites.map((site, idx) => (
              <Link
                to={`/introduce/${site.category}/${encodeURIComponent(
                  site.name
                )}`}
                key={idx}
              >
                <Card className="bg-[#f5f5f5] flex-none w-80">
                  <CardImage
                    src={site.image}
                    alt={`${site.name}`}
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
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">최근 추가된 사이트</h2>
        <div className="relative group">
          {scrollable.recentlyAdded && (
            <>
              <div
                onClick={() => scroll("recentlyAdded", "left")}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 bg-opacity-50 p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ userSelect: "none", cursor: "pointer" }}
              >
                &lt;
              </div>
              <div
                onClick={() => scroll("recentlyAdded", "right")}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 bg-opacity-50 p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ userSelect: "none", cursor: "pointer" }}
              >
                &gt;
              </div>
            </>
          )}
          <div
            ref={(el) => (scrollRefs.current.recentlyAdded = el)}
            className="flex space-x-4 overflow-x-auto scrollbar-hide scroll-smooth"
          >
            {allSites.map((site, idx) => (
              <Link
                to={`/introduce/${site.category}/${encodeURIComponent(
                  site.name
                )}`}
                key={idx}
              >
                <Card className="bg-[#f5f5f5] flex-none w-80">
                  <CardImage
                    src={site.image}
                    alt={`${site.name}`}
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
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;

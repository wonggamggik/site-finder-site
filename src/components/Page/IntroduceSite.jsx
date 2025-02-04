import React, { useRef, useState, useEffect } from "react";
import { Card, CardImage, CardContent, CardTags } from "../Card/Card";
import { Link } from "react-router-dom";

const IntroduceSite = ({ sites, title }) => {
  const [scrollable, setScrollable] = useState({});
  const scrollRefs = useRef({});

  useEffect(() => {
    const checkScrollable = (category) => {
      const ref = scrollRefs.current[category];
      if (ref) {
        setScrollable((prev) => ({
          ...prev,
          [category]: ref.scrollWidth > ref.clientWidth,
        }));
      }
    };

    Object.keys(sites).forEach((category) => {
      checkScrollable(category);
    });

    const handleResize = () => {
      Object.keys(sites).forEach((category) => {
        checkScrollable(category);
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [sites]);

  const scroll = (category, direction) => {
    const ref = scrollRefs.current[category];
    if (ref) {
      const scrollAmount = 2 * 320;
      ref.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">{title}</h1>
      <div className="space-y-8">
        {Object.keys(sites).map((category, index) => (
          <div key={index}>
            <h2 className="text-2xl font-semibold mb-4">
              {sites[category].ko}
            </h2>
            <div className="relative group">
              {scrollable[category] && (
                <>
                  <div
                    onClick={() => scroll(category, "left")}
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 bg-opacity-50 p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ userSelect: "none", cursor: "pointer" }}
                  >
                    &lt;
                  </div>
                  <div
                    onClick={() => scroll(category, "right")}
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 bg-opacity-50 p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ userSelect: "none", cursor: "pointer" }}
                  >
                    &gt;
                  </div>
                </>
              )}
              <div
                ref={(el) => (scrollRefs.current[category] = el)}
                className="flex space-x-4 overflow-x-auto scrollbar-hide scroll-smooth"
              >
                {sites[category].sites.map((site, idx) => (
                  <Link
                    to={`/introduce/${category}/${encodeURIComponent(
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
        ))}
      </div>
    </div>
  );
};

export default IntroduceSite;

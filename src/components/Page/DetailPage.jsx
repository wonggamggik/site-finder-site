// import React from "react";
// import { useParams, Link } from "react-router-dom";
// import { Card, CardImage, CardContent, CardTags } from "../Card/Card";

// const DetailPage = ({ sites }) => {
//   const { category } = useParams();

//   console.log("Category from params:", category);
//   console.log("Sites data:", sites);

//   if (!category) {
//     return <div className="container mx-auto p-6">Category not found</div>;
//   }

//   const categoryData = sites[category];
//   const categorySites = categoryData?.sites || [];

//   if (!categoryData) {
//     return <div className="container mx-auto p-6">Category not found</div>;
//   }

//   return (
//     <div className="container mx-auto p-6">
//       <h1 className="text-3xl font-bold mb-6">{categoryData.ko}</h1>
//       <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
//         {categorySites.map((site, idx) => (
//           <Link
//             to={`/introduce/${category}/${encodeURIComponent(site.name)}`}
//             key={idx}
//           >
//             <Card className="bg-[#f5f5f5]">
//               <CardImage
//                 src={site.image}
//                 alt={`${site.name}`}
//                 className="object-cover w-full rounded-t-lg aspect-video"
//               />
//               <CardContent className="p-4">
//                 <h3 className="text-lg font-semibold text-[#6d6d6d]">
//                   {site.name}
//                 </h3>
//                 <p className="text-sm text-[#8d8d8d]">
//                   {site.simpleDescription}
//                 </p>
//                 <CardTags tags={site.tags} />
//               </CardContent>
//             </Card>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default DetailPage;

import React, { useRef, useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Card, CardImage, CardContent, CardTags } from "../Card/Card";

const DetailPage = ({ sites }) => {
  const { category } = useParams();
  const [tagsGrouped, setTagsGrouped] = useState({});
  const scrollRefs = useRef({});
  const [scrollable, setScrollable] = useState({});

  useEffect(() => {
    const groupByTags = () => {
      const categoryData = sites[category];
      if (!categoryData) return;

      const grouped = {};
      categoryData.sites.forEach((site) => {
        site.tags.forEach((tag) => {
          if (!grouped[tag]) {
            grouped[tag] = [];
          }
          grouped[tag].push(site);
        });
      });
      setTagsGrouped(grouped);
    };

    groupByTags();
  }, [category, sites]);

  useEffect(() => {
    const checkScrollable = (tag) => {
      const ref = scrollRefs.current[tag];
      if (ref) {
        setScrollable((prev) => ({
          ...prev,
          [tag]: ref.scrollWidth > ref.clientWidth,
        }));
      }
    };

    Object.keys(tagsGrouped).forEach((tag) => {
      checkScrollable(tag);
    });

    const handleResize = () => {
      Object.keys(tagsGrouped).forEach((tag) => {
        checkScrollable(tag);
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [tagsGrouped]);

  const scroll = (tag, direction) => {
    const ref = scrollRefs.current[tag];
    if (ref) {
      const scrollAmount = 2 * 320;
      ref.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  if (!category) {
    return <div className="container mx-auto p-6">Category not found</div>;
  }

  const categoryData = sites[category];

  if (!categoryData) {
    return <div className="container mx-auto p-6">Category not found</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">{categoryData.ko}</h1>
      <div className="space-y-8">
        {Object.keys(tagsGrouped).map((tag, index) => (
          <div key={index}>
            <h2 className="text-2xl font-semibold mb-4">{tag}</h2>
            <div className="relative group">
              {scrollable[tag] && (
                <>
                  <div
                    onClick={() => scroll(tag, "left")}
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 bg-opacity-50 p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ userSelect: "none", cursor: "pointer" }}
                  >
                    &lt;
                  </div>
                  <div
                    onClick={() => scroll(tag, "right")}
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 bg-opacity-50 p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ userSelect: "none", cursor: "pointer" }}
                  >
                    &gt;
                  </div>
                </>
              )}
              <div
                ref={(el) => (scrollRefs.current[tag] = el)}
                className="flex space-x-4 overflow-x-auto scrollbar-hide scroll-smooth"
              >
                {tagsGrouped[tag].map((site, idx) => (
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

export default DetailPage;

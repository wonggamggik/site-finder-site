import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./components/Page/Home";
import Main from "./components/Page/Main";
import IntroduceSite from "./components/Page/IntroduceSite";
import DetailPage from "./components/Page/DetailPage";
import DetailSite from "./components/Page/DetailSite";
import sitesData from "./data/sites.json";
import Permanent from "./components/Page/Permanent";

function App() {
  const [sites, setSites] = useState({});

  useEffect(() => {
    const fetchSites = async () => {
      try {
        setSites(sitesData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchSites();
  }, []);

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/main" element={<Main title="메인 페이지" />} />
        <Route
          path="/introduce"
          element={<IntroduceSite sites={sites} title="사이트 소개" />}
        />
        {Object.keys(sites).map((category) => (
          <Route
            key={category}
            path={`/introduce/:category`}
            element={<DetailPage sites={sites} />}
          />
        ))}
        {Object.keys(sites).map((category) =>
          sites[category].sites.map((site) => (
            <Route
              key={site.name}
              path={`/introduce/:category/:siteName`}
              element={<DetailSite sites={sites} />}
            />
          ))
        )}
        <Route path="/permanent" element={<Permanent />} />
      </Routes>
    </Layout>
  );
}

export default App;

import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./components/Page/Home";
import Main from "./components/Page/Main";
import IntroduceSite from "./components/Page/IntroduceSite";
import sitesData from "./data/sites.json"; // JSON 파일 import
import Permanent from "./components/Page/Permanent";

function App() {
  const [sites, setSites] = useState({});

  useEffect(() => {
    // JSON 파일에서 데이터를 가져옵니다.
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
        <Route path="/main" element={<Main />} />
        <Route
          path="/introduce"
          element={<IntroduceSite sites={sites} title="All Sites" />}
        />
        {Object.keys(sites).map((category) => (
          <Route
            key={category}
            path={`/${category}`}
            element={
              <IntroduceSite
                sites={{ [category]: sites[category] }}
                title={category}
              />
            }
          />
        ))}
        <Route path="/permanent" element={<Permanent />} />
        {/* 다른 경로들 추가 */}
      </Routes>
    </Layout>
  );
}

export default App;

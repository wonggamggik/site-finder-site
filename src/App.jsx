import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Page/Home";
import IntroduceSite from "./components/Page/IntroduceSite";
import sitesData from "./data/sites.json"; // JSON 파일 import
import Main from "./components/Page/Main";
import Temp from "./components/Page/Temp";

function App() {
  const [sites, setSites] = useState([]);

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
        <Route path="/introduce" element={<IntroduceSite sites={sites} />} />
        <Route path="/temp" element={<Temp />} />
        {/* 다른 경로들 추가 */}
      </Routes>
    </Layout>
  );
}

export default App;

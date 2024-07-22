import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import IntroduceSite from "./components/IntroduceSite";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/introduce" element={<IntroduceSite />} />
        {/* <Route path="/about" element={<About />} /> */}
        {/* 다른 경로들 추가 */}
      </Routes>
    </Layout>
  );
}

export default App;

import React from "react";
import { Navbar } from "./components/home/Navbar";
import { Home } from "./components/home/Home";
import { Footer } from "./components/home/Footer";
import { About } from "./components/pages/About";
import { Stats } from "./components/pages/Stats";
import { Certificates } from "./components/pages/Certificates";
import { Utilities } from "./components/pages/Utilities";
import { Skills } from "./components/pages/Skills";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const App = () => {
  return (
    <>
      <BrowserRouter className="bg-gray-100 select-none">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Stats" element={<Stats />} />
          <Route path="/Skills" element={<Skills />} />
          <Route path="/Utilities" element={<Utilities />} />
          <Route path="/Certificates" element={<Certificates />} />
          <Route path="*" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};




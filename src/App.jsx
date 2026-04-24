import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/home/Navbar";
import { Banner } from "./components/home/Banner";
import { Footer } from "./components/home/Footer";
import { Home } from "./components/home/Home";
import { About } from "./components/pages/About";
import { Stats } from "./components/pages/Stats";
import { Utilities } from "./components/pages/Utilities";
import { Blogs } from "./components/pages/Blogs";
import { Certificates } from "./components/pages/Certificates";

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <div className="bg-gray-100 select-none">
          <Navbar />
          <Banner />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/About" element={<About />} />
              <Route path="/Stats" element={<Stats />} />
              <Route path="/Utilities" element={<Utilities />} />
              <Route path="/Blogs" element={<Blogs />} />
              <Route path="/Certificates" element={<Certificates />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
};

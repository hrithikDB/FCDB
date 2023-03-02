import React from "react";
import Home from "./Home";
import About from "./About";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";

const Routing = () => {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Routing;

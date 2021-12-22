import React from "react";
import Home from "./Components/Home";
import About from "../src/Components/About";
import Technology from "../src/Components/Technology";
import Contact from "../src/Components/Contact";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="technology" element={<Technology />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;

import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import Product from "./Product";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={"Home.jsx"} />
        <Route path="/product" element={"product.jsx"} />
      </Routes>
    </div>
  );
};

export default App;

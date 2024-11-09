import React from "react";
import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Predictor from "./components/Predictor";
import Home from "./components/Home";
import Aboutus from "./pages/Aboutus";
import Contact from "./pages/Contact";
import College from "./pages/College";

function App() {
  return (
    <>
      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
          <Route path="/predictor" element={<Predictor />} />
          <Route path="/Aboutus" element={<Aboutus />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/College" element={<College />} />
        </Route>
      </Routes>
      <Toaster />
    </>
  );
}

export default App;

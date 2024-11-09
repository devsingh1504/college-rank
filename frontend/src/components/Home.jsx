import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import ScrollingLogos from "./ScrollingLogos";
import Feature from "./Feature";
import Footer from "./Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ScrollingLogos />
      <Feature />
      <Footer />
    </>
  );
}

export default Home;

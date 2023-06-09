import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

export default function Layout({ children, secondNavbar }) {
  return (
    <div>
      {secondNavbar ? <Navbar blog="blog" /> : <Navbar />}
      {children}
      <Footer />
    </div>
  );
}

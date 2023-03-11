import React from "react";
import Footer from "./Footer";
import Navbar from "./NavBar";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col p-0">
        {children}
      </div>
      <Footer />
    </>
  );
}

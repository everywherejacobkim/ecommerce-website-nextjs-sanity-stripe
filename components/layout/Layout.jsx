import React from "react";
import Head from "next/head";
import NavBar from "../navBar/NavBar";
import Footer from "../footer/Footer";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Head>T-shirts Kingdom Store</Head>
      <header>
        <NavBar />
      </header>
      <main className="main-container">{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;

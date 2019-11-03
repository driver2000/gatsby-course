import React from "react";
import { Link } from "gatsby";
import Header from "../components/Header";
import Footer from "../components/Footer";

const indexPage = () => {
  return (
    <div>
      <Header />
      <h1>Hello.</h1>
      <h2>I'm Daniele, a backend developer living in beautiful Naples.</h2>
      <p>
        Need a dev? <Link to="/contact"> Contact me.</Link>
      </p>
      <Footer />
    </div>
  );
};

export default indexPage;

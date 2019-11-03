import React from "react";
import { Link } from "gatsby";
import Header from "../components/Header";
import Footer from "../components/Footer";

const AboutPage = () => {
  return (
    <div>
      <Header />
      <h1> About Me </h1>
      <p>Hi! I'm a dev and I'm trying GatsbyJS for the first time!</p>
      <p>
        Need a dev? <Link to="/contact"> Contact me.</Link>
      </p>
      <Footer />
    </div>
  );
};

export default AboutPage;

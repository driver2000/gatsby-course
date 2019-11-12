import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";

const AboutPage = () => {
  return (
    <Layout title="About">
      <h1>About Me</h1>
      <p>Hi! I'm a dev and I'm trying GatsbyJS for the first time!</p>
      <p>
        Need a dev? <Link to="/contact"> Contact me.</Link>
      </p>
    </Layout>
  );
};

export default AboutPage;

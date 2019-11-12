import React from "react";
import Head from "../components/head";

import { Link } from "gatsby";

import Layout from "../components/layout";

const indexPage = () => {
  return (
    <Layout title="Home">
      <h1>Hello.</h1>
      <h2>I'm Daniele, a backend developer living in beautiful Naples.</h2>
      <p>
        Need a dev? <Link to="/contact"> Contact me.</Link>
      </p>
    </Layout>
  );
};

export default indexPage;

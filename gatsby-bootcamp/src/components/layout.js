import React from "react";
import Header from "./header";
import Head from "./head";
import Footer from "./footer";

import layoutStyles from "../styles/layout.module.scss";

const Layout = props => {
  return (
    <div className={layoutStyles.container}>
      <div className={layoutStyles.content}>
        <Header />
        <Head title={props.title} />
        {props.children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;

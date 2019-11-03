import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ContactPage = () => {
  return (
    <div>
      <Header />
      <h1> Contact </h1>
      <p>
        The best way you reach me is via{" "}
        <a href="https://twitter.com/driver2000" target="_blank">
          @driver2000
        </a>{" "}
        on Twitter
      </p>
      <Footer />
    </div>
  );
};

export default ContactPage;

import React from "react";
import Header from "../components/header";
import Layout from "../components/layout";

export default function Contact() {
  return (
    <Layout>
      <Header headerText="Contact Us" />
      <h3>
        <a href="mailto:tnffcanada@gmail.com">Email us</a>
      </h3>
    </Layout>
  );
}

import React from "react";
import Header from "../components/header";
import Layout from "../components/layout";

export default function Contact() {
  return (
    <Layout>
      <Header headerText="Contact Us" />
      <h4>
        Email us: <a href="mailto:tnffcanada@gmail.com">tnffcanada@gmail.com</a>
      </h4>
    </Layout>
  );
}

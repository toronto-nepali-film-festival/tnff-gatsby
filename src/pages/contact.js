import React from "react";
import Header from "../components/header";
import Layout from "../components/layout";

export default function Contact() {
  return (
    <Layout>
      <Header headerText="Contact" />
      <a href="mailto:tnffcanada@gmail.com">Email us</a>
    </Layout>
  );
}

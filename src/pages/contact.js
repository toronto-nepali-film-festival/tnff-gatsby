import React from "react";
import Header from "../components/header";
import Layout from "../components/layout";

export default function Contact() {
  return (
    <Layout>
      <Header headerText="Contact Us" />
      <h5>
        Email us:{" "}
        <a href="mailto:tnffcanada@gmail.com">
          <u>tnffcanada@gmail.com</u>
        </a>
      </h5>
      <h5>
        Instagram:{" "}
        <a
          href="https://instagram.com/tnffcanada/"
          target="_blank"
          rel="noreferrer"
        >
          <u>@tnffcanada</u>
        </a>
      </h5>
      <h5>
        Twitter:{" "}
        <a
          href="https://twitter.com/tnffcanada/"
          target="_blank"
          rel="noreferrer"
        >
          <u>@tnffcanada</u>
        </a>
      </h5>
      <h5>
        Facebook:{" "}
        <a
          href="https://facebook.com/TorontoNepaliFilmFestival/"
          target="_blank"
          rel="noreferrer"
        >
          <u>Toronto Nepali Film Festival</u>
        </a>
      </h5>
    </Layout>
  );
}

import React from "react";
import Layout from "../components/layout";
import Header from "../components/header";
import ImageBanner from "../components/imagebanner";

export default function Home() {
  return (
    <Layout>
      <ImageBanner
        imageUrl="https://s3.amazonaws.com/tnff-static.tnff.ca/tnff-2015/sunkali/sunakali-4.jpg"
        imageText="View past films" />
      <Header headerText="About TNFF" />
      <p>
        Toronto Nepali Film Festival (TNFF) is a not for profit organization
        based in Toronto, Ontario. Partnering with organizations in Canada,
        Nepal and beyond, TNFF brings a festival of extraordinary Nepali films
        in Toronto and other cities. By featuring films of South Asia,
        specifically Nepal, TNFF intends to add a fresh dimension to the
        multi-layered diasporic narratives of Canada.
      </p>
    </Layout>
  );
}

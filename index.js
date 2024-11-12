import React from "react";
import Head from "next/head";

import Navbar from "../components/navbar";
import Landing from "../components/landing";
import Footer from "../components/footer";
import Banner from "../components/banner";
import useWindowSize from "../hooks/useWindowSize";
import { hasDiscountExpired, NAVBAR_HEIGHT, BANNER_HEIGHT } from "../utils";

export default function Home() {
  const isMobile = useWindowSize().width < 500;
  const topbarHeight = hasDiscountExpired
    ? NAVBAR_HEIGHT[isMobile ? "mobile" : "desktop"]
    : NAVBAR_HEIGHT[isMobile ? "mobile" : "desktop"] +
      BANNER_HEIGHT[isMobile ? "mobile" : "desktop"];

  return (
    <>
      <Head>
        <title>The Royal Mint Menu</title>
        <meta
          title="description"
          content="The Royal Mint - a multicuisine restaurant in Baharagora"
        />
      </Head>
      <div style={{ height: topbarHeight }}>
        <Navbar />
        <Banner />
      </div>
      <Landing />
      <Footer />
    </>
  );
}

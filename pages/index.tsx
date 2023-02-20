import Navbar from "@/components/Navbar";
import type { NextPage } from "next";
import Head from "next/head";
import BodyCard from "../components/BodyCard";
import HeroSection from "../components/HeroSection";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Awesomedot</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroSection />
      <BodyCard />
    </div>
  );
};

export default Home;

import Foot from "@/components/foot";
import Layout from "@/components/layout";

import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className="container mx-auto font-sans">
        <Navbar />
        <main>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </main>
        <Foot />
      </div>
    </>
  );
}

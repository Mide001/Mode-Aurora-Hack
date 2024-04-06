import type { NextPage } from 'next';
import Head from 'next/head';
import Navbar from "../components/Navbar";
import MainContent from "../components/MainContent";
import Footer from "../components/Footer";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>GovernMode</title>
        <meta
          content="GovernMode - Voting with hidden votes until round completes"
          name="description"
        />
        <link href="/favicon.ico" rel="icon" />
      </Head>

      <main>
        <Navbar />
        <MainContent />
        <Footer />
      </main>
    </>
  );
};

export default Home;

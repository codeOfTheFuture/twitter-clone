import type { NextPage } from "next";
import Head from "next/head";
import Feed from "../components/Feed";
import Sidebar from "../components/Sidebar";
import Widgets from "../components/Widgets";

const Home: NextPage = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Head>
        <title>Twitter Clone</title>
      </Head>


      <main>

        {/*  Sidebar  */}
        <Sidebar />

        {/*  Feed  */}
        <Feed />

        {/*  Widgets  */}
        <Widgets />

      </main>
    </div>
  );
};

export default Home;

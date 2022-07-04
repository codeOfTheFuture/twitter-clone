import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Head>
        <title>Twitter Clone</title>
      </Head>
      {/* Home page */}
      <h1 className="text-xl font-semibold">Home Page</h1>
    </div>
  );
};

export default Home;

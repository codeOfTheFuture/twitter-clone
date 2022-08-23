import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import { Toaster } from "react-hot-toast";
import Feed from "../components/Feed";
import Sidebar from "../components/Sidebar";
import Widgets from "../components/Widgets";
import { Tweet } from "../types/typings";

interface Props {
  tweets: Tweet[];
}

const Home: NextPage<Props> = () => {

  return (
    <div className='lg:max-w-6xl mx-auto h-screen overflow-hidden'>
      <Head>
        <title>Twitter Clone</title>
      </Head>

      <Toaster />

      <main className='grid grid-cols-9'>
        <Sidebar />

        <Feed />

        <Widgets />
      </main>
    </div>
  );
};

export default Home;

// export const getServerSideProps: GetServerSideProps = async () => {
//   const tweets = await fetchTweets();

//   return {
//     props: {
//       tweets,
//     },
//   };
// };

import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import { Toaster } from "react-hot-toast";
import Modal from "../components/modal/Modal";
import TweetBox from "../components/tweetbox/TweetBox";
import Feed from "../components/feed/Feed";
import Sidebar from "../components/sidebar/Sidebar";
import Widgets from "../components/widgets/Widgets";
import { Tweet } from "../types/typings";
import { fetchTweets } from "../utils/fetchTweets";

interface Props {
  tweets: Tweet[];
}

const Home = ({ tweets }: Props) => {
  return (
    <div className="lg:max-w-7xl mx-auto">
      <Head>
        <link
          rel="shortcut icon"
          href="/twitter-favicon.ico"
          type="image/x-icon"
        />
        <title>Home / Twitter Clone</title>
      </Head>

      <Toaster />

      <main className="grid grid-cols-10">
        <Modal>
          <TweetBox />
        </Modal>

        <Sidebar />

        <Feed tweets={tweets} />

        <Widgets />
      </main>
    </div>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (): Promise<{
  props: { tweets: Tweet[] };
}> => {
  const tweets = await fetchTweets();

  console.log("tweets gssp>>", tweets);

  return {
    props: {
      tweets,
    },
  };
};

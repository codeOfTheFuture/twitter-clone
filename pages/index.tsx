import {
  collection,
  DocumentData,
  getDocs,
  orderBy,
  query,
  QuerySnapshot,
} from "firebase/firestore";
import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import { Toaster } from "react-hot-toast";
import Feed from "../components/Feed";
import Sidebar from "../components/Sidebar";
import Widgets from "../components/Widgets";
import { db } from "../firebase.setup";
import { Tweet } from "../types/typings";

interface Props {
  tweets: Tweet[];
}

const Home: NextPage<Props> = ({ tweets }) => {
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
        <Sidebar />

        <Feed tweets={tweets} />

        <Widgets />
      </main>
    </div>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  const q = query(collection(db, "tweets"), orderBy("timestamp", "desc"));
  const querySnapshot: QuerySnapshot<DocumentData> = await getDocs(q);

  const tweets = querySnapshot.docs
    .map((doc: DocumentData) => doc.data())
    .map((tweet: Tweet) => ({
      ...tweet,
      timestamp: new Date(tweet.timestamp.toDate()).toLocaleString(),
    }));

  return {
    props: {
      tweets,
    },
  };
};

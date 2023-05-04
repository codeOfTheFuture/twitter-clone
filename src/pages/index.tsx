import Feed from "../components/feed/Feed";
import TweetBox from "../components/feed/tweetbox/TweetBox";
import Modal from "../components/modal/Modal";
import Sidebar from "../components/sidebar/Sidebar";
import Widgets from "../components/widgets/Widgets";
import { Tweet } from "../types/typings";
import { fetchTweets } from "../utils/fetchTweets";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { Toaster } from "react-hot-toast";

interface Props {
	tweets: Tweet[];
}

const HomePage = ({ tweets }: Props) => {
	return (
		<div className="w-full">
			<Head>
				<link rel="shortcut icon" href="/twitter-favicon.ico" type="image/x-icon" />
				<title>Home / Twitter Clone</title>
			</Head>

			<Toaster />

			<main className="grid grid-cols-8 xl:grid-cols-9">
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

export default HomePage;

export const getServerSideProps: GetServerSideProps = async (): Promise<{
	props: { tweets: Tweet[] };
}> => {
	const tweets: Tweet[] = await fetchTweets();

	return {
		props: {
			tweets,
		},
	};
};

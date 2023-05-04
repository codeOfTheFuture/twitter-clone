import { RefreshIcon } from "@heroicons/react/outline";
import { Tweet } from "../../types/typings";
import TweetBox from "./tweetbox/TweetBox";
import { useEffect, useState } from "react";
import Tweets from "./tweets/Tweets";
import toast from "react-hot-toast";
import { fetchTweets } from "../../utils/fetchTweets";
// import { collection, DocumentData, onSnapshot, orderBy, query } from "firebase/firestore";
// import { db } from "../../../firebase.setup";

interface Props {
	tweets: Tweet[];
}

const Feed = ({ tweets: tweetProps }: Props) => {
	const [tweets, setTweets] = useState<Tweet[]>(tweetProps);

	const handleRefresh = async () => {
		const refreshToast = toast.loading("Refreshing...", {
			duration: 2000,
		});

		const tweets = await fetchTweets();
		setTweets(tweets);

		toast.success("Feed Updated", {
			id: refreshToast,
		});
	};

	return (
		<div className="col-span-6 sm:col-span-5 xl:col-span-3 border-x overflow-y-auto h-screen scrollbar-hide">
			<div className="flex items-center justify-between">
				<h1 className="p-5 pb-0 text-2xl font-bold cursor-pointer">Home</h1>
				<RefreshIcon
					onClick={handleRefresh}
					className="mr-5 mt-5 h-8 w-8 cursor-pointer text-twitter transition-all duration-500 ease-out hover:rotate-180 active:scale-125"
				/>
			</div>

			<div>
				<TweetBox />
			</div>

			{tweets.length && <Tweets tweets={tweets} />}
		</div>
	);
};

export default Feed;
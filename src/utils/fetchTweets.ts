import { Tweet } from "../types/typings";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const fetchTweets = async (): Promise<Tweet[]> => {
	try {
		const res = await fetch(`${BASE_URL}/api/tweets`);
		const tweets: Tweet[] = await res.json();

		return tweets;
	} catch (error: any) {
		throw new Error(error.message);
	}
};

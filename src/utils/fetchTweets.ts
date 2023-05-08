import { Tweet } from "../types/typings";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

/**

Fetches tweets from the backend.

@async

@returns {Promise<Tweet[]>} A promise that resolves to an array of tweets.

@throws {Error} If there is an error fetching the tweets from the backend.
*/

export const fetchTweets = async (): Promise<Tweet[]> => {
	try {
		const res = await fetch(`${BASE_URL}/api/tweets`);
		const tweets: Tweet[] = await res.json();

		return tweets;
	} catch (error: any) {
		throw new Error(error.message);
	}
};

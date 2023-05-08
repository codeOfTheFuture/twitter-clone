import { TweetData } from "../types/typings";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

/**

Adds a new tweet to the backend.

@async

@param {TweetData} tweetData - The data of the tweet to be added.

@returns {Promise<{message: string}>} A promise that resolves to an object containing a message.

@throws {Error} If there is an error adding the tweet to the backend.
*/

export const addTweet = async (tweetData: TweetData): Promise<{ message: string }> => {
	try {
		const response: Response = await fetch(`${BASE_URL}/api/tweets`, {
			method: "POST",
			body: JSON.stringify(tweetData),
		});
		const data: { message: string } = await response.json();

		return data;
	} catch (error: any) {
		console.error(error);
		throw new Error(error.message);
	}
};

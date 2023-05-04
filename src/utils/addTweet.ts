import { TweetData } from "../types/typings";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const addTweet = async (tweetData: TweetData) => {
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

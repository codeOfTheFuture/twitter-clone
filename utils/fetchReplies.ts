// import { Reply } from "../types/typings";

export const fetchReplies = async (tweetId: string) => {
	const res = await fetch(`/api/getReplies?tweetId=${tweetId}`);

	const replies = await res.json();

	return replies;
};

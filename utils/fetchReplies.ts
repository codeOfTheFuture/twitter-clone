import { Reply } from "../typings";

export const fetchReplies = async (tweetId: string) => {
  const res = await fetch(`/api/getReplies?tweetId=${tweetId}`);

  const replies: Reply[] = await res.json();

  return replies;
};

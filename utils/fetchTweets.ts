import { Tweet } from "./../typings.d";

export const fetchTweets = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getTweets`);

  const data = await res.json(),
    tweets: Tweet[] = data.tweets;

  return tweets;
};

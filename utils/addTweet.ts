import { Tweet } from "../types/typings";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const addTweet = async (tweetData: Tweet) => {
  try {
    const res = await fetch(`${BASE_URL}/api/tweets`, {
      method: "POST",
      body: JSON.stringify(tweetData),
    });
    const data = await res.json();

    return data;
  } catch (error) {
    console.error(error);
  }
};

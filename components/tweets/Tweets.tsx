import React, { FC } from "react";
import { Tweet } from "../../types/typings";
import TweetComponent from "./Tweet";
import { DocumentData } from "firebase/firestore";

interface Props {
	tweets: Tweet[];
}

const Tweets = ({ tweets }: Props) => {
	return (
		<div>
			{tweets?.map((tweet: Tweet, i: number) => (
				<TweetComponent key={i} tweet={tweet} />
			))}
		</div>
	);
};

export default Tweets;

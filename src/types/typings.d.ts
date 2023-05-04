interface TweetData {
	userName: string;
	userHandle: string;
	profileImage: string;
	tweetText: string;
	tweetImage?: string | null | undefined;
}

interface Tweet extends TweetData {
	timestamp: any;
}

export { TweetData, Tweet };

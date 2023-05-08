import { TweetData } from "../types/typings";

/**

Constructs a tweet object with the given data passed into it.
Throws an error if any of the required fields are missing.
@param {TweetData} tweetData - An object containing data for the tweet.
@param {string} tweetData.userName - The name of the user who posted the tweet.
@param {string} tweetData.userHandle - The user handle of the user who posted the tweet.
@param {string} tweetData.profileImage - The URL of the profile image of the user who posted the tweet.
@param {string} tweetData.tweetText - The text content of the tweet.
@param {string | undefined} tweetData.tweetImage - The URL of the image attached to the tweet (optional).
@throws {Error} Missing required field in constructTweet
@returns {TweetData} - A tweet object with the given data.
*/

export const constructTweet = ({
	userName,
	userHandle,
	profileImage,
	tweetText,
	tweetImage,
}: TweetData): TweetData => {
	const requiredFields: string[] = [userName, userHandle, profileImage, tweetText];

	for (const field of requiredFields) {
		if (!field) {
			throw new Error("Missing required field in constructTweet");
		}
	}

	const tweetData: TweetData = {
		userName,
		userHandle,
		profileImage,
		tweetText,
	};

	if (tweetImage) {
		tweetData.tweetImage = tweetImage;
	}

	return tweetData;
};

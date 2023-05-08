import { constructTweet } from "../constructTweet";
import { TweetData } from "@/src/types/typings";

describe("constructTweet", () => {
	test("throws an error if any of the required fields are missing", () => {
		const tweetData: TweetData = {
			userName: "John Doe",
			userHandle: "@johndoe",
			profileImage: "https://example.com/profile.jpg",
			tweetText: "",
			tweetImage: "https://example.com/tweet.jpg",
		};

		expect(() => constructTweet(tweetData)).toThrowError(
			"Missing required field in constructTweet"
		);
	});

	test("returns a tweet object with the given data", () => {
		const tweetData: TweetData = {
			userName: "Jane Doe",
			userHandle: "@janedoe",
			profileImage: "https://example.com/profile.jpg",
			tweetText: "This is a tweet!",
			tweetImage: "https://example.com/tweet.jpg",
		};

		const tweet = constructTweet(tweetData);

		expect(tweet).toEqual({
			userName: "Jane Doe",
			userHandle: "@janedoe",
			profileImage: "https://example.com/profile.jpg",
			tweetText: "This is a tweet!",
			tweetImage: "https://example.com/tweet.jpg",
		});
	});

	it("returns a tweet object without the tweetImage field if it is not provided", () => {
		const tweetData: TweetData = {
			userName: "John Smith",
			userHandle: "@johnsmith",
			profileImage: "https://example.com/profile.jpg",
			tweetText: "Another tweet!",
		};

		const tweet = constructTweet(tweetData);

		expect(tweet).toEqual({
			userName: "John Smith",
			userHandle: "@johnsmith",
			profileImage: "https://example.com/profile.jpg",
			tweetText: "Another tweet!",
		});
	});
});

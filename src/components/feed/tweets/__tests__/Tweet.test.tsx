import { render, screen } from "@/jest.setup";
import Tweet from "../Tweet";
import { mockTweets } from "@/__mocks__/mockTweets";

describe("Tweet", () => {
	it("renders the tweet data", () => {
		render(<Tweet tweet={mockTweets[0]} />);
		expect(screen.getByText(mockTweets[0].userName)).toBeInTheDocument();
		expect(screen.getByText(mockTweets[0].tweetText)).toBeInTheDocument();
		expect(screen.getByAltText(mockTweets[0].tweetImage)).toBeInTheDocument();
	});

	it("renders the tweet data without an image", () => {
		const tweetWithoutImage = { ...mockTweets[0], tweetImage: undefined };
		render(<Tweet tweet={tweetWithoutImage} />);
		expect(screen.queryByAltText(mockTweets[0].tweetImage)).toBeNull();
	});
});

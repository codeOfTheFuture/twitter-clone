import { render, screen } from "@/jest.setup";
import Tweets from "@/src/components/feed/tweets/Tweets";
import { Tweet } from "@/src/types/typings";
import { mockTweets } from "@/__mocks__/mockTweets";

interface Props {
	tweets: Tweet[];
}

describe("Tweets component", () => {
	let props: Props;

	beforeEach(() => {
		props = {
			tweets: mockTweets,
		};
	});

	it("renders a list of tweets", () => {
		render(<Tweets {...props} />);
		const tweetElements = screen.getAllByTestId("tweet");
		expect(tweetElements).toHaveLength(mockTweets.length);
	});

	it("renders the tweet text correctly", () => {
		render(<Tweets {...props} />);
		const tweetElements = screen.getAllByTestId("tweet");
		for (let i = 0; i < tweetElements.length; i++) {
			expect(tweetElements[i]).toHaveTextContent(mockTweets[i].tweetText);
		}
	});

	// it("renders the tweet image correctly", () => {
	// 	render(<Tweets {...props} />);
	// 	const tweetImageElements = screen.getAllByAltText("tweet image");
	// 	for (let i = 0; i < tweetImageElements.length; i++) {
	// 		expect(tweetImageElements[i]).toHaveAttribute("src", mockTweets[i].tweetImage);
	// 	}
	// });
});

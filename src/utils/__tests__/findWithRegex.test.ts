import { ContentBlock } from "draft-js";
import { findWithRegex } from "@/src/utils/findWithRegex";

describe("findWithRegex", () => {
	const testRegex = /test/g;
	const testContentBlock = new ContentBlock({
		key: "1",
		type: "unstyled",
		text: "This is a test sentence. It has multiple test words in it.",
	});

	test("calls the callback function for each match of the regex", () => {
		const mockCallback = jest.fn();
		findWithRegex(testRegex, testContentBlock, mockCallback);

		expect(mockCallback).toHaveBeenCalledTimes(2);
		expect(mockCallback).toHaveBeenCalledWith(10, 14); // start and end indices of first match
		expect(mockCallback).toHaveBeenCalledWith(41, 45); // start and end indices of second match
	});

	test("does not call the callback function if the regex does not match anything", () => {
		const mockCallback = jest.fn();
		const noMatchContentBlock = new ContentBlock({
			key: "2",
			type: "unstyled",
			text: "This sentence does not contain any matches.",
		});
		findWithRegex(testRegex, noMatchContentBlock, mockCallback);

		expect(mockCallback).not.toHaveBeenCalled();
	});
});

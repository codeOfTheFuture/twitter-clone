import { ContentBlock } from "draft-js";
import { LIMIT, overLimitStrategy } from "@/src/utils/overLimitStrategy";

const mockCallback = jest.fn();

describe("overLimitStrategy", () => {
	let contentBlock: ContentBlock;

	beforeEach(() => {
		mockCallback.mockClear();
	});

	test("should call the callback with the start and end indexes if the length of the ContentBlock is greater than the limit", () => {
		contentBlock = new ContentBlock({
			key: "1",
			text: "This content is over the limit : Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dignissim augue eget mi tincidunt convallis. Sed id sapien vel eros bibendum tincidunt. Sed convallis dolor at odio porttitor, in dictum lectus placerat. Nunc auctor ante ut ligula malesuada, sit amet cursus velit blandit. Donec ut felis et magna tempor eleifend. Quisque ut eleifend justo. Curabitur fermentum odio ut tellus pulvinar, nec ultrices nibh pellentesque. In hac habitasse platea dictumst. Sed aliquet erat vel tortor elementum, at pharetra lectus dictum. Sed nec vestibulum neque. Aliquam erat volutpat.",
		});
		overLimitStrategy(contentBlock, mockCallback);
		expect(mockCallback).toHaveBeenCalledWith(LIMIT, contentBlock.getLength());
	});

	it("should not call the callback if the length of the ContentBlock is less than or equal to the limit", () => {
		contentBlock = new ContentBlock({
			key: "1",
			text: "This content is within the limit",
		});
		overLimitStrategy(contentBlock, mockCallback);
		expect(mockCallback).not.toHaveBeenCalled();
	});
});

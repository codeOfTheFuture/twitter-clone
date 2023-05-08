import { ContentBlock } from "draft-js";

type Callback = (start: number, end: number) => void;

/**
 * The character limit to check the length of the ContentBlock against.
 */

export const LIMIT = 280;

/**
 * Calls a callback function with the start and end indexes of a ContentBlock from Draft.js if its length is greater than a specified limit.
 *
 * @param {ContentBlock} contentBlock - The ContentBlock from Draft.js to check the length of.
 * @param {Callback} cb - A callback function to call with the start and end indexes of the ContentBlock if its length is greater than the limit.
 */

export const overLimitStrategy = (contentBlock: ContentBlock, cb: Callback) => {
	if (contentBlock.getLength() > LIMIT) {
		cb(LIMIT, contentBlock.getLength());
	}
};

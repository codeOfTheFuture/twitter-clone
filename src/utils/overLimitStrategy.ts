import { ContentBlock } from "draft-js";

type Callback = (start: number, end: number) => void;

const LIMIT = 280;
const START = LIMIT + 1;

export const overLimitStrategy = (contentBlock: ContentBlock, cb: Callback) => {
	if (contentBlock.getLength() > LIMIT) {
		cb(START, contentBlock.getLength());
	}
};

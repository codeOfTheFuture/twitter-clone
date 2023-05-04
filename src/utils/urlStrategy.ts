import { ContentBlock } from "draft-js";
import { findURLsWithRegex } from "./findUrlsWithRegex";

type Callback = (start: number, end: number) => void;

const URL_REGEX =
	/(?:https?:\/\/)?(?:www\.)?[a-zA-Z0-9_-]+(?:\.[a-zA-Z]{2,3}(?=\b))(?:(?:\/[\w#]+)*(?:\/\w+\?[a-zA-Z0-9_]+=\w+(?:&[a-zA-Z0-9_]+=\w+)*)?)?/g;

export const urlStrategy = (contentBlock: ContentBlock, cb: Callback) => {
	const matches = findURLsWithRegex(URL_REGEX, contentBlock);

	for (const match of matches) {
		const start = match.start;
		const length = match.match[0].length;
		cb(start, start + length);
	}
};

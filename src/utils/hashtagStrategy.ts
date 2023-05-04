import { ContentBlock } from "draft-js";
import { findWithRegex } from "./findWithRegex";

type Callback = (start: number, end: number) => void;

const HASHTAG_REGEX = /\B#\w*[a-zA-Z]+\w*/g;

export const hashtagStrategy = (contentBlock: ContentBlock, cb: Callback) => {
	findWithRegex(HASHTAG_REGEX, contentBlock, cb);
};

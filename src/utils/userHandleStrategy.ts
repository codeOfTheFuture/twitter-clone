import { ContentBlock } from "draft-js";
import { findWithRegex } from "./findWithRegex";

type Callback = (start: number, end: number) => void;

const USER_HANDLE_REGEX = /\B@[a-zA-Z0-9_]+/g;

export const userHandleStrategy = (contentBlock: ContentBlock, cb: Callback) => {
	findWithRegex(USER_HANDLE_REGEX, contentBlock, cb);
};

import { ContentBlock } from "draft-js";
import { findWithRegex } from "./findWithRegex";

type Callback = (start: number, end: number) => void;

/**
 * The regular expression used to match hashtags.
 *
 * Matches hashtags that start with "#" and contain at least one letter.
 */

const HASHTAG_REGEX = /\B#\w*[a-zA-Z]+\w*/g;

/**
 * Searches for hashtags within a ContentBlock from Draft.js and calls a callback function with the start and end indexes of each hashtag.
 *
 * @param {ContentBlock} contentBlock - The ContentBlock from Draft.js to search within.
 * @param {Callback} cb - A callback function to call with the start and end indexes of each hashtag.
 */

export const hashtagStrategy = (contentBlock: ContentBlock, cb: Callback) => {
	findWithRegex(HASHTAG_REGEX, contentBlock, cb);
};

import { ContentBlock } from "draft-js";
import { findURLsWithRegex } from "./findUrlsWithRegex";

type Callback = (start: number, end: number) => void;

/**
 * The regular expression used to match URLs.
 *
 * Matches URLs that start with "http://", "https://", or "www." and contain only letters, numbers, underscores, hyphens, and periods.
 */

const URL_REGEX =
	/(?:https?:\/\/)?(?:www\.)?[a-zA-Z0-9_-]+(?:\.[a-zA-Z]{2,3}(?=\b))(?:(?:\/[\w#]+)*(?:\/\w+\?[a-zA-Z0-9_]+=\w+(?:&[a-zA-Z0-9_]+=\w+)*)?)?/g;

/**
 * Searches for URLs within a ContentBlock from Draft.js and calls a callback function with the start and end indexes of each URL.
 *
 * @param {ContentBlock} contentBlock - The ContentBlock from Draft.js to search within.
 * @param {Callback} cb - A callback function to call with the start and end indexes of each URL.
 */

export const urlStrategy = (contentBlock: ContentBlock, cb: Callback) => {
	findURLsWithRegex(URL_REGEX, contentBlock, cb);
};

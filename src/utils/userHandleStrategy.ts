import { ContentBlock } from "draft-js";
import { findWithRegex } from "./findWithRegex";

type Callback = (start: number, end: number) => void;

/**
 * The regular expression used to match user handles.
 *
 * Matches handles that start with "@" and contain only letters, numbers, and underscores.
 */

const USER_HANDLE_REGEX = /\B@[a-zA-Z0-9_]+/g;

/**
 * Searches for user handles within a ContentBlock from Draft.js and calls a callback function with the start and end indexes of each handle.
 *
 * @param {ContentBlock} contentBlock - The ContentBlock from Draft.js to search within.
 * @param {Callback} cb - A callback function to call with the start and end indexes of each user handle.
 */

export const userHandleStrategy = (contentBlock: ContentBlock, cb: Callback) => {
	findWithRegex(USER_HANDLE_REGEX, contentBlock, cb);
};

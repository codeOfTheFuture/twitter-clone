import { ContentBlock } from "draft-js";

type Callback = (start: number, end: number) => void;

/**

Searches for matches of a regular expression within a ContentBlock from Draft.js and returns an array of matches, with the start index and the full match.
@param {RegExp} regex - The regular expression to search for.
@param {ContentBlock} contentBlock - The ContentBlock from Draft.js to search within.
@returns {Array<{ start: number, match: RegExpMatchArray }>} - An array of matches, each containing the start index and the full match.
*/

export const findURLsWithRegex = (regex: RegExp, contentBlock: ContentBlock, cb: Callback) => {
	const text = contentBlock.getText();
	const matches: { start: number; match: RegExpMatchArray }[] = [];

	let matchArr: RegExpMatchArray | null;
	while ((matchArr = regex.exec(text)) !== null) {
		matches.push({ start: matchArr.index!, match: matchArr });
	}

	for (const match of matches) {
		const start = match.start;
		const length = match.match[0].length;
		cb(start, start + length);
	}
};

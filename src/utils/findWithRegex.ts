import { ContentBlock } from "draft-js";

type Callback = (start: number, end: number) => void;

/**

Searches for matches of a regular expression within a ContentBlock from Draft.js and executes a provided callback function for each match.

@param {RegExp} regex - The regular expression to search for.

@param {ContentBlock} contentBlock - The ContentBlock from Draft.js to search within.

@param {Callback} cb - The callback function to execute for each match. The function takes two arguments, the start index and end index of the match within the ContentBlock.

@returns {void} - Does not return anything.
*/

export const findWithRegex = (regex: RegExp, contentBlock: ContentBlock, cb: Callback): void => {
	const text: string = contentBlock.getText();
	let matchArr: RegExpExecArray | null, start: number, end: number;

	while ((matchArr = regex.exec(text)) !== null) {
		start = matchArr.index;
		end = start + matchArr[0].length;
		cb(start, end);
	}
};

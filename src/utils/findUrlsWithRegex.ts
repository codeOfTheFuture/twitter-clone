import { ContentBlock } from "draft-js";

export const findURLsWithRegex = (regex: RegExp, contentBlock: ContentBlock) => {
	const text = contentBlock.getText();
	const matches: { start: number; match: RegExpMatchArray }[] = [];

	let matchArr: RegExpMatchArray | null;
	while ((matchArr = regex.exec(text)) !== null) {
		matches.push({ start: matchArr.index!, match: matchArr });
	}

	return matches;
};

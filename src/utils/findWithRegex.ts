import { ContentBlock } from "draft-js";

type Callback = (start: number, end: number) => void;

export const findWithRegex = (regex: RegExp, contentBlock: ContentBlock, cb: Callback): void => {
	const text: string = contentBlock.getText();
	let matchArr: RegExpExecArray | null, start: number, end: number;

	while ((matchArr = regex.exec(text)) !== null) {
		start = matchArr.index;
		end = start + matchArr[0].length;
		cb(start, end);
	}
};

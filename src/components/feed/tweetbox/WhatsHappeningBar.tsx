import { Dispatch, RefObject, SetStateAction, useRef } from "react";
import { Editor, EditorState, EditorProps } from "draft-js";
import dynamic from "next/dynamic";

import "draft-js/dist/Draft.css";

interface Props {
	editorState: EditorState;
	setEditorState: Dispatch<SetStateAction<EditorState>>;
}

const WhatsHappeningBar = ({ editorState, setEditorState }: Props) => {
	const editorRef: RefObject<Editor> = useRef<Editor>(null);

	const handleChange = (editorState: EditorState): void => setEditorState(editorState);
	const handleFocus = (): void => editorRef.current?.focus();

	const editorProps: EditorProps = {
		editorState,
		onChange: handleChange,
		placeholder: "What's Happening...",
	};

	return (
		<div className="py-5 cursor-text">
			<div
				className="w-[27vw] min-h-[4rem] text-lg md:text-xl lg:text-2xl py-4 pr-4 text-black bg-white"
				onClick={handleFocus}
			>
				<Editor {...editorProps} ref={editorRef} />
			</div>
		</div>
	);
};

export default dynamic(() => Promise.resolve(WhatsHappeningBar), { ssr: false });

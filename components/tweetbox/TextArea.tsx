import TweetTextarea from "tweet-textarea-react";
import {
  ICurorChangeDetail,
  ITextUpdateDetail,
} from "tweet-textarea-react/src/lib/types";

interface Props {
  tweetText: string;
  textCursorPosition: ICurorChangeDetail;
  handleTextUpdate: (text: string) => void;
  handleCursorPositionChange: (event: any) => void;
}

const TweetInput = ({
  tweetText,
  textCursorPosition,
  handleTextUpdate,
  handleCursorPositionChange,
}: Props) => {
  const handleChange = (event: CustomEvent<ITextUpdateDetail>) => {
    handleTextUpdate(event.detail.currentText);
  };

  return (
    <TweetTextarea
      className="min-h-min w-full mt-5 mb-2 py-2 text-xl placeholder:text-xl"
      highlightClassName="text-twitter"
      placeholder="What's Happening?"
      value={tweetText}
      onTextUpdate={handleChange}
      cursorPosition={textCursorPosition}
      onCursorChange={handleCursorPositionChange}
    />
  );
};

export default TweetInput;

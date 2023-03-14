import { ChangeEvent, FormEvent, useRef, useState } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import TweetBoxIcons from "./TweetBoxIcons";
import TweetBoxImagePreview from "./TweetBoxImagePreview";
import { addTweet } from "../../utils/addTweet";
import { Tweet } from "../../types/typings";
import { toast } from "react-hot-toast";
import TextArea from "./TextArea";
import { ICurorChangeDetail } from "tweet-textarea-react/src/lib/types";
import TweetButton from "./TweetButton";
import CharacterCounter from "./CharacterCounter";
import AddButton from "./AddButton";

const TweetBox = () => {
  const { data: session } = useSession();
  const [tweetText, setTweetText] = useState<string>("");
  const [tweetImage, setTweetImage] = useState<string | null>(null);
  const [charCount, setCharCount] = useState<number>(0);
  const [textCursorPosition, setTextCursorPosition] =
    useState<ICurorChangeDetail>({ start: 0, end: 0 });

  const fileInputRef = useRef<HTMLInputElement>(null);

  const userName = session?.user?.name!;
  const userHandle = session?.user?.name?.replace(/\s+/g, "").toLowerCase()!;
  const profileImage = session?.user?.image!;
  const limit = 280;

  const addImageToTweet = (e: ChangeEvent<HTMLInputElement>): void => {
    const file = e.target.files?.[0] as File;

    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setTweetImage(reader.result as string);
      };
    }
  };

  const resetTweetImage = (): void => {
    fileInputRef.current!.value = "";
    setTweetImage(null);
  };

  const handleSubmit = async (e: FormEvent): Promise<void> => {
    e.preventDefault();

    const addTweetToast = toast.loading("Sending Tweet...");

    const tweetData = {} as Tweet;
    tweetData.userName = userName;
    tweetData.userHandle = userHandle;
    tweetData.profileImage = profileImage;
    tweetData.tweetText = tweetText;

    if (tweetImage) {
      tweetData.tweetImage = tweetImage;
    }

    const response = await addTweet(tweetData);

    console.log(response);

    setTweetText("");
    resetTweetImage();

    toast.success("Tweet Sent!", {
      id: addTweetToast,
    });
  };

  const handleTextUpdate = (text: string): void => {
    setTweetText(text);
    setCharCount(text.length);
  };

  const handleCursorPositionChange = (
    event: CustomEvent<ICurorChangeDetail>
  ): void => {
    setTextCursorPosition(event.detail);
  };

  return (
    <div className="flex space-x-2 p-5">
      <div className="mt-4 h-14 w-14 relative">
        <Image
          src={session?.user?.image || "/images/avatar-placeholder.jpg"}
          fill
          alt="avatar"
          className="absolute object-cover rounded-full"
        />
      </div>

      <div className="flex flex-1 items-center pl-2">
        <form className="flex flex-1 flex-col" onSubmit={handleSubmit}>
          <TextArea
            tweetText={tweetText}
            handleTextUpdate={handleTextUpdate}
            textCursorPosition={textCursorPosition}
            handleCursorPositionChange={handleCursorPositionChange}
          />

          {tweetImage && (
            <TweetBoxImagePreview
              tweetImage={tweetImage}
              resetTweetImage={resetTweetImage}
            />
          )}

          <div className="flex items-center">
            <TweetBoxIcons
              addImageToTweet={addImageToTweet}
              fileInputRef={fileInputRef}
            />

            <div className="flex items-center space-x-4">
              {charCount > 0 && (
                <>
                  <CharacterCounter charCount={charCount} limit={limit} />

                  <hr className="h-8 border border-gray-200" />

                  <AddButton />
                </>
              )}

              <TweetButton
                tweetText={tweetText}
                tweetImage={tweetImage}
                charCount={charCount}>
                Tweet
              </TweetButton>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TweetBox;

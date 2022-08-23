import React, { ChangeEvent, FC, useRef, useState } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import TweetBoxIcons from "./TweetBoxIcons";
import TweetBoxImagePreview from "./TweetBoxImagePreview";

const TweetBox: FC = () => {
  const { data: session } = useSession(),
    [input, setInput] = useState<string>(""),
    [tweetImage, setTweetImage] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const addImageToTweet = (e: ChangeEvent<HTMLInputElement>) => {
    console.log("function called");
    // add image to tweet
    const file = e.target.files?.[0] as File;

    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setTweetImage(reader.result as string);
      };
    }
  };

  const resetTweetImage = () => {
    fileInputRef!.current!.value = "";
    setTweetImage(null);
  };

  console.log(tweetImage);
  return (
    <div className="flex space-x-2 p-5">
      <div className="mt-4 h-14 w-14 relative">
        <Image
          src={session?.user?.image || "/images/avatar-placeholder.jpg"}
          layout="fill"
          alt="avatar"
          className="absolute object-cover rounded-full"
        />
      </div>

      <div className="flex flex-1 items-center pl-2">
        <form className="flex flex-1 flex-col">
          <input
            value={input}
            onChange={e => setInput(e.target.value)}
            type="text"
            placeholder="What's Happening?"
            className="h-24 w-full text-xl outline-none placeholder:text-xl"
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

            <button
              disabled={!input || !session}
              className="bg-twitter px-5 py-2 font-bold text-white rounded-full disabled:opacity-40"
            >
              Tweet
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TweetBox;

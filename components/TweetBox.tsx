import Image from "next/image";
import React, { ChangeEvent, useState } from "react";

import { useSession } from "next-auth/react";
import TweetBoxIcons from "./TweetBoxIcons";

const TweetBox: React.FC = () => {
  const [input, setInput] = useState<string>("");
  const { data: session } = useSession();
  const [image, setImage] = useState<any>(null);
  const [wrongTypeOfImage, setWrongTypeOfImage] = useState<boolean>(false);

  const addImageToTweet = (e: ChangeEvent<HTMLInputElement>): void => {
    // add image to tweet
  };

  console.log(image);

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

          {image && (
            <div className="relative w-60 h-60">
              <Image src={image} alt='' layout="fill" />
            </div>
          )}
          <div className="flex items-center">
            <TweetBoxIcons addImageToTweet={addImageToTweet} />

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

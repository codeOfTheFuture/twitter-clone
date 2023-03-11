import React, { ChangeEvent, FC, RefObject } from "react";
import {
  CalendarIcon,
  EmojiHappyIcon,
  LocationMarkerIcon,
  PhotographIcon,
  SearchCircleIcon,
} from "@heroicons/react/outline";
import { useSession } from "next-auth/react";

interface Props {
  addImageToTweet: (e: ChangeEvent<HTMLInputElement>) => void;
  fileInputRef: RefObject<HTMLInputElement>;
}

const TweetBoxIcons = ({ addImageToTweet, fileInputRef }: Props) => {
  const { data: session } = useSession();

  const handleAddImageClick = () => {
    session && fileInputRef.current?.click();
  };

  return (
    <div className="flex flex-1 space-x-2 text-twitter">
      <div onClick={handleAddImageClick}>
        <PhotographIcon className="h-5 w-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-150" />
        <input
          type="file"
          name="tweetImage"
          id="tweetImage"
          ref={fileInputRef}
          hidden
          onChange={addImageToTweet}
        />
      </div>
      <SearchCircleIcon className="h-5 w-5" />
      <EmojiHappyIcon className="h-5 w-5" />
      <CalendarIcon className="h-5 w-5" />
      <LocationMarkerIcon className="h-5 w-5" />
    </div>
  );
};

export default TweetBoxIcons;

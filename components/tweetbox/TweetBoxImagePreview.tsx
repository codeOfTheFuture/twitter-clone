import Image from "next/image";
import React, { FC } from "react";

interface Props {
  tweetImage: string;
  resetTweetImage: () => void;
}

const TweetBoxImagePreview: FC<Props> = props => {
  const { tweetImage, resetTweetImage } = props;

  return (
    <div className="relative h-[600px] w-full mb-5">
      <div
        className="absolute top-2 left-2 flex justify-center items-center w-8 h-8 text-white text-lg font-bold rounded-full z-10 cursor-pointer hover:bg-gray-600 hover:bg-opacity-70"
        onClick={resetTweetImage}
      >
        X
      </div>

      <Image
        src={tweetImage}
        alt="Tweet image"
        layout="fill"
        className="object-cover rounded-lg"
      />
    </div>
  );
};

export default TweetBoxImagePreview;

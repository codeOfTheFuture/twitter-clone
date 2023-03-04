import Image from "next/image";
import React, { useEffect, useState } from "react";
import TimeAgo from "react-timeago";
import { Tweet } from "../types/typings";
import BlueCheck from "./BlueCheck";
import Replies from "./Replies";
import TweetIcons from "./TweetIcons";

interface Props {
  tweet: Tweet;
}

const Tweet: React.FC<Props> = ({ tweet }) => {
  // const [replies, setReplies] = useState<Reply[]>([]);

  const { userHandle, profileImg, timestamp, tweetText, tweetImage } = tweet;

  // useEffect(() => {
  //   (async () => {
  //     const replies: Reply[] = await fetchReplies(_id);

  //     setReplies(replies);
  //   })();
  // }, [_id]);

  // const replyCount = replies.length || 0;

  return (
    <div className="flex flex-col space-x-3 p-5 border-y border-gray-100">
      <div className="flex items-center space-x-3">
        <Image
          width={40}
          height={40}
          className="rounded-full object-cover"
          src={profileImg}
          alt={profileImg}
        />

        <div>
          <div className="flex items-center space-x-1">
            <span className="font-bold">{userHandle}</span>

            <BlueCheck />

            <span className="hidden text-sm text-gray-500 sm:inline">
              @{userHandle} &middot;
            </span>

            <TimeAgo className="text-sm text-gray-500" date={timestamp} />
          </div>
        </div>
      </div>

      <div className="flex flex-col items-start pl-10">
        <p className="pb-2 font-medium">{tweetText}</p>

        {tweetImage && (
          <div className="relative w-full h-[40rem] rounded-lg shadow-sm">
            <Image
              className="rounded-lg object-center"
              layout="fill"
              src={tweetImage}
              objectFit="cover"
              alt=""
            />
          </div>
        )}
      </div>

      <TweetIcons replyCount={2} />

      {/* Reply Box logic */}

      {/* {replies.length > 0 && <Replies replies={replies} />} */}
    </div>
  );
};

export default Tweet;

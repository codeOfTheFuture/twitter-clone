import Image from "next/image";
import React, { useEffect, useState } from "react";
import TimeAgo from "react-timeago";
import { Reply, Tweet } from "../typings";
import { fetchReplies } from "../utils/fetchReplies";
import Replies from "./Replies";
import TweetIcons from "./TweetIcons";

interface Props {
  tweet: Tweet;
}

const Tweet: React.FC<Props> = ({ tweet }) => {
  const [replies, setReplies] = useState<Reply[]>([]);

  const { _id, profileImg, username, _createdAt, text, image } = tweet;

  useEffect(() => {
    (async () => {
      const replies: Reply[] = await fetchReplies(_id);

      setReplies(replies);
    })();
  }, [_id]);

  const userHandle = username.replace(/\s+/g, "").toLowerCase();

  const replyCount = replies.length || 0;

  return (
    <div className="flex flex-col space-x-3 p-5 border-y border-gray-100">
      <div className="flex items-center space-x-3">
        <Image
          width={40}
          height={40}
          className="rounded-full object-cover"
          src="/images/avatar-man-icon-profile-placeholder-260nw-1229859850-e1623694994111.jpg"
          alt=""
        />

        <div>
          <div className="flex items-center space-x-1">
            <span className="mr-1 font-bold">{username}</span>

            <span className="hidden text-sm text-gray-500 sm:inline">
              @{userHandle} &middot;
            </span>

            <TimeAgo className="text-sm text-gray-500" date={_createdAt} />
          </div>
        </div>
      </div>

      <div className="flex flex-col items-start pl-10">
        <p className="pb-2">{text}</p>

        {image && (
          <div className="relative w-full h-[40rem] rounded-lg shadow-sm border">
            <Image
              className="rounded-lg object-center"
              layout="fill"
              src={image}
              objectFit="cover"
              alt=""
            />
          </div>
        )}
      </div>

      <TweetIcons replyCount={replyCount} />

      {/* Reply Box logic */}

      {replies.length > 0 && <Replies replies={replies} />}
    </div>
  );
};

export default Tweet;

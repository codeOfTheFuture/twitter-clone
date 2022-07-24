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

      <div className="flex flex-col items-start">
        <p className="py-1 pl-10">{text}</p>

        {image && (
          <Image
            width={400}
            height={400}
            src={image}
            className="mt-5 mb-1 rounded-lg max-h-60 object-cover shadow-sm"
            alt=""
          />
        )}
      </div>

      <TweetIcons replyCount={replyCount} />

      {/* Reply Box logic */}

      {replies.length > 0 && <Replies replies={replies} />}
    </div>
  );
};

export default Tweet;

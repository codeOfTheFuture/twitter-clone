import Image from "next/image";
import React from "react";
import TimeAgo from "react-timeago";
import { Reply } from "../typings";

interface Props {
  reply: Reply;
}

const Reply: React.FC<Props> = ({ reply }) => {
  const { profileImg, username, _createdAt, text } = reply;
  const userHandle = username.replace(/\s+/g, "").toLowerCase();

  return (
    <div className="flex space-x-2">
      <div className="relative h-7 w-7">
        <Image
          src={profileImg}
          className="object-cover rounded-full"
          layout="fill"
          alt=""
        />
      </div>

      <div>
        <div className="flex items-center space-x-1">
          <span className="mr-1 font-bold">{username}</span>
          <span className="hidden text-sm text-gray-500 lg:inline">@{userHandle} &middot;</span>

          <TimeAgo
            className="text-sm text-gray-500"
            date={_createdAt}
          />
        </div>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Reply;

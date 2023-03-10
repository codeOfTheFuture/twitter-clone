import Image from "next/image";
import React from "react";
import TimeAgo from "react-timeago";
// import { Reply } from "../../types/typings";

interface Props {
  reply: any;
}

const Reply: React.FC<Props> = ({ reply }) => {
  const { profileImg, username, _createdAt, text } = reply;
  const userHandle = username.replace(/\s+/g, "").toLowerCase();

  return (
    <div className="relative flex space-x-2">
      <hr className="absolute left-5 top-10 h-8 border-x" />
      <div className="relative h-7 w-7 mt-2">
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
          <span className="hidden text-sm text-gray-500 lg:inline">
            @{userHandle} &middot;
          </span>

          <TimeAgo className="text-sm text-gray-500" date={_createdAt} />
        </div>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Reply;

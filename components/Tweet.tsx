import React from "react";
import TimeAgo from "react-timeago";
import { Tweet } from "../typings";

interface Props {
  tweet: Tweet;
}

const Tweet: React.FC<Props> = ({ tweet }) => {
  const { profileImg, username, _createdAt, text, image } = tweet;
  const userHandle = username.replace(/\s+/g, "").toLowerCase();

  return (
    <div className="flex flex-col space-x-3 p-5 border-y border-gray-100">
      <div className='flex items-center space-x-3'>
        <img
          className='h-10 w-10 rounded-full object-cover'
          src='/images/avatar-man-icon-profile-placeholder-260nw-1229859850-e1623694994111.jpg'
          alt=''
        />

        <div>
          <div className='flex items-center space-x-1'>
            <span className='mr-1 font-bold'>{username}</span>

            <span className='hidden text-sm text-gray-500 sm:inline'>
              @{userHandle} &middot;
            </span>

            <TimeAgo className='text-sm text-gray-500' date={_createdAt} />
          </div>
        </div>

      </div>

      <div className="flex flex-col items-start pl-10">
        <p className="pt-1">{text}</p>

        {image && (
          <img src={image} alt="" className="mt-5 mb-1 rounded-lg max-h-60 object-contain shadow-sm" />
        )}
      </div>
    </div>
  );
};

export default Tweet;

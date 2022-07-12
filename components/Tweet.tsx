import React from "react";
import TimeAgo from "react-timeago"
import { Tweet } from "../typings";

interface Props {
  tweet: Tweet;
}

const Tweet: React.FC<Props> = ({ tweet }) => {
  const { profileImg, username } = tweet;
  const userHandle = username.replace(/\s+/g, "").toLowerCase();

  return (
    <div>
      <div>
        <img src={profileImg} alt='' />

        <div>
          <div>
            <p>{username}</p>
            <p>@{userHandle}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tweet;

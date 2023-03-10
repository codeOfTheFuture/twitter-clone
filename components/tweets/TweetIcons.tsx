import { ChartBarIcon } from "@heroicons/react/solid";
import {
  ChatAlt2Icon,
  HeartIcon,
  SwitchHorizontalIcon,
  UploadIcon,
} from "@heroicons/react/outline";
import TweetIcon from "./TweetIcon";

interface Props {
  replyCount: number;
  retweetCount: number;
  likeCount: number;
  viewCount: number;
}

const TweetIcons = ({
  replyCount,
  retweetCount,
  likeCount,
  viewCount,
}: Props) => {
  return (
    <div className="flex justify-between mt-2 pl-10 max-w-lg">
      <TweetIcon
        count={replyCount}
        hoverBgColor="group-hover:bg-twitter/20"
        hoverTextColor="group-hover:text-twitter">
        <ChatAlt2Icon className="tweet-icon" />
      </TweetIcon>
      <TweetIcon
        count={retweetCount}
        hoverBgColor="group-hover:bg-emerald-500/20"
        hoverTextColor="group-hover:text-emerald-500">
        <SwitchHorizontalIcon className="tweet-icon" />
      </TweetIcon>
      <TweetIcon
        count={likeCount}
        hoverBgColor="group-hover:bg-red-500/20"
        hoverTextColor="group-hover:text-red-500">
        <HeartIcon className="tweet-icon" />
      </TweetIcon>
      <TweetIcon
        count={viewCount}
        hoverBgColor="group-hover:bg-twitter/20"
        hoverTextColor="group-hover:text-twitter">
        <ChartBarIcon className="tweet-icon" />
      </TweetIcon>
      <TweetIcon
        hoverBgColor="group-hover:bg-twitter/20"
        hoverTextColor="group-hover:text-twitter">
        <UploadIcon className="tweet-icon" />
      </TweetIcon>
    </div>
  );
};

export default TweetIcons;

import { RefreshIcon } from "@heroicons/react/outline";
import { Tweet } from "../../types/typings";
import TweetBox from "../tweetbox/TweetBox";
import { FC, useState } from "react";
import Tweets from "../tweets/Tweets";
import toast from "react-hot-toast";

interface Props {
  tweets: Tweet[];
}

const Feed: FC<Props> = ({ tweets }) => {
  // const [tweetsToShow, setTweetsToShow] = useState<Tweet[]>(tweets);

  // const handleRefresh = async () => {
  //   const refreshToast = toast.loading("Refreshing...");

  //   const tweets = await fetchTweets();
  //   setTweetsToShow(tweets);

  //   toast.success("Feed Updated", {
  //     id: refreshToast,
  //   })
  // }

  // console.log(tweets);
  return (
    <div className="col-span-8 md:col-span-7 lg:col-span-5 border-x overflow-y-auto h-screen scrollbar-hide">
      <div className="flex items-center justify-between">
        <h1 className="p-5 pb-0 text-xl font-bold cursor-pointer">Home</h1>
        <RefreshIcon
          // onClick={handleRefresh}
          className="mr-5 mt-5 h-8 w-8 cursor-pointer text-twitter transition-all duration-500 ease-out hover:rotate-180 active:scale-125"
        />
      </div>

      <div>
        <TweetBox />
      </div>

      <Tweets tweets={tweets} />
    </div>
  );
};

export default Feed;
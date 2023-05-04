import Image from "next/image";
import TimeAgo from "react-timeago";
import { Tweet } from "../../../types/typings";
import BlueCheck from "./VerifiedBlueCheck";
import Replies from "../replies/Replies";
import TweetIcons from "./TweetIcons";

interface Props {
	tweet: Tweet;
}

const Tweet = ({ tweet }: Props) => {
	const { userName, userHandle, profileImage, timestamp, tweetText, tweetImage } = tweet;

	return (
		<div className="flex flex-col space-x-3 p-4 cursor-pointer border-y border-gray-100 hover:bg-gray-50">
			<div className="flex items-center space-x-3">
				<Image
					width={40}
					height={40}
					className="rounded-full object-cover"
					src={profileImage}
					alt="Profile Image"
				/>

				<div>
					<div className="flex items-center space-x-1">
						<span className="font-bold">{userName}</span>

						<BlueCheck />

						<span className="hidden text-sm text-gray-500 sm:inline">@{userHandle} &middot;</span>

						<TimeAgo className="text-sm text-gray-500" date={timestamp} />
					</div>
				</div>
			</div>

			<div className="flex flex-col items-start pl-10">
				<p className="pb-2 font-medium">{tweetText}</p>

				{tweetImage && (
					<div className="relative w-full h-[40rem] rounded-lg shadow-sm">
						<Image className="rounded-lg object-center object-cover" fill src={tweetImage} alt="" />
					</div>
				)}
			</div>

			<TweetIcons replyCount={2450} retweetCount={4120} likeCount={31233} viewCount={56788} />

			{/* Reply Box logic */}

			{/* {replies.length > 0 && <Replies replies={replies} />} */}
		</div>
	);
};

export default Tweet;

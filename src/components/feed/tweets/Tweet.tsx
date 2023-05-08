import Image from "next/image";
import TimeAgo from "react-timeago";
import { Tweet } from "../../../types/typings";
import BlueCheck from "./VerifiedBlueCheck";
import Replies from "../replies/Replies";
import TweetIcons from "./TweetIcons";
import ProfileImage from "../../../components/ui/ProfileImage";

interface Props {
	tweet: Tweet;
}

const Tweet = ({ tweet }: Props) => {
	const { userName, userHandle, profileImage, timestamp, tweetText, tweetImage } = tweet;

	return (
		<div
			className="flex flex-col space-x-3 p-4 cursor-pointer border-y border-gray-100 hover:bg-gray-50"
			data-testid="tweet"
		>
			<div className="flex items-center space-x-3">
				<ProfileImage className="w-10 h-10" tweetProfileImage={profileImage} />

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
						<Image
							className="rounded-lg object-center object-cover"
							fill
							src={tweetImage}
							alt={tweetImage}
						/>
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

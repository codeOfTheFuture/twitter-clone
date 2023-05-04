import { ChangeEvent, FormEvent, RefObject, useRef, useState } from "react";
import Image from "next/image";
import { CompositeDecorator, EditorState } from "draft-js";
import { useSession } from "next-auth/react";
import { toast } from "react-hot-toast";
import WhatsHappeningBar from "./WhatsHappeningBar";
import TweetBoxImagePreview from "./TweetBoxImagePreview";
import TweetBoxIcons from "./TweetBoxIcons";
import TweetButton from "./TweetButton";
import CharacterCounter from "./CharacterCounter";
import AddButton from "./AddButton";
import { constructTweet } from "../../../utils/constructTweet";
import { addTweet } from "../../../utils/addTweet";
import { createCompositeDecorator } from "../../../utils/createCompositeDecorator";
import { TweetData } from "../../../types/typings";

const DEFAULT_AVATAR = "/images/avatar-placeholder.jpg";
const COMPOSITE_DECORATOR: CompositeDecorator = createCompositeDecorator();
const LIMIT = 280;

const TweetBox = () => {
	const [editorState, setEditorState] = useState<EditorState>(
		EditorState.createEmpty(COMPOSITE_DECORATOR)
	);
	const tweetText: string = editorState.getCurrentContent().getPlainText();
	const charCount: number = editorState.getCurrentContent().getPlainText().length;
	console.log("Tweet Text: ", tweetText);
	const [tweetImage, setTweetImage] = useState<string | null>(null);
	const fileInputRef: RefObject<HTMLInputElement> = useRef<HTMLInputElement>(null);

	const userName: string = useSession().data?.user?.name!;
	const userHandle: string = useSession().data?.user?.name?.replace(/\s+/g, "").toLowerCase()!;
	const profileImage: string = useSession().data?.user?.image!;

	const addImageToTweet = (e: ChangeEvent<HTMLInputElement>): void => {
		const file: File = e.target.files?.[0] as File;

		if (file) {
			const reader: FileReader = new FileReader();
			reader.readAsDataURL(file);
			reader.onload = () => {
				setTweetImage(reader.result as string);
			};
		}
	};

	const resetTweetImage = (): void => {
		fileInputRef.current!.value = "";
		setTweetImage(null);
	};

	const handleSubmit = async (e: FormEvent): Promise<void> => {
		e.preventDefault();

		const addTweetToast: string = toast.loading("Sending Tweet...");

		const newTweet: TweetData = constructTweet({
			userName,
			userHandle,
			profileImage,
			tweetText,
			tweetImage,
		});

		const response: { message: string } = await addTweet(newTweet);

		console.log(response);

		resetTweetImage();

		toast.success(response.message, {
			id: addTweetToast,
		});
	};

	return (
		<div className="flex space-x-2 w-full p-4">
			<div className="mt-4 h-14 w-14 relative">
				<Image
					src={profileImage || DEFAULT_AVATAR}
					fill
					alt="avatar"
					className="absolute object-cover rounded-full"
				/>
			</div>

			<div className="flex flex-grow items-center pl-2">
				<form className="flex flex-1 flex-col" onSubmit={handleSubmit}>
					<WhatsHappeningBar editorState={editorState} setEditorState={setEditorState} />

					{tweetImage && (
						<TweetBoxImagePreview tweetImage={tweetImage} resetTweetImage={resetTweetImage} />
					)}

					<div className="flex items-center">
						<TweetBoxIcons addImageToTweet={addImageToTweet} fileInputRef={fileInputRef} />

						<div className="flex items-center space-x-4">
							{charCount > 0 && (
								<>
									<CharacterCounter charCount={charCount} limit={LIMIT} />

									<hr className="h-8 border border-gray-200" />

									<AddButton />
								</>
							)}

							<TweetButton tweetText={tweetText} tweetImage={tweetImage} charCount={charCount}>
								Tweet
							</TweetButton>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};

export default TweetBox;

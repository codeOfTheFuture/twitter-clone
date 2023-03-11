import { ChangeEvent, FormEvent, useRef, useState } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import TweetBoxIcons from "./TweetBoxIcons";
import TweetBoxImagePreview from "./TweetBoxImagePreview";
import { addTweet } from "../../utils/addTweet";
import { Tweet } from "../../types/typings";
import { toast } from "react-hot-toast";

const TweetBox = () => {
  const { data: session } = useSession();
  const [tweetText, setTweetText] = useState<string>("");
  const [tweetImage, setTweetImage] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const userName = session?.user?.name!;
  const userHandle = session?.user?.name?.replace(/\s+/g, "").toLowerCase()!;
  const profileImage = session?.user?.image!;

  const addImageToTweet = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] as File;

    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setTweetImage(reader.result as string);
      };
    }
  };

  const resetTweetImage = () => {
    fileInputRef.current!.value = "";
    setTweetImage(null);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const addTweetToast = toast.loading("Sending Tweet...");

    const tweetData = {} as Tweet;
    tweetData.userName = userName;
    tweetData.userHandle = userHandle;
    tweetData.profileImage = profileImage;
    tweetData.tweetText = tweetText;

    if (tweetImage) {
      tweetData.tweetImage = tweetImage;
    }

    const response = await addTweet(tweetData);

    console.log(response);

    setTweetText("");
    resetTweetImage();

    toast.success("Tweet Sent!", {
      id: addTweetToast,
    });
  };

  return (
    <div className="flex space-x-2 p-5">
      <div className="mt-4 h-14 w-14 relative">
        <Image
          src={session?.user?.image || "/images/avatar-placeholder.jpg"}
          fill
          alt="avatar"
          className="absolute object-cover rounded-full"
        />
      </div>

      <div className="flex flex-1 items-center pl-2">
        <form className="flex flex-1 flex-col" onSubmit={handleSubmit}>
          <input
            value={tweetText}
            type="text"
            placeholder="What's Happening?"
            className="h-24 w-full text-xl outline-none placeholder:text-xl"
            onChange={e => setTweetText(e.target.value)}
          />

          {tweetImage && (
            <TweetBoxImagePreview
              tweetImage={tweetImage}
              resetTweetImage={resetTweetImage}
            />
          )}

          <div className="flex items-center">
            <TweetBoxIcons
              addImageToTweet={addImageToTweet}
              fileInputRef={fileInputRef}
            />

            <button
              disabled={!session || (session && !tweetText && !tweetImage)}
              className="bg-twitter px-5 py-2 font-bold text-white rounded-full disabled:opacity-40"
              type="submit">
              Tweet
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TweetBox;

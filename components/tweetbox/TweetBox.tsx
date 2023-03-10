import React, { ChangeEvent, FC, FormEvent, useRef, useState } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import TweetBoxIcons from "./TweetBoxIcons";
import TweetBoxImagePreview from "./TweetBoxImagePreview";
import {
  collection,
  doc,
  addDoc,
  setDoc,
  serverTimestamp,
} from "firebase/firestore";
import {
  getStorage,
  ref,
  uploadString,
  getDownloadURL,
} from "firebase/storage";
import { db, storage } from "../../firebase.setup";

const TweetBox: FC = () => {
  const { data: session } = useSession(),
    [tweetText, setTweetText] = useState<string>(""),
    [tweetImage, setTweetImage] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const userHandle = session?.user?.name?.replace(/\s+/g, "").toLowerCase();

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
    fileInputRef!.current!.value = "";
    setTweetText("");
    setTweetImage(null);
  };

  const sendTweet = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const newDoc = await addDoc(collection(db, "tweets"), {
        tweetText: tweetText,
        userHandle: userHandle,
        profileImg: session?.user?.image,
        tweetImage: tweetImage,
        timestamp: serverTimestamp(),
      });

      if (tweetImage) {
        const storageRef = ref(storage, `tweets/${newDoc.id}`);
        await uploadString(storageRef, tweetImage, "data_url");
        const url = await getDownloadURL(storageRef);
        const tweetRef = doc(db, "tweets", newDoc.id);

        await setDoc(tweetRef, { tweetImage: url }, { merge: true });

        resetTweetImage();
      }
    } catch (error: any) {
      console.error(error);
    }
  };

  return (
    <div className="flex space-x-2 p-5">
      <div className="mt-4 h-14 w-14 relative">
        <Image
          src={session?.user?.image || "/images/avatar-placeholder.jpg"}
          layout="fill"
          alt="avatar"
          className="absolute object-cover rounded-full"
        />
      </div>

      <div className="flex flex-1 items-center pl-2">
        <form className="flex flex-1 flex-col" onSubmit={sendTweet}>
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

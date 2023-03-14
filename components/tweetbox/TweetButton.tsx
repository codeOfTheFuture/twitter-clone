import { useSession } from "next-auth/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  tweetText: string;
  tweetImage: string | null;
  charCount: number;
}

const TweetButton = ({ children, tweetText, tweetImage, charCount }: Props) => {
  const { data: session } = useSession();

  return (
    <button
      disabled={
        !session || (session && !tweetText && !tweetImage) || charCount > 280
      }
      className="bg-twitter px-5 py-2 font-bold text-white rounded-full disabled:opacity-40"
      type="submit">
      {children}
    </button>
  );
};

export default TweetButton;

export interface Tweet extends TweetBody {
  _id: string;
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  _type: "tweet";
  blockTweet: boolean;
}

export type TweetBody = {
  text: string;
  username: string;
  profileImg: string;
  imageUrl?: string;
};

export interface Reply extends ReplyBody {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: "reply";
  _updatedAt: string;
  tweet: {
    _ref: string;
    _type: "reference";
  };
}

export type ReplyBody = {
  text: string;
  username: string;
  profileImg: string;
  image?: string;
};

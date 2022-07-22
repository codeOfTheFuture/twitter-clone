import { groq } from "next-sanity";
import type { NextApiRequest, NextApiResponse } from "next";
import { Reply } from "../../typings";
import { sanityClient } from "../../sanity";

const commentQuery = groq`
  *[_type == "reply" && references(*[_type == "tweet" && _id == $tweetId]._id)] {
  _id,
  ...
  } | order(_createdAt desc)
`;

type Data = Reply[];

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { tweetId } = req.query;

  const replies: Reply[] = await sanityClient.fetch(commentQuery, {
    tweetId,
  });

  res.status(200).json(replies);
};

export default handler;

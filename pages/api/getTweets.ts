import type { NextApiRequest, NextApiResponse } from "next";
import { Tweet } from "../../types/typings";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Tweet[]>
) {
  // res.status(200).json({ tweets });
}

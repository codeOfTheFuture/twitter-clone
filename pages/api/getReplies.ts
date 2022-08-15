import type { NextApiRequest, NextApiResponse } from "next";
import { Reply } from "../../types/typings";

const handler = async (req: NextApiRequest, res: NextApiResponse<Reply[]>) => {
  // res.status(200).json("Hello from getReplies");
};

export default handler;

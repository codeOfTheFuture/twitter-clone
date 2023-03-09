import { NextApiRequest, NextApiResponse } from "next";
import nc from "next-connect";
import {
  collection,
  DocumentData,
  getDocs,
  orderBy,
  query,
} from "firebase/firestore";
import { db } from "../../../firebase.setup";
import { Tweet } from "../../../types/typings";

const handler = nc({
  onError: (error, req: NextApiRequest, res: NextApiResponse) => {
    console.error(error.stack);
    res.status(500).end("Internal Server Error!");
  },
  onNoMatch: (req: NextApiRequest, res: NextApiResponse) => {
    res.status(404).end("Unable to find tweets");
  },
}).get(async (req: NextApiRequest, res: NextApiResponse) => {
  const tweetsRef = query(
    collection(db, "tweets"),
    orderBy("timestamp", "desc")
  );

  const querySnapshot = await getDocs(tweetsRef);

  const tweets: Tweet[] = querySnapshot.docs.map((doc: DocumentData) => ({
    ...doc.data(),
    id: doc.id,
    timestamp: new Date(doc.data().timestamp.toDate()).toLocaleString(),
  }));

  res.status(200).json(tweets);
});

export default handler;

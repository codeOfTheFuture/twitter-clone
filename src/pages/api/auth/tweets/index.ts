import { NextApiRequest, NextApiResponse } from "next";
import nc from "next-connect";
import {
	addDoc,
	collection,
	doc,
	DocumentData,
	getDocs,
	orderBy,
	query,
	serverTimestamp,
	setDoc,
} from "firebase/firestore";
import { db, storage } from "../../../../../firebase.setup";
import { Tweet } from "../../../../types/typings";
import { getDownloadURL, ref, uploadString } from "firebase/storage";

const handler = nc({
	onError: (error, req: NextApiRequest, res: NextApiResponse) => {
		console.error("error: ", new Error(error));
		res.status(500).end("Internal Server Error!");
	},
	onNoMatch: (req: NextApiRequest, res: NextApiResponse) => {
		res.status(404).end("Unable to find tweets");
	},
})
	.get(async (req: NextApiRequest, res: NextApiResponse) => {
		const tweetsRef = query(collection(db, "tweets"), orderBy("timestamp", "desc"));

		const querySnapshot = await getDocs(tweetsRef);

		const tweets: Tweet[] = querySnapshot.docs.map((doc: DocumentData) => ({
			...doc.data(),
			id: doc.id,
			timestamp: new Date(doc.data().timestamp.toDate()).toLocaleString(),
		}));

		res.status(200).json(tweets);
	})
	.post(async (req: NextApiRequest, res: NextApiResponse) => {
		const tweetToAdd: Tweet = JSON.parse(req.body);

		tweetToAdd.timestamp = serverTimestamp();

		try {
			const newDoc = await addDoc(collection(db, "tweets"), tweetToAdd);

			if (tweetToAdd.tweetImage) {
				const storageRef = ref(storage, `tweets/${newDoc.id}`);
				await uploadString(storageRef, tweetToAdd.tweetImage, "data_url");
				const url = await getDownloadURL(storageRef);
				const tweetRef = doc(db, "tweets", newDoc.id);
				await setDoc(tweetRef, { tweetImage: url }, { merge: true });
			}

			res.status(201).json({ message: "Tweet added successfully" });
		} catch (error) {
			// console.error(error);
			res.status(500).json(error);
		}
	});

export default handler;

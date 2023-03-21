import { MongoClient } from "mongodb";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(
      "mongodb+srv://ambershukla2018:Wv!hnkv8@cluster0.fcyhxzj.mongodb.net/?retryWrites=true&w=majority"
    );
    const db = client.db();

    const meetupsCollection = db.collection("meetups");
    const result = meetupsCollection.insertOne(data);
    console.log(result);

    res.status(201).json({ message: "meetup inserted" });
    // client.close();
  }
};

export default handler;

// lib/dbConnect.js
import { MongoClient, ServerApiVersion } from "mongodb";

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

export default async function dbConnect(collectionName) {
  if (!client.topology?.isConnected?.()) {
    console.log(" Connecting to MongoDB...");
    await client.connect();
    console.log(" Connected!");
  }
  const db = client.db(process.env.DB_NAME);
  console.log(" Using DB:", db.databaseName);
  const collection = db.collection(collectionName);
  console.log(" Using Collection:", collection.collectionName);
  return collection;
}

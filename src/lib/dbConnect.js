// lib/dbConnect.js
import { MongoClient, ServerApiVersion } from "mongodb";

export const collectionNamesObj = {
     servicesCollection: "test_services",
     usersCollection: "test_users",
     bookingCollection: "test_booking",
}

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
  const collection = db.collection(collectionName);
  return collection;
}

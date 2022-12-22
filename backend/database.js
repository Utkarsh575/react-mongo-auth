import mongoose from "mongoose";
import dotenv from "dotenv";

export default function initDbclient() {
  const uri = process.env.MONGO_URI;
  let dbClient = mongoose.connect(uri);
  console.log("[ 🍃DB ] :-Connected to database");
  return dbClient;
}
// export default const async functionName = ()=>{}

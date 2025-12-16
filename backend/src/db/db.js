import mongoose from "mongoose";
import { configDotenv } from "dotenv";
configDotenv();
const MONGO_URI = process.env.MONGO_URI;
if (!MONGO_URI) {
  throw new Error("MONGO_URI is not set in environment variables");
}
export async function connectDB() {
  try {
    const options = {
      dbname: "Content-Platform",
    };
    await mongoose.connect(MONGO_URI, options);
    console.log("Database connected Successfully");
  } catch (error) {
    console.error("Error while connecting to Database", error);
  }
}

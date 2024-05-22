import { DB_NAME } from "@/lib/constant";
import mongoose from "mongoose";

type ConnectionObject = {
  isConnected?: number;
};

const connection: ConnectionObject = {};

async function dbConnect() {
  if (connection.isConnected) {
    console.log("Database is already connected");
    return;
  }
  try {
    const db = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}` || ""
    );
    connection.isConnected = db.connections[0].readyState;
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Failed to connect to database", error);
    process.exit(1);
  }
}

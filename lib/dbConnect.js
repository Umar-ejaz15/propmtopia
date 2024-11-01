// lib/dbConnect.js
import mongoose from "mongoose";

let isConnected; // Variable to keep track of connection

const dbConnect = async () => {
  if (isConnected) {
    return; // Already connected
  }

  try {
    const options = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      bufferCommands: false,
      dbName: "promptopia",
    };

    if (!process.env.MONGO_URI) {
      throw new Error("Please define MONGO_URI environment variable");
    }

    await mongoose.connect(`${process.env.MONGO_URI}`, options);
    isConnected = true;
    console.log("Connected to MongoDB successfully" );
  } catch (error) {
    console.error("MongoDB connection error:", error.message);
    process.exit(1); // Exit with failure
  }
};

export default dbConnect;

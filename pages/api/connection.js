// pages/api/example.js
import dbConnect from "../../lib/dbConnect";


export default async function handler(req, res) {
  dbConnect();

  // Example database operation
  
  res.status(200).json({ message: "Database connected successfully!", mongoUri: process.env.MONGO_URI });
}

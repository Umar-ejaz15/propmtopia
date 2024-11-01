// /pages/api/createAccount.js or createAccount.ts (if using TypeScript)
import User from "@/models/userSchema"; // Ensure the correct path to your schema
import bcrypt from "bcrypt";
import dbConnect from "@/lib/dbConnect"; // Ensure correct path to dbConnect

export default async function handler(req, res) {
  if (req.method !== "POST") {
    // Only allow POST requests
    res.setHeader("Allow", ["POST"]);
    return res
      .status(405)
      .json({ success: false, message: `Method ${req.method} Not Allowed` });
  }

  try {
    // Connect to the database
    await dbConnect();

    // Destructure form data from the request body
    const { email, name, password, confirmPassword } = req.body;

    // Check if all fields are provided
    if (!email || !name || !password || !confirmPassword) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required." });
    }

    // Check if passwords match
    if (password !== confirmPassword) {
      return res
        .status(400)
        .json({ success: false, message: "Passwords do not match." });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    let existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ success: false, message: "Email already exists." });
    }

    // Create a new user instance with the hashed password
    const newUser = new User({
      email,
      name,
      password: hashedPassword,
    });

    // Save the new user to the database
    await newUser.save();
    return res
      .status(201)
      .json({ success: true, message: "Account created successfully" });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
}

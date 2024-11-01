import User from "@/models/userSchema";
import bcrypt from "bcrypt";
import dbConnect from "@/lib/dbConnect";
import jwt from "jsonwebtoken";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res
      .status(405)
      .json({ success: false, message: `Method ${req.method} Not Allowed` });
  }
  try {
    await dbConnect();

    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required." });
    }

    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      return res
        .status(400)
        .json({ success: false, message: "User does not exist." });
    }

    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );
    if (!isPasswordCorrect) {
      return res
        .status(400)
        .json({ success: false, message: "Incorrect password." });
    }

    const token = jwt.sign(
      {
        email: existingUser.email,
        name: existingUser.name,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );

    console.log("Generated Token:", token); // Verify token creation

    if (token) {
      res.setHeader(
        "Set-Cookie",
        `token=${token}; Path=/; HttpOnly; Max-Age=3600; SameSite=Strict;`
      );
      return res
        .status(200)
        .json({ success: true, message: "Logged in successfully" });
    } else {
      return res
        .status(500)
        .json({ success: false, message: "Token generation failed." });
    }
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
}

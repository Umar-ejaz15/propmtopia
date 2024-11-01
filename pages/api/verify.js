import jwt from "jsonwebtoken";

export default async function handler(req, res) {
  // Ensure the request is a GET request
  if (req.method !== "GET") {
    res.setHeader("Allow", ["GET"]);
    return res
      .status(405)
      .json({ success: false, message: "Method Not Allowed" });
  }

  // Get token from cookies
  const token = req.cookies.token;

  // Check if token is present
  if (!token) {
    return res
      .status(401)
      .json({ success: false, message: "Unauthorized, token not found." });
  }

  try {
    // Verify the token
    const user = jwt.verify(token, process.env.JWT_SECRET);

    // Respond with user data if token is valid
    return res.status(200).json({ success: true, user });
  } catch (error) {
    return res.status(401).json({ success: false, message: "Invalid token." });
  }
}

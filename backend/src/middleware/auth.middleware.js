import admin from "../config/firebase.js";
import User from "../models/User.js";

export const verifyAuth = async (req, res, next) => {
  try {
    // Token extract
    const authHeader =
      req.headers.authorization || req.headers.Authorization || "";
    const token = authHeader.startsWith("Bearer ")
      ? authHeader.slice(7)
      : req.headers["x-id-token"] || null;

    if (!token) {
      return res.status(401).json({ message: "Missing Authorization token" });
    }

    // Verify token with Firebase Admin
    const decoded = await admin.auth().verifyIdToken(token);
    const { uid, email } = decoded;

    // is user exists in MongoDB and get role
    // Using upsert so first login creates a User doc with default role "user"
    let userDoc = await User.findOne({ uid });
    if (!userDoc) {
      userDoc = await User.create({ uid, email, role: "user" });
    }

    // Attach to request for downstream handlers
    req.user = { uid: userDoc.uid, email: userDoc.email, role: userDoc.role };
    req.userDoc = userDoc;
    next();
  } catch (err) {
    console.error("Auth middleware error:", err?.message || err);
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};

export default verifyAuth;

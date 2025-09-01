import admin from "../config/firebase.js";
import User from "../models/user.model.js";

export const verifyAuth = async (req, res, next) => {
  try {
    const { token } = req.cookies;
    if (!token) {
      return res.status(401).json({ message: "Missing Authorization token" });
    }

    // Verify token with Firebase Admin
    const decoded = await admin.auth().verifyIdToken(token);
    const { uid, email } = decoded;

    // is user exists in MongoDB and get role
    // Using upsert so first login creates a User doc with default role "user"
    const userDoc = await User.findOneAndUpdate(
      { uid },
      { $setOnInsert: { uid, email, role: "user" } },
      { upsert: true, new: true }
    );

    // Attach to request for downstream handlers
    req.user = { uid: userDoc.uid, email: userDoc.email, role: userDoc.role };
    req.userDoc = userDoc;
    return next();
  } catch (err) {
    console.error("Auth middleware error:", err);
    if (err.code === "auth/...")
      return res.status(401).json({ message: "Invalid token" });
    next(err);
  }
};

export default verifyAuth;

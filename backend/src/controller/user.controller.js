import admin from "../config/firebase.js";

export const signup = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password)
    return res.status(400).json({ error: "Missing email or password" });

  try {
    const user = await admin.auth().createUser({
      email,
      password,
    });

    return res.status(201).json({
      message: "User created successfully",
      user,
    });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const { idToken } = req.body;
    if (!idToken) return res.status(400).json({ message: "Missing token" });

    const decoded = await admin.auth().verifyIdToken(idToken);
    const { uid, email } = decoded;

    // atomic upsert
    const userDoc = await User.findOneAndUpdate(
      { uid },
      { $setOnInsert: { uid, email, role: "user" } },
      { upsert: true, new: true }
    );

    return res.status(200).json({
      message: "Login successful",
      user: { uid: userDoc.uid, email: userDoc.email, role: userDoc.role },
    });
  } catch (err) {
    console.error(err);
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};

export const getProfile = async (req, res) => {
  try {
    // req.user is added by authMiddleware
    res.json({ message: "Profile fetched successfully", user: req.user });
  } catch (error) {
    res.status(500).json({ message: "Error fetching profile" });
  }
};

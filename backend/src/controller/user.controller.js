export const getProfile = async (req, res) => {
  try {
    // req.user is added by authMiddleware
    res.json({ message: "Profile fetched successfully", user: req.user });
  } catch (error) {
    res.status(500).json({ message: "Error fetching profile" });
  }
};

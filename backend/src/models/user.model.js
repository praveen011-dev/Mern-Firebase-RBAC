import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    uid: { type: String, unique: true, required: true },
    email: { type: String, required: true },
    role: { type: String, enum: ["admin", "manager", "user"], default: "user" },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;

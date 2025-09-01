import mongoose, { Schema } from "mongoose";

const taskSchema = new Schema(
  {
    title: String,
    description: String,
    status: {
      type: String,
      enum: ["todo", "in-progress", "done"],
      default: "todo",
    },
    ownerUid: { type: String, required: true },
    ownerEmail: { type: String, required: true },
    ownerRole: { type: String, required: true },
  },
  { timestamps: true }
);

const Task = mongoose.model("Task", taskSchema);

export default Task;

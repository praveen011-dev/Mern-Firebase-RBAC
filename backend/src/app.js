import express from "express";
import cors from "cors";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

import userRoutes from "./routes/user.routes.js";
import tasksRoutes from "./routes/task.routes.js";

app.use("/api/v1/user", userRoutes);
app.use("/api/v1/tasks", tasksRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res
    .status(err.status || 500)
    .json({ message: err.message || "Server error" });
});

export default app;

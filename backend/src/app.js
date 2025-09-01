import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

const frontendURL = process.env.FRONTEND_BASE_URL;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: frontendURL,
    credentials: true,
  })
);
app.use(cookieParser());

import userRoutes from "./routes/user.routes.js";
import tasksRoutes from "./routes/task.routes.js";

app.use("/api/v1/user", userRoutes);
app.use("/api/v1/tasks", tasksRoutes);

app.use((err, _req, res, _next) => {
  console.error(err.stack);
  res
    .status(err.status || 500)
    .json({ message: err.message || "Server error" });
});

export default app;

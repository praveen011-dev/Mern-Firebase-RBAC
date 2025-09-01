import express from "express";
import verifyAuth from "../middleware/auth.middleware.js";
import requireRole from "../middleware/requireRole.js";
import {
  createTask,
  deleteTask,
  getTasks,
  updateTask,
} from "../controller/task.controller.js";

const router = express.Router();

router.use(verifyAuth);
router.post("/", createTask);
router.get("/", getTasks);
router.put("/:id", updateTask);
router.delete("/:id", requireRole("admin"), deleteTask);

export default router;

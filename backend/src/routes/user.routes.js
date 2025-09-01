import express from "express";
import { getProfile } from "../controller/user.controller.js";
import verifyAuth from "../middleware/auth.middleware.js";

const router = express.Router();

router.route("/profile").get(verifyAuth, getProfile);

export default router;

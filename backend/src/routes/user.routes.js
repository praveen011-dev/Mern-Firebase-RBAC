import express from "express";
import { getProfile, login, signup } from "../controller/user.controller.js";
import verifyAuth from "../middleware/auth.middleware.js";

const router = express.Router();

router.route("/signup").post(signup);
router.route("/login").post(login);
router.route("/profile").get(verifyAuth, getProfile);

export default router;

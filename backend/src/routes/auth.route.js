import express from "express";
import {
  login,
  logout,
  signup,
  updateProfileFic,
} from "../controllers/auth.controller.js";
import { protectRoute } from "../middleware/protect.route.js";

const router = express.Router();

router.post("/signup", signup);

router.post("/login", login);

router.post("/logout", logout);

router.put("/update-profile", protectRoute, updateProfileFic);

export default router;

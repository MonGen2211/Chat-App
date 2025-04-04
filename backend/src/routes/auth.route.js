import express from "express";
import {
  check,
  login,
  logout,
  signup,
  updateProfile,
} from "../controllers/auth.controller.js";
import { protectedRoute } from "../middleware/protected.route.js";

const router = express.Router();

router.post("/login", login);
router.post("/logout", logout);
router.post("/signup", signup);
router.get("/check", protectedRoute, check);
router.put("/update-profilefic", protectedRoute, updateProfile);

export default router;

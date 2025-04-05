import express from "express";
import { protectedRoute } from "../middleware/protected.route.js";
import { getMessage, sendMessage } from "../controllers/message.controller.js";

const router = express.Router();

router.get("/users");
router.get("/:id", protectedRoute, getMessage);
router.post("/sendMessage/:id", protectedRoute, sendMessage);

export default router;

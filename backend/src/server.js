import express from "express";
import dotenv from "dotenv";

import authRoutes from "./routes/user.route.js";
import messageRoutes from "./routes/message.route.js";
import connectDb from "./lib/connectDb.js";
import cookieParser from "cookie-parser";
dotenv.config();

const app = express();
app.use(express.json());
app.use(cookieParser());
const PORT = process.env.PORT;

app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);

app.listen(PORT, () => {
  console.log(`🚀 File server running at http://localhost:`, PORT);
  connectDb();
});

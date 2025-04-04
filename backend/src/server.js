import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { connectDb } from "./lib/connectDb.js";
import authRoutes from "./routes/auth.route.js";
dotenv.config();
const app = express();
app.use(express.json());
app.use(cookieParser());
// app.use(
//   cors({
//     origin: "http://localhost:5173",
//     credentials: true,
//   })
// );
const PORT = process.env.PORT;

app.use("/api/auth", authRoutes);
// app.use("/api/message", messageRoutes);
app.listen(PORT, () => {
  console.log("server is running on PORT: ", PORT);
  connectDb();
});

import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

export const protectedRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    // check login first
    if (!token) {
      return res.status(401).json({ message: "You need to login first" });
    }
    // verify token
    // todo:userId(myscretkey) -> token
    // todo:userId(yourscretkey) -> token
    const check = jwt.verify(token, process.env.JWT_SECRET);
    console.log(check);
    if (!check) {
      return res
        .status(401)
        .json({ message: "Unauthorized - No Token Provided" });
    }

    const { userId } = jwt.decode(token);
    const user = await User.findById({ _id: userId }).select("-password");

    req.user = user;
    next();
  } catch (error) {
    console.log("Error in protectRoute Middleware: ", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};

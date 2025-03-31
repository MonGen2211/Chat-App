// import jwt from "jsonwebtoken";
// import User from "../models/auth.model.js";
// export const protectRoute = async (req, res, next) => {
//   try {
//     const token = req.cookies.jwt;
//     if (!token) {
//       return res
//         .status(401)
//         .json({ message: "Unauthorized - No Token Provided" });
//     }

//     const decoded = jwt.verify(token, process.env.JWT_SECRET);

//     if (!decoded) {
//       return res
//         .status(401)
//         .json({ message: "Unauthorized - No Token Provided" });
//     }

//     const user = await User.findById(decoded.userId).select("-password");

//     if (!user) {
//       return res.status(404).json({ message: "User Not Found" });
//     }

//     req.user = user;
//     next();
//   } catch (error) {
//     console.log("Error in protectRoute Middleware: ", error.message);
//     res.status(500).json({ message: "Internal server error" });
//   }
// };

import jwt from "jsonwebtoken";
import User from "../models/auth.model.js";

export const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;

    // ✅ Nếu không có token, vẫn cho request tiếp tục mà không chặn
    if (!token) {
      console.warn("⚠️ Không có token, tiếp tục request...");
      req.user = null; // Đặt user thành null nếu không có token
      return next();
    }

    // ✅ Nếu có token, thực hiện xác thực
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.userId).select("-password");

    if (!user) {
      return res.status(404).json({ message: "User Not Found" });
    }

    req.user = user;
    next();
  } catch (error) {
    console.error("❌ Lỗi xác thực token:", error.message);
    req.user = null; // Không dừng request nếu token sai, nhưng không gán user
    next();
  }
};

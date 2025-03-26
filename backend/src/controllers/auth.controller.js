import { generateToken } from "../lib/utils.js";
import User from "../models/auth.model.js";
import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const signup = async (req, res) => {
  const { fullname, email, password } = req.body;
  try {
    // check điền đầy đủ
    if (!fullname || !email || !password) {
      return res.status(400).json({ message: "Please field all" });
    }

    // check user đã tồn tại chưa
    const user = await User.findOne({ email });

    if (user !== null) {
      return res.status(400).json({ message: "Email has created" });
    }

    // check password > 6
    if (password.length < 6) {
      return res
        .status(400)
        .json({ message: "Password need more than 6 character" });
    }

    // hasspassword
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    // thêm mới và tạo cookie
    const newUser = new User({
      fullname,
      email,
      password: hashPassword,
    });

    const userId = newUser._id.toString();
    if (newUser) {
      await newUser.save();
      generateToken(userId, res);
      res.status(201).json({
        _id: newUser._id,
        fullname: newUser.fullname,
        email: newUser.email,
        profilefic: newUser.profilefic,
      });
    } else {
      return res.status(400).json({ message: "Invalid user Data" });
    }
  } catch (error) {
    console.log("error in controller: ", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    // check Provided Filed
    if (!email || !password) {
      return res.status(400).json({ message: "All Provided Filed" });
    }

    // check email
    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(400)
        .json({ message: "Email does not have in Database" });
    }
    // check password
    const checkPassword = bcrypt.compareSync(password, user.password); // true
    if (!checkPassword) {
      return res.status(400).json({ message: "Password is incorrected" });
    }

    // Create Cookie
    generateToken(user._id, res);

    res.status(200).json({
      _id: user._id,
      fullname: user.fullname,
      email: user.email,
      profilefic: user.profilefic,
    });
  } catch (error) {
    console.log("error in controller: ", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export const logout = async (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    return res.status(200).json({ message: "Logout Successfully" });
  } catch (error) {
    console.log("error in controller : ", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export const updateProfileFic = async (req, res) => {
  const { profilePic } = req.body;
  try {
    // console.log(jwt);
    res.send("updateProfileFic route");
    const user = await User.findOne({});
  } catch (error) {
    console.log("error in controller : ", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

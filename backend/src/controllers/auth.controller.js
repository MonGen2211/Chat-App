import mongoose from "mongoose";
import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { generateToken } from "../lib/util.js";
import cloudinary from "../lib/cloudinary.js";

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    // 1: check input
    if (!email || !password) {
      return res.status(400).json("Please field all provided");
    }
    // 2: check email in database
    const user = await User.findOne({ email: email });
    if (!user) {
      return res
        .status(400)
        .json("Email do not have in database. Please Signup account first");
    }
    // 3: check password with that email
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(400).json("Password is wrong");
    }
    // 4: give that email a cookie access login
    generateToken(user._id, res);
    res.status(200).json("Login successfully");
  } catch (error) {
    console.log("Error in Login controller: ", error.message);
    res.status(500).json("Internal Server Error");
  }
};

export const logout = async (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(200).json("Logout successfully");
  } catch (error) {
    console.log("Error in Logout controller: ", error.message);
    res.status(500).json("Internal Server Error");
  }
};

export const signup = async (req, res) => {
  const { fullname, email, password } = req.body;
  try {
    if (!fullname || !email || !password) {
      return res.status(400).json("Please field all provided");
    }

    const user = await User.findOne({ email: email });
    if (user) {
      return res.status(400).json("Email has exists in db");
    }

    const salt = 10;
    const hashPassword = bcrypt.hashSync(password, salt);
    const newUser = new User({
      fullname: fullname,
      email: email,
      password: hashPassword,
    });

    const userId = newUser._id.toString();
    await newUser.save();

    generateToken(userId, res);

    res.status(200).json("Signup successfully");
  } catch (error) {
    console.log("Error in Signup controller: ", error.message);
    res.status(500).json("Internal Server Error");
  }
};

export const check = async (req, res) => {
  try {
    // lấy cookies có tên là jwt

    res.status(200).json({
      message: "User checking",
      user: user,
    });
  } catch (error) {
    console.log("Error in check controller: ", error.message);
    res.status(500).json("Internal Server Error");
  }
};

export const updateProfile = async (req, res) => {
  try {
    const { profilefic } = req.body;
    const userId = req.user._id;
    const uploadResponse = await cloudinary.uploader.upload(profilefic);

    // console.log("Uploaded image URL:", cloudinary.uploader.upload(profilefic));
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      {
        profilefic: uploadResponse.secure_url,
      },
      {
        new: true,
      }
    );
    res.status(200).json(updatedUser);
  } catch (error) {
    console.log("Error in updateProfile controller: ", error.message);
    res.status(500).json("Internal Server Error");
  }
};

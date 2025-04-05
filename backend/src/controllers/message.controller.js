import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import CryptoJS from "crypto-js";
import cloudinary from "../lib/cloudinary.js";
import Message from "../models/message.model.js";
import User from "../models/user.model.js";
export const getMessage = async (req, res) => {
  try {
    // yourId
    const receiverId = req.params.id;
    // myId
    const senderId = req.user._id.toString();

    const messages = await Message.find({
      $or: [{ senderId: senderId }, { receiveId: receiverId }],
    });

    const result = messages.map((message) => ({
      ...message._doc,
      text: CryptoJS.AES.decrypt(
        message.text,
        process.env.JWT_SECRETKEY_CRYPTOJS
      ).toString(CryptoJS.enc.Utf8), // mã hóa lại content trước khi trả về
      image: CryptoJS.AES.decrypt(
        message.image,
        process.env.JWT_SECRETKEY_CRYPTOJS
      ).toString(CryptoJS.enc.Utf8),
    }));

    res.status(200).json(result);
  } catch (error) {
    console.log("Error in getMessages controller: ", error);
    res.status(500).json("Internal Server Error");
  }
};

export const getUsers = async (req, res) => {
  try {
    const id = req.user._id.toString();
    const users = await User.find({ _id: { $ne: id } });

    res.status(200).json(users);
  } catch (error) {
    console.log("Error in sendMessage controller: ", error);
    res.status(500).json("Internal Server Error");
  }
};

export const sendMessage = async (req, res) => {
  try {
    const senderId = req.user._id.toString();
    const receiveId = req.params.id;

    const { text, image } = req.body;

    const imageUrl = await cloudinary.uploader.upload(image);
    const imageUrlResult = imageUrl.secure_url;
    // hash text and Image with CRYPTOJS
    const hashText = CryptoJS.AES.encrypt(
      text,
      process.env.JWT_SECRETKEY_CRYPTOJS
    ).toString();
    const hashImageUrl = CryptoJS.AES.encrypt(
      imageUrlResult,
      process.env.JWT_SECRETKEY_CRYPTOJS
    ).toString();

    const newMessage = new Message({
      senderId,
      receiveId,
      text: hashText,
      image: hashImageUrl,
    });

    await newMessage.save();
    res
      .status(200)
      .json({ message: "Successfull send Message", data: newMessage });
  } catch (error) {
    console.log("Error in sendMessage controller: ", error);
    res.status(500).json("Internal Server Error");
  }
};

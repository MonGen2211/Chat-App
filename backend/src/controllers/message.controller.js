import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import User from "../models/auth.model.js";
import Message from "../models/message.model.js";
import clodinary from "cloudinary";

export const getUsersForSideBar = async (req, res) => {
  try {
    const token = req.cookies.jwt;
    const { userId } = jwt.decode(token);
    const filteredUser = await User.find({ _id: { $ne: userId } }).select(
      "-password"
    );
    res.status(200).json(filteredUser);
  } catch (error) {
    console.log("error in controller: ", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const getMessages = async (req, res) => {
  try {
    const { id: userToChatId } = req.params;
    const token = req.cookies.jwt;
    const { userId: myId } = jwt.decode(token);

    const messages = await Message.find({
      $or: [
        { senderId: myId, receiverId: userToChatId },
        { senderId: userToChatId, receiverId: myId },
      ],
    });

    console.log(messages);
    res.status(200).json(messages);
  } catch (error) {
    console.log("Error in getMessage controller: ", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const sendMessage = async (req, res) => {
  try {
    const { text, image } = req.body;
    const { id: receiverId } = req.params;
    const token = req.cookies.jwt;
    const { userId: senderId } = jwt.decode(token);

    let imageUrl;

    if (image) {
      const uploadReponse = await clodinary.uploader.upload(image);
      imageUrl = uploadReponse.secure_url;
    }

    const newMessage = new Message({
      senderId,
      receiverId,
      text,
      image: imageUrl,
    });

    await newMessage.save();
    // todo: Realtime functionality goes here => socket.io

    res.status(201).json(newMessage);
  } catch (error) {
    console.log("error in sendMessage controller: ", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

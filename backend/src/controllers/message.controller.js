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

    res.status(200).json(messages);
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

    const newMessage = new Message({
      senderId,
      receiveId,
      text,
      image: imageUrl.secure_url,
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

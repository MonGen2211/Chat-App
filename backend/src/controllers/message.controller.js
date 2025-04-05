import Message from "../models/message.model.js";

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

export const sendMessage = async (req, res) => {
  try {
    const senderId = req.user._id.toString();
    const receiveId = req.params.id;
    const { text } = req.body;

    const newMessage = new Message({
      senderId,
      receiveId,
      text,
    });

    await newMessage.save();
    // console.log(newMessage);
    res.status(200).json("Send Message Successfully");
  } catch (error) {
    console.log("Error in sendMessage controller: ", error);
    res.status(500).json("Internal Server Error");
  }
};

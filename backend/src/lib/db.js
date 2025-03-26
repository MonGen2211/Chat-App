import mongoose from "mongoose";

export const connectDb = async (req, res) => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected Database Successfully:", conn.connection.host);
  } catch (error) {
    console.log("Connected error: ", error);
  }
};

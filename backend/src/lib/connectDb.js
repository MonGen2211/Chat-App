import mongoose from "mongoose";

export const connectDb = () => {
  try {
    const conn = mongoose.connect(process.env.MONGODB_URI);
    console.log("Đẫ kết nối database thành công");
  } catch (error) {
    console.log("lỗi kết nối Database", error);
  }
};

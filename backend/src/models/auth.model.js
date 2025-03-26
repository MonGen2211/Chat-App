import mongoose from "mongoose";

const UserScema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },

    profilefic: {
      type: String,
      default: "",
    },
  },

  {
    timestamps: true,
  }
);

const User = new UserScema("User", UserScema);

export default User;

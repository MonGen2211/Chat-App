import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    fullname: {
      required: true,
      type: String,
    },

    password: {
      required: true,
      type: String,
      minLength: 6,
    },

    email: {
      required: true,
      type: String,
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

const User = mongoose.model("User", UserSchema);

export default User;

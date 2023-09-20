import mongoose from "mongoose";

const UserSchema = mongoose.Schema(
  {
    name: {
      type: string,
      required: true,
      unique: true,
    },
    email: {
      type: string,
      required: true,
      unique: true,
    },
    password: {
      type: string,
      required: true,
    },
    img: {
      type: string,
    },
    subscribers: {
      type: Number,
      default: 0,
    },
    subscribedUsers: {
      type: [string],
    },
  },
  { timestamps: true }
);

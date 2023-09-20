import mongoose from "mongoose";

const videoSchema = mongoose.Schema(
  {
    UserId: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    imgUrl: {
      type: String,
    },
    views : {
      type: Number,
      default : 0,
    },
    videoUrl: {
      type: String,
      required : true,
    },
    tags : {
        type : [String]
    }
  },
  { timestamps: true }
);



export default mongoose.model("User", UserSchema);
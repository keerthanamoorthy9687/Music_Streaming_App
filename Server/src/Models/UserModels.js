const mongoose = require("mongoose");

// Define the User Schema
const User = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role:{type:String,enum:['listener','Artist'],},
    // playlists: [
    //   {
    //     name: String,
    //     songs: [{ type: mongoose.Schema.Types.ObjectId, ref: "Song" }],
    //   },
    // ],
    subscription: {
      type: String,
      enum: ["Free", "Premium"],
      default: "Free",
    },
//     likedSongs: [{ type: mongoose.Schema.Types.ObjectId, ref: "Song" }],
//   },
//   { timestamps: true }
createdAt:{type:Date,default:Date.now}
  }
);

const user = mongoose.model("User", User);
module.exports = user;











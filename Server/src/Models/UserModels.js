const mongoose = require("mongoose");

// Define the User Schema
const User = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role:{type:String,enum:['listener','Artist'],},
    isAdmin: { type: Boolean, default:true},
    subscription: {
      type: String,
      enum: ["Free", "Premium"],
      default: "Free",
    },
    likedSongs: [{ type: mongoose.Schema.Types.ObjectId, ref: "Song" }],
    playlists: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Playlist' }],
    createdAt:{type:Date,default:Date.now}
  }
);

const users = mongoose.model("User", User);
module.exports = users;











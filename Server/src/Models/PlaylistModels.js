const mongoose=require('mongoose')

const Playlist=new mongoose.Schema({
    name:{type:String},
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    songs: [{ type: mongoose.Schema.Types.ObjectId, ref: "Song" }],
    isPublic:{type:Boolean},
    createdAt: { type: Date, default: Date.now },
})
const playlist=mongoose.model('playlist',Playlist)
module.exports=playlist


const mongoose=require('mongoose')

const Songs=new mongoose.Schema({
    title:{type:String,required:true} ,
    artist:{type: String},
    genre: {Type:String},
    albumCover:{type: String},
    songUrl: {type:String},
    uploadedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    createdAt: { type: Date, default: Date.now },

})
const song=mongoose.model('song',Songs)
module.exports=song
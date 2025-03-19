const mongoose=require('mongoose')

const Songs=new mongoose.Schema({
    title:{type:String} ,
    artist:{type: String},
    genre: {Type:String},
    albumCover:{type: String},
    songUrl: {type:String},
    uploadedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    createdAt: { type: Date, default: Date.now },

})

module.exports=mongoose.model('song',Songs)
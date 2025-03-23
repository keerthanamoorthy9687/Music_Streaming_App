const mongoose=require('mongoose')

const Songs=new mongoose.Schema(
    {
    title:{type:String,required:true} ,
    artist: { type: mongoose.Schema.Types.ObjectId, ref: 'Artist'},
    genre: {Type:String},
    albumCover:{type: String},
    duration:{type:Number},
    songUrl: {type:String},
    createdAt:{ type: Date, default: Date.now },

}
)
const songs=mongoose.model('song',Songs)
module.exports=songs
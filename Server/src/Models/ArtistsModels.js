const mongoose=require('mongoose')


const Artist=new mongoose.Schema({
    name:{type:String},
    bio:{type:String},
    profileImage:{type:String},
    songs:{type:mongoose.Schema.Types.ObjectId,ref:"song"},
    favorites:{type:Array},
    CreatedAt:{type:Date,default: Date.now}
})
const artist=mongoose.model('artist',Artist);
module.exports=artist
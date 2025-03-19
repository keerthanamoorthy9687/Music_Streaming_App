const mongoose=require('mongoose')


const Artist=new mongoose.Schema({
    name:{type:String},
    bio:{type:String},
    profileImage:{type:String},
    songs:{type:Array},
    favorites:{type:Array},
    CreatedAt:{type:Date,default: Date.now}
})

module.exports=mongoose.model('artist',Artist);
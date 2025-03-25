const mongoose=require('mongoose')


const Artist=new mongoose.Schema({
    name:{type:String},
    bio:{type:String},
    profileImage:{type:String},
    songs:{type:mongoose.Schema.Types.ObjectId,ref:"song"},
    metadata: {
        followers: { type: Number, default: 0 },
        totalStreams: { type: Number, default: 0 }
    },
    CreatedAt:{type:Date,default: Date.now}
})
const artist=mongoose.model('artist',Artist);
module.exports=artist
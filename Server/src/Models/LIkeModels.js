const mongoose=require('mongoose')


const Like=new mongoose.Schema({
    userId:{type:mongoose.Schema.Types.ObjectId,ref:'user'},
    songId:{type:mongoose.Schema.Types.ObjectId,ref:'song'}
}, { timestamps: true })
const likes=mongoose.model('like',Like)
module.exports=likes
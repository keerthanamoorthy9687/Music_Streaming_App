const mongoose=require('mongoose')


const Comment=new mongoose.Schema({
    userId:{type:mongoose.Schema.Types.ObjectId,ref:'user'},
    songId:{type:mongoose.Schema.Types.ObjectId,ref:'song'},
    commentText:{type:String},
    createdAt:{type:Date,default:Date.now}
})
const comment=mongoose.model('comment',Comment)
module.exports=comment
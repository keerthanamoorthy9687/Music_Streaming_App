const mongoose=require('mongoose')


const Comment=new mongoose.Schema({
    userId:{type:mongoose.Schema.Types.ObjectId,ref:'user'},
    songId:{type:mongoose.Schema.Types.ObjectId,ref:'song'},
    commentText:{type:String},
    createdAt:{type:Date,default:Date.now}
})

module.exports=mongoose.model('comment',Comment)
const mongoose=require('mongoose')


const Like=new mongoose.Schema({
    userId:{type:mongoose.Schema.Types.ObjectId,ref:'user'},
    songId:{type:mongoose.Schema.Types.ObjectId,ref:'song'}
})

module.exports=mongoose.model('like',Like)
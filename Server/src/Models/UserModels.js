const mongoose=require('mongoose');


const Users=new mongoose.Schema({
    username:{type:String},
    email:{type:String},
    password:{type:String},
    avatar:{type:String},
    isPremium:{type:Boolean},
    role:{type:String},
    createdAt:{type:Date,default: Date.now}

}
)
module.exports=mongoose.model('user',Users)










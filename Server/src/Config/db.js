const mongoose = require("mongoose");
// require("dotenv").config
// const URL=process.env.MONGO_URL

const URL='mongodb+srv://Keerthana:Admin12@cluster0.b3uyv.mongodb.net/mdb_music_app?retryWrites=true&w=majority&appName=Cluster0'

const connectDB=async()=>{
    try{
        await mongoose.connect(URL);
        console.log('DB data is connected')

    }catch(err){
        console.log('DB is failed')

    }
  
     
    
    
}
module.exports=connectDB;
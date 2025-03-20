const express=require('express');
const app=express();
require("dotenv").config();
const PORT=process.env.PORT||3000;

//connecting to the MongoDB
const connectDB=require('./src/Config/db')
connectDB();

//converting the json format
app.use(express.json());
//Routescls


const userRoute=require('./src/Routes/UserRoutes')
const songRoute=require('./src/Routes/SongRoutes')
app.use('/api/auth/',userRoute);
app.use('/api/',songRoute);



app.listen(PORT,()=>{
    console.log(`server listening the port ${PORT}`)
})


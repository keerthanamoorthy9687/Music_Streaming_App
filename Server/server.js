const express=require('express');
const app=express();
require("dotenv").config();
const PORT=process.env.PORT||3030;

//connecting to the MongoDB
const connectDB=require('./src/Config/db')
connectDB();

//converting the json format
app.use(express.json());


// app.use();



app.listen(PORT,()=>{
    console.log(`server listening the port ${PORT}`)
})


const dotenv=require("dotenv");
const express=require('express');
const app=express();
dotenv.config();


//connecting to the MongoDB

const connectDB=require('./src/Config/db')
connectDB();

//converting the json format
app.use(express.json());
//define the Routes
const userRoute=require('./src/Routes/UserRoutes')
const songRoute=require('./src/Routes/SongRoutes')
const playlistRoute=require('./src/Routes/PlaylistRoutes')
const artistRoute=require('./src/Routes/ArtistRoutes');
const likeRoute=require('./src/Routes/LikeRoutes');
const CommentRoute=require('./src/Routes/CommentRoutes');


app.use('/api/users',userRoute);
app.use('/api/song',songRoute);
app.use('/api/playlists',playlistRoute);
app.use('/api/artist',artistRoute);
app.use('/api/likes',likeRoute);
app.use('/api/comments',CommentRoute);


const port=process.env.PORT||5000
console.log(port)
app.listen(port,()=>{
    console.log(`server listening the port ${port}`)
})


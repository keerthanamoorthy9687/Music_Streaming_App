const dotenv=require("dotenv");
const express=require('express');
const app=express();
dotenv.config();
const cors = require('cors');
app.use(cors());


//connecting to the MongoDB

const connectDB=require('./src/config/db')
connectDB();

//converting the json format
app.use(express.json());
//define the Routes
const userRoute=require('./src/routes/UserRoutes')
const songRoute=require('./src/routes/SongRoutes')
const playlistRoute=require('./src/routes/PlaylistRoutes')
const artistRoute=require('./src/routes/ArtistRoutes');
const likeRoute=require('./src/routes/LikeRoutes');
const CommentRoute=require('./src/routes/CommentRoutes');


app.use('/api/users',userRoute);
app.use('/api/songs',songRoute);
app.use('/api/playlists',playlistRoute);
app.use('/api/artist',artistRoute);
app.use('/api/likes',likeRoute);
app.use('/api/comments',CommentRoute);


const port=process.env.PORT||5000
console.log(port)
app.listen(port,()=>{
    console.log(`server listening the port ${port}`)
})


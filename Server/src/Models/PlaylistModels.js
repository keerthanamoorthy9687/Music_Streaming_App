const mongoose=require('mongoose')

const Playlist=new mongoose.Schema({
    name: { type: String, required: true },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    songs: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Song' }],
    likes: { type: Number, default: 0 },
    metadata: {
        visibility: { type: String, enum: ['public', 'private'], default: 'public' }
    }
}, { timestamps: true });
const playlist=mongoose.model('playlist',Playlist)
module.exports=playlist


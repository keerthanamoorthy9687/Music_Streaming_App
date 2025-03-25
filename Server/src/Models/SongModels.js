const mongoose = require("mongoose");

const Songs = new mongoose.Schema({
    title: { type: String, required: true },
    artist: { type: String, required: true },
    album: { type: String },
    genre: { type: String },
    duration: { type: Number },  // Duration in seconds
    releaseDate: { type: Date },
    fileUrl: { type: String, required: true }, // Link to stream song
    metadata: {
        bitrate: String,
        format: String,
        sampleRate: String,
        addedBy: { type: String },
        uploadedAt: { type: Date, default: Date.now }
    }
}, { timestamps: true });
const song=mongoose.model("Song", Songs);

module.exports = song

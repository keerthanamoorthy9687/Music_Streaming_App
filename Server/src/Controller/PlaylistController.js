const { default: mongoose } = require('mongoose');
const Playlist = require('../models/PlaylistModels');
const User=require('../models/UserModels')



//  Create a new playlist
const createPlaylist = async (req, res) => {
    try {
        const { name,user, songs } = req.body;
        

        const newPlaylist = new Playlist({ name, user, songs });
        await newPlaylist.save();

        // Add playlist reference to user
        await User.findByIdAndUpdate(user, { $push: { playlists: newPlaylist._id } });

        res.status(201).json(newPlaylist);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

//  Get all playlists of a user
const getUserPlaylists = async (req, res) => {
    try {
        // const {user}=req.params;
        const playlists = await Playlist.find({});

        res.json(playlists);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

//  Get a single playlist by ID
const getPlaylistById = async (req, res) => {
    try {
        const { playlistId } = req.params;
        const playlist = await Playlist.findById(playlistId);

        if (!playlist) {
            return res.status(404).json({ message: "Playlist not found" });
        }

        res.json(playlist);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Add a song to a playlist
const addSongToPlaylist = async (req, res) => {
     console.log(req.params)
    try {
        const { playlistId, songId } = req.params;

        const playlist = await Playlist.findById(playlistId);
        if (!playlist) return res.status(404).json({ message: "Playlist not found" });

        // Avoid duplicate songs
        if (!playlist.songs.includes(songId)) {
            playlist.songs.push(songId);
            await playlist.save();
        }

        res.json({ message: "Song added to playlist", playlist });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Remove a song from a playlist
const removeSongFromPlaylist = async (req, res) => {
    try {
        const { playlistId, songId } = req.params;

        const playlist = await Playlist.findById(playlistId);
        if (!playlist) return res.status(404).json({ message: "Playlist not found" });

        playlist.songs = playlist.songs.filter(song => song.toString() !== songId);
        await playlist.save();

        res.json({ message: "Song removed from playlist", playlist });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete a playlist
const deletePlaylist = async (req, res) => {
    console.log(req.params)
    try {
        const { playlistId } = req.params;
       

        const playlist = await Playlist.findByIdAndDelete( playlistId );

        if (!playlist) return res.status(404).json({ message: "Playlist not found" });

        // // Remove playlist reference from user
        // await User.findByIdAndUpdate( { $pull: { playlists:playlistId } });

        res.json({ message: "Playlist deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
// const deletePlaylist = async (req, res) => {
//     try {
//         const { playlistId } = req.params;

//         const deletedPlaylist = await Playlist.findByIdAndDelete(artistId);
//         if (!deletedPlaylist) {
//             return res.status(404).json({ message: "Artist not found" });
//         }

//         res.json({ message: "Artist deleted successfully" });
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// };

module.exports={createPlaylist,getUserPlaylists, getPlaylistById,addSongToPlaylist,removeSongFromPlaylist,deletePlaylist}

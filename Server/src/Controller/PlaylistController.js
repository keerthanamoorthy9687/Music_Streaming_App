const Playlist = require('../Models/PlaylistModels');

const createPlaylist = async (req, res) => {
    try {
        const { name, songs } = req.body;
        const userId = req.user.id; // Assuming authentication is handled

        const newPlaylist = new Playlist({ name, user: userId, songs });
        await newPlaylist.save();

        res.status(201).json(newPlaylist);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
//READ   Get all playList 
const getAllPlaylists = async (req, res) => {
    try {
        const playlists = await Playlist.find().populate('user', 'name').populate('songs');
        res.json(playlists);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
//READ - Get single playList by ID
const getPlaylistById = async (req, res) => {
    try {
        const playlist = await Playlist.findById(req.params.id).populate('songs');
        if (!playlist) return res.status(404).json({ message: "Playlist not found" });

        res.json(playlist);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
//UPDATE-update the playlist by ID,name,song
const updatePlaylist = async (req, res) => {
    try {
        const { name, songs } = req.body;

        const updatedPlaylist = await Playlist.findByIdAndUpdate(
            req.params.id,
            { name, songs },
            { new: true }
        ).populate('songs');

        res.json(updatedPlaylist);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
//DELETE-delete the playlist using ID
const deletePlaylist = async (req, res) => {
    try {
        await Playlist.findByIdAndDelete(req.params.id);
        res.json({ message: "Playlist deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};





module.exports={createPlaylist,getAllPlaylists,getPlaylistById,updatePlaylist,deletePlaylist}


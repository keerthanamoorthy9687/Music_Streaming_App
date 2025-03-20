const song = require("../Models/SongModels");

//  CREATE - Create a song
const createSong = async (req, res) => {
try {
    const newSong = new song(req.body);
    console.log('newSog',newSong)
    await newSong.save();
    res.status(201).json(newSong);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

//  READ - Get all songs
const getSongs = async (req, res) => {
  try {
    const songs = await song.find();
    res.json(songs);
  } catch (error) {
    res.status(500).json({ message: "Error fetching songs", error });
  }
};

//  READ - Get single song by ID
const getSong = async (req, res) => {
  try {
    const singleSong = await song.findById(req.params.id,req.body);
    if (!singleSong) return res.status(404).json({ message: "Song not found" });
    res.json(singleSong);
  } catch (error) {
    res.status(500).json({ message: "Error fetching Song", error });
  }
};

//  UPDATE - Update song details
const updateSong = async (req, res) => {
  try {
    const updatedSong = await user.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedSong);
  } catch (error) {
    res.status(500).json({ message: "Error updating song", error });
  }
};

//  DELETE - Remove a song
const deleteSong = async (req, res) => {
  try {
    await song.findByIdAndDelete(req.params.id);
    res.json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting song", error });
  }
};

module.exports={createSong,getSongs,getSong,updateSong,deleteSong}

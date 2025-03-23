const song = require("../Models/SongModels");

//  CREATE - Create a song
const createSong = async (req, res) => {
  console.log(req.body)
 
try {
  const {title,artist,genre,songUrl,duration}=req.body
  // validation
  if(!title||!artist||!genre||!songUrl||!duration){
    res.status(401).json({message:"Missing the required Fields"})
  }
    const newSongs = new song(req.body);
    console.log('newSog',newSongs)
    await newSongs.save();
    res.status(201).json(newSongs);
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
  console.log(req.params)
 try{
  const {songId } = req.params;
  const songs = await song.findById(songId);

  if (!songs) {
      return res.status(404).json({ message: "Song not found" });
  }

  res.json(songs);
} catch (error) {
  res.status(500).json({ error: error.message });
}
}



//  UPDATE - Update song details
const updateSong = async (req, res) => {
  console.log(req.params)
try {
    const { songId } = req.params;
    console.log(songId)
    const updatedSong = await song.findByIdAndUpdate(
        songId,req.body, { new: true }
    );

    if (!updatedSong) {
        return res.status(404).json({ message: "song not found" });
    }

    res.json(updatedSong);
} catch (error) {
    res.status(500).json({ error: error.message });
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

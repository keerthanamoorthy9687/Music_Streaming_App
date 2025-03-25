const song = require("../Models/SongModels");
const upload=require('../Config/Upload')

//  CREATE - Create a song
const createSong = async (req, res) => {
  console.log(req.body)
 
try {
 
    const newSongs = new song(req.body);
    console.log('newSong',newSongs)
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
    res.json({ message: "Song deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting song", error });
  }
};

const uploadedSong= async(req, res) => {
  try {
      const newSong = new song({
          title: req.body.title,
          artist: req.body.artist,
          album: req.body.album,
          duration: req.body.duration,
          fileUrl: `/uploads/${req.file.filename}` // Save file path
      });

      await newSong.save();
      res.status(201).json({ message: 'File uploaded successfully', song: newSong });
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
};

// // Serve Uploaded Files (for audio streaming)
// router.get('/stream/:filename', (req, res) => {
//   const filePath = `./uploads/${req.params.filename}`;
//   res.sendFile(filePath, { root: '.' });
// });

module.exports={createSong,getSongs,getSong,updateSong,deleteSong,uploadedSong}

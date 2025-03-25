const express=require('express');
const router=express.Router();
const songControl=require('../Controller/SongController')
const upload=require('../uploads/Upload')


//define route path
router.post("/", songControl.createSong); // Create song
router.get("/", songControl.getSongs); // Get All songs
router.get("/:songId", songControl.getSong); // Get Single song
router.put("/:songId", songControl.updateSong); // Update song
router.delete("/:songId", songControl.deleteSong); // Delete song
router.post('/upload',upload.single('audio'),songControl.uploadedSong)//uploaded the song 


module.exports=router
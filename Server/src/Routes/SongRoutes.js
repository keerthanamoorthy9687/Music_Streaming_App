const express=require('express');
const router=express.Router();
const songControl=require('../Controller/SongController')


//define route path
router.post("/", songControl.createSong); // Create song
router.get("/", songControl.getSongs); // Get All songs
router.get("/:songId", songControl.getSong); // Get Single song
router.put("/:songId", songControl.updateSong); // Update song
router.delete("/:songId", songControl.deleteSong); // Delete song


module.exports=router
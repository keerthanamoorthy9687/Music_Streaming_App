const express=require('express');
const router=express.Router();
const songControl=require('../Controller/SongController')


//define route path
router.post("/song", songControl.createSong); // Create song
router.get("/song", songControl.getSongs); // Get All songs
router.get("/song/:id", songControl.getSong); // Get Single song
router.put("/song/:id", songControl.updateSong); // Update song
router.delete("/song/:id", songControl.deleteSong); // Delete song


module.exports=router
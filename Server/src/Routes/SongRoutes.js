const express=require('express');
const router=express.Router();
const songController=require('../Controller/SongController')


router.post("/song", songController.createSong); // Create song
router.get("/song", songController.getSongs); // Get All songs
router.get("/song/:id", songController.getSong); // Get Single song
router.put("/song/:id", songController.updateSong); // Update song
router.delete("/song/:id", songController.deleteSong); // Delete song


module.exports=router
const express=require('express');
const router=express.Router();
const artistControl=require('../Controller/ArtistController')


//define route path
router.post("/artist", artistControl.createArtist); // Create artist
router.get("/artist", artistControl.getArtists); // Get All artists
router.get("/artist/:id", artistControl.getArtist); // Get Single artist
router.put("/artist/:id", artistControl.updateArtist); // Update artist
router.delete("/artist/:id", artistControl.deleteArtist); // Delete artist

module.exports=router;
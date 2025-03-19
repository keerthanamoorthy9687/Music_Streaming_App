const express=require('express');
const router=express.Router();
const artistController=require('../Controller/ArtistController')


router.post("/artist", artistController.createArtist); // Create artist
router.get("/artist", artistController.getArtists); // Get All artists
router.get("/artist/:id", artistController.getArtist); // Get Single artist
router.put("/artist/:id", artistController.updateArtist); // Update artist
router.delete("/artist/:id", artistController.deleteArtist); // Delete artist

module.exports=router;
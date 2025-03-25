const express=require('express');
const router=express.Router();
const artistControl=require('../controller/ArtistController')
// const authMiddleware=require('../Middleware/AuthMiddleware');
// const adminMiddleware=require('../Middleware/AdminMiddleware')


//define route path using public 
router.get("/", artistControl.getAllArtists); // Get All artists
router.get("/:artistId", artistControl.getArtistById); // Get artist by ID

// Admin Routes - Protected by both Auth & Admin Middleware
router.post("/", artistControl.createArtist); // Create artist
router.put("/:artistId", artistControl.updateArtist); // Update artist
router.delete("/:artistId", artistControl.deleteArtist); // Delete artist

module.exports=router;
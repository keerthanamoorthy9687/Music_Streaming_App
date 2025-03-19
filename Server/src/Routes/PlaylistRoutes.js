const express=require('express');
const router=express.Router();
const playlistController=require('../Controller/PlaylistController')


router.post("/playlist", playlistController.createplaylist); // Create playlist
router.get("/playlist", playlistController.getplaylists); // Get All playlists
router.get("/playlist/:id", playlistController.getplaylist); // Get Single playlist
router.put("/playlist/:id", playlistController.updateplaylist); // Update playlist
router.delete("/playlist/:id", playlistController.deleteplaylist); // Delete playlist

module.exports=router;
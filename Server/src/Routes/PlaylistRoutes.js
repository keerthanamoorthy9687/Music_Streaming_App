const express=require('express');
const router=express.Router();
const playlistControl=require('../Controller/PlaylistController')


//define route path
router.post("/playlist", playlistControl.createPlaylist); // Create playlist
router.get("/playlist", playlistControl.getAllPlaylists); // Get All playlists
router.get("/playlist/:id", playlistControl.getAllPlaylists); // Get Single playlist
router.put("/playlist/:id", playlistControl.updatePlaylist); // Update playlist
router.delete("/playlist/:id", playlistControl.deletePlaylist); // Delete playlist

module.exports=router;
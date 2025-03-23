const express=require('express');
const router=express.Router();
const playlistControl=require('../Controller/PlaylistController')


//define route path
router.post("/", playlistControl.createPlaylist); // Create playlist
router.get("/", playlistControl.getUserPlaylists); // Get All playlists
router.get("/:playlistId", playlistControl.getPlaylistById); // Get Single playlist
router.put("/:playlistId/add/:songId", playlistControl.addSongToPlaylist); // Update playlist
router.put("/:playlistId/remove/:songId", playlistControl.removeSongFromPlaylist); // remove the playlist
router.delete("/:playlistId", playlistControl.deletePlaylist); // Delete playlist

module.exports=router;
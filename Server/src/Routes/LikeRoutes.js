const express=require('express');
const router=express.Router();
const likeControl=require('../Controller/LikeController')


//define route path
router.post("/like", likeControl.createLike); // Create like
router.get("/like", likeControl.getLikes); // Get All likes
router.get("/like/:id", likeControl.getLike); // Get Single like
router.put("/like/:id", likeControl.updateLike); // Update like
router.delete("/like/:id", likeControl.deleteLike); // Delete like

module.exports=router;


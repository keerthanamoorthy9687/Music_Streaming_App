const express=require('express');
const router=express.Router();
const likeController=require('../Controller/LikeController')


router.post("/like", likeController.createLike); // Create like
router.get("/like", likeController.getLikes); // Get All likes
router.get("/like/:id", likeController.getLike); // Get Single like
router.put("/like/:id", likeController.updateLike); // Update like
router.delete("/like/:id", likeController.deleteLike); // Delete like

module.exports=router;


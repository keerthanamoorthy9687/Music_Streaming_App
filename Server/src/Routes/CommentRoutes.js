const express=require('express');
const router=express.Router();
const commentController=require('../Controller/CommentController')


router.post("/comment", commentController.createComment); // Create comment
router.get("/comment", commentController.getComments); // Get All comments
router.get("/comment/:id", commentController.getComment); // Get Single comment
router.put("/comment/:id", commentController.updateComment); // Update comment
router.delete("/comment/:id", commentController.deleteComment); // Delete comment

module.exports=router;
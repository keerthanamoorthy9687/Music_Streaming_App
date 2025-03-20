const express=require('express');
const router=express.Router();
const commentControl=require('../Controller/CommentController')

//define route path
router.post("/comment", commentControl.createComment); // Create comment
router.get("/comment", commentControl.getComments); // Get All comments
router.get("/comment/:id", commentControl.getComment); // Get Single comment
router.put("/comment/:id", commentControl.updateComment); // Update comment
router.delete("/comment/:id", commentControl.deleteComment); // Delete comment

module.exports=router;
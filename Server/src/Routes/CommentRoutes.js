const express=require('express');
const router=express.Router();
const commentControl=require('../controller/CommentController')

//define route path
router.post('/', commentControl.addComment); // Add a comment
router.get('/:songId', commentControl.getComments); // Get all comments for an item
router.put('/:commentId', commentControl.updateComment); // Update a comment
router.delete('/:commentId',  commentControl.deleteComment); // Delete a comment
//authentic user to add,update,delete the comments 

module.exports=router;
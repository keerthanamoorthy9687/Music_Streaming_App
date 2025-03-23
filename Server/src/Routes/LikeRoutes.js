const express=require('express');
const router=express.Router();
const likeControl=require('../Controller/LikeController')
// const authMiddleware=require('../Middleware/AuthMiddleware');



//define route path
router.post('/',  likeControl.likeItem); // Like an item
router.delete('/:songId',likeControl.unlikeItem); // Unlike an item
router.get('/:songId', likeControl.getTotalLikes); // Get total likes
router.get('/:songId/:userId', likeControl.checkUserLike); // Check if user

module.exports=router;


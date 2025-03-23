const express=require('express');
const router=express.Router()
const userControl=require('../Controller/UserController')
// const auth = require('../Middleware/auth');


//define route path
router.post("/register", userControl.register); //Register a new user
router.post("/login",userControl.login);//login to the existing user
router.get("/:id",userControl.getUserProfile)//get user Profile


module.exports=router;
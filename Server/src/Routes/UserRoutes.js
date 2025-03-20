const express=require('express');
const router=express.Router()
const userControl=require('../Controller/UserController')


//define route path
router.post("/user", userControl.createUser); // Create User
router.get("/user", userControl.getUsers); // Get All Users
router.get("/user/:id", userControl.getUser); // Get Single User
router.put("/user/:id", userControl.updateUser); // Update User
router.delete("/user/:id", userControl.deleteUser); // Delete User

module.exports=router;
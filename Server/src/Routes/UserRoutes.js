const express=require('express');
const router=express.Router();
const userController=require('../Controller/UserController')


router.post("/user", userController.createUser); // Create User
router.get("/user", userController.getUsers); // Get All Users
router.get("/user/:id", userController.getUser); // Get Single User
router.put("/user/:id", userController.updateUser); // Update User
router.delete("/user/:id", userController.deleteUser); // Delete User

module.exports=router;
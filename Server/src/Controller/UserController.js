const user = require("../models/UserModels");

//  CREATE - Register a new user
const createUser = async (req, res) => {
try {
    const newUser = new user(req.body);
    console.log('newUser',newUser)
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

//  READ - Get all users
const getUsers = async (req, res) => {
  try {
    const users = await user.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Error fetching users", error });
  }
};

//  READ - Get single user by ID
const getUser = async (req, res) => {
  try {
    const singleUser = await user.findById(req.params.id);
    if (!singleUser) return res.status(404).json({ message: "User not found" });
    res.json(singleUser);
  } catch (error) {
    res.status(500).json({ message: "Error fetching user", error });
  }
};

//  UPDATE - Update user details
const updateUser = async (req, res) => {
  try {
    const updatedUser = await user.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: "Error updating user", error });
  }
};

//  DELETE - Remove a user
const deleteUser = async (req, res) => {
  try {
    await user.findByIdAndDelete(req.params.id);
    res.json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting user", error });
  }
};

module.exports={createUser,getUsers,getUser,updateUser,deleteUser}

const user = require("../Models/UserModels");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken'); 
// const dotenv=require('dotenv');
// dotenv.config();
// console.log('JWT_SECRET',process.env.JWT_SECRET)

//  CREATE - Register a new user
const register=async(req,res)=>{
    try {
        const { username, email, password } = req.body;
    
        // Check if user already exists
        const existingUser = await user.findOne({ email });
        if (existingUser) return res.status(400).json({ message: "Email already in use" });
    
        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);
    
        // Create new user
        const newUser = new user({ username, email, password: hashedPassword });
        await newUser.save();
        console.log(newUser)
    
        res.status(201).json({ message: "User registered successfully", userId: newUser._id });
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    };


    //CREATE- user login to the app
    const login = async (req, res) => {
        try {
            const { email, password } = req.body;
    
            // Check if user exists
            const loginUser = await user.findOne({ email });
            if (!loginUser) return res.status(404).json({ message: "User not found" });
    
            // Compare passwords
            const isMatch = await bcrypt.compare(password, loginUser.password);
            if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });
    
            // Generate JWT Token
            const token = jwt.sign({ id: loginUser._id },"secret",{ expiresIn: "7d" });
    
            res.json({ token, user: { id: loginUser._id, username: loginUser.name, email: loginUser.email } });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    };
    //  Get User Profile
const getUserProfile = async (req, res) => {
console.log(req.params)
    try {
        const userProfile = await user.findById(req.params.id);
        console.log(userProfile)
        if (!userProfile) return res.status(404).json({ message: "User not found" });

        res.json(userProfile);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};



module.exports={register,login,getUserProfile}

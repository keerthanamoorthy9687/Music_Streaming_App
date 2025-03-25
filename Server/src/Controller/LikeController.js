const Like = require('../models/LikeModels');
// const user=require('../Models/UserModels')

// Like a song or playlist
const likeItem = async (req, res) => {
    try {
        const { songId,userId } = req.body; // itemType: 'song' or 'playlist'
        // const userId = req.user.id;

        const existingLike = await Like.findOne({  userId, item: songId });

        if (existingLike) {
            return res.status(400).json({ message: "Already liked" });
        }

        const newLike = new Like({  userId, item: songId });
        await newLike.save();

        res.json({ message: "Liked successfully", newLike });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

//  Unlike a song or playlist
const unlikeItem = async (req, res) => {
    try {
        const { likeId } = req.params;
        // const userId = req.user.id;

        const deletedLike = await Like.findOneAndDelete({ likeId});

        if (!deletedLike) {
            return res.status(400).json({ message: "Not liked yet" });
        }

        res.json({ message: "Unliked successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get total likes for a song or playlist
const getTotalLikes = async (req, res) => {
    try {
        const { songId } = req.params;

        const likeCount = await Like.countDocuments({ item:songId });

        res.json({ totalLikes: likeCount });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Check if a user liked a song or playlist
const checkUserLike = async (req, res) => {
    console.log(req.params)
    try {
        const { songId,userId } = req.params;
        // const userId = req.user.id;

        const liked = await Like.findOne({  userId, item: songId });

        res.json({ liked: !!liked });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


module.exports={likeItem,unlikeItem,getTotalLikes,checkUserLike}
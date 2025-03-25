const Comment = require('../models/Comment');

// Add a comment on a song or playlist
const addComment = async (req, res) => {
    try {
        const { userId,songId,commentText } = req.body; // item: 'song' or 'playlist'
        // const userId = req.user.id;

        const newComment = new Comment({  userId, songId, commentText });
        await newComment.save();

        res.json({ message: "Comment added", newComment });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

//  Get all comments for a song or playlist
const getComments = async (req, res) => {
    try {
        // const { songId } = req.params;

        const comments = await Comment.find({ });

        res.json(comments);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update a comment
const updateComment = async (req, res) => {
    console.log(req.params)
    try {
        const { commentId } = req.params;
        
      console.log(commentId)
        const updatedComment = await Comment.findByIdAndUpdate(
            commentId,req.body, { new: true }
        );

        if (!updatedComment) {
            return res.status(404).json({ message: "Comment not found" });
        }

        res.json(updatedComment);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete a comment
const deleteComment = async (req, res) => {
    console.log(req.params)
    try {
        const { commentId } = req.params;
        // const userId = req.user.id;

        const deletedComment = await Comment.findByIdAndDelete(commentId );

        if (!deletedComment) {
            return res.status(404).json({ message: "Comment not found" });
        }

        res.json({ message: "Comment deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


module.exports={addComment,getComments,updateComment,deleteComment}

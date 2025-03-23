const jwt = require('jsonwebtoken');
const User = require('../Models/UserModels');

const authMiddleware = async (req, res, next) => {
    try {
        const token = req.header("Authorization")?.split(" ")[1];
        if (!token) return res.status(401).json({ message: "Unauthorized" });

        const decoded = jwt.verify(token, 'secret');
        const user = await User.findById(decoded.id);

        if (!user) return res.status(401).json({ message: "User not found" });

        req.user = user; //  Attach user to request
        next();
    } catch (error) {
        res.status(401).json({ message: "Invalid token" });
    }
};

module.exports = authMiddleware;

const user=require('../Models/UserModels')

const adminMiddleware = async(req, res, next) => {
    console.log("User data in adminMiddleware:", req.user)
    const userProfile = await user.findById(req.params.isAdmin);
    if ( !req.user.isAdmin) {
        return res.status(403).json({ message: "Access denied. Admins only." });
    }
    next();
};

module.exports = adminMiddleware;

const jwt = require('jsonwebtoken');
const User = require('../models/User');
require('dotenv').config();

const auth = async (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(401).json({ msg: "No token, access denied" });

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await User.findById(decoded.id).select("-password");
        next();
    } catch (err) {
        return res.status(403).json({ msg: "Invalid token" });
    }
};

module.exports = auth;

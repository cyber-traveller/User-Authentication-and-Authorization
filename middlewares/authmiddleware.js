const jwt = require("jsonwebtoken");

const authmiddleware = (req, res, next) => {
    const token = req.header("Authorization");
    if (!token) {
        return res.status(401).json({
            error: "No token provided, Unauthorized!!!"
        });
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        res.status(401).json({
            error: "Invalid token"
        });
    }
};

module.exports = authmiddleware;
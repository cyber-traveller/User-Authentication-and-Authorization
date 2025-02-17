const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

require('dotenv').config();

// user register
const registerUser = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({
                error: "User already exists"
            });

        };
        const user = await User.create({
            username,
            email,
            password: await bcrypt.hash(password, 10),
        });
        res.status(201).json(user);
    }
    catch (error) {
        res.status(500).json({
            error: "Internal server error"
        });
    };

};


//user login
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({
                error: "user not found"
            });
        };
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({
                error: "Invalid credentials"
            });
        }
        const token = jwt.sign({ userId: user._id, role: "User" }, process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_EXPIRES_IN
        });
        res.status(200).json({
            token,

        });

    } catch (error) {
        res.status(500).json({
            error: "Internal server error"
        });

    };
};

//get user info
const getUserInfo = async (req, res) => {
    try {
        const { user } = req
        res.status(200).json({
            user
        });
    }
    catch (error) {
        res.status(500).json({
            error: "Internal server error"
        });
    };
};


module.exports = {
    registerUser,
    loginUser,
    getUserInfo,
  

};
const express = require ("express")
const { registerUser,loginUser, getUserInfo, } = require ("../controllers/Authentication")
const authmiddleware = require ("../middlewares/authmiddleware")

const router = express.Router();


//register new user
router.post("/register", registerUser);

//login user
router.post("/login", loginUser);

//get user info
router.get("/user", authmiddleware,getUserInfo);

module.exports = router;
const express = require("express");

const registerUser = require("./controllers/register");
const getUser = require("./controllers/getUser");

const router = express.Router();

router.post("/register", registerUser);
router.post("/getUser", getUser);


module.exports = router;
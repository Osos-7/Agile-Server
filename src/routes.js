const express = require("express");

const registerUser = require("./controllers/registration");
const getUser = require("./controllers/getUser");

const router = express.Router();

router.post("/registration", registerUser);
router.post("/getUser", getUser);


module.exports = router;
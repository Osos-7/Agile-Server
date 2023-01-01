const express = require("express");


const getUser = require("./controllers/getUser");

const router = express.Router();


router.post("/getUser", getUser);


module.exports = router;
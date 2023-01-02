const express = require("express");

const getUser = require("../controllers/getUser");
const malzama = require("../controllers/malzama");
const SendDonation = require("../controllers/SendDonatation");
const getRegistration = require("../controllers/getRegistration")

const router = express.Router();

router.post("/malzama", malzama);
router.post("/getRegistration", getRegistration);
router.post("/SendDonation", SendDonation);
router.post("/getUser", getUser);


module.exports = router;
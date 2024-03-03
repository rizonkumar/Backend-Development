const express = require("express");
const homePingController = require("../controllers/home.controller");

const router = express.Router(); // express router object

router.get("/custom1", homePingController); // localhost:3000/custom/custom1

router.get("/custom2", homePingController); // localhost:3000/custom/custom2

module.exports = router;

const express = require("express");
const homePingController = require("../../controllers/home.controller");

const router = express.router();

router.get("/ping", homePingController); // /ping
module.exports = router;

var express = require("express");
var router = express.Router();

const { viewSign, actionSign, actionLogout } = require("./controller");

router.get("/", viewSign);
router.post("/", actionSign);
router.get("/logout ", actionLogout);

module.exports = router;

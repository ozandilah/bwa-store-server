var express = require("express");
var router = express.Router();

const { index, actionDelete, actionStatus } = require("./controller");

const { isLoginAdmin } = require("../middleware/auth");

router.use(isLoginAdmin);
router.get("/", index);
router.put("/status/:id", actionStatus);
router.delete("/delete/:id", actionDelete);

module.exports = router;

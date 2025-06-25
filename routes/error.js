const path = require("path");
const express = require("express");
const router = express.Router();
const rootDir = require("../util/path");
const errorController = require("../controllers/404");

router.use(errorController.errorPage);

module.exports = router;

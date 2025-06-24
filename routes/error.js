const path = require("path");
const express = require("express");
const router = express.Router();
const rootDir = require("../util/path");

router.use((req, res, next) => {
  res.render("404", { pageTitle: "Page Not Found", path: "/" });
});

module.exports = router;

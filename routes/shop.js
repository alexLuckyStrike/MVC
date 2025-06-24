const path = require("path");

const express = require("express");

const productsConroller = require("../controllers/products");

// const rootDir = require("../util/path");
// const adminData = require("./admin");

const router = express.Router();

router.get("/", productsConroller.getProducts);

module.exports = router;

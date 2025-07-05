const express = require("express");

const productsPageController = require("../controllers/adminProducts");

const router = express.Router();

router.get("/products", productsPageController.adminProducts);

module.exports = router;

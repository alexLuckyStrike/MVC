const express = require("express");

const productsPageController = require("../controllers/productsPage");

const router = express.Router();
router.get("/products", productsPageController.productsPage);
module.exports = router;

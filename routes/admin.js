// const path = require("path");

const express = require("express");

// const rootDir = require("../util/path");

const productsController = require("../controllers/products");

const router = express.Router();

// posAddProduct
// /admin/add-product => GET
router.get("/add-product", productsController.getAddProduct);

// /admin/add-product => POST
router.post("/add-product", productsController.postAddProduct);
//

// exports.routes = router;
module.exports = router;
// exports.products = products;

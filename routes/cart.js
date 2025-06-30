const express = require("express");
const router = express.Router();
const cartController = require("../controllers/cart");
// "/cart"
router.use(cartController.cardPage);

module.exports = router;

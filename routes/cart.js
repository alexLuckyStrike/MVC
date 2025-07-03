const express = require("express");

const cartController = require("../controllers/cart");

// "/cart"
const router = express.Router();
router.get("/cart", cartController.cardPage);
//

module.exports = router;

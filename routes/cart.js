const express = require("express");
const router = express.Router();
const {
  verifyToken,
  verifyToken_Auth,
  verifyToken_Admin,
} = require("./verifyToken");


const cartControllers = require("../controllers/cart");
//CREATE
router.post("/", verifyToken, cartControllers.createCart);
router.put("/:id", cartControllers.updateCart);
router.delete("/:id", verifyToken_Auth, cartControllers.deleteCart);
router.get("/:id", verifyToken_Auth, cartControllers.getCart);
router.get("/", verifyToken_Admin, cartControllers.getCarts);

module.exports = router;

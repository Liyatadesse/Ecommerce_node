const express = require("express");
const router = express.Router();
const {
  verifyToken,
  verifyToken_Auth,
  verifyToken_Admin,
} = require("./verifyToken");

const orderControllers = require("../controllers/order");
//CREATE
router.post("/", verifyToken, orderControllers.createOrder);
router.put("/:id", verifyToken_Admin, orderControllers.updateOrder);
router.delete("/:id", verifyToken_Admin, orderControllers.deleteOrder);
router.get("/:userId", verifyToken_Auth, orderControllers.getOrder);
router.get("/", verifyToken_Admin, orderControllers.getOrders);

module.exports = router;

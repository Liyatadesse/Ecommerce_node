const express = require("express");
const router = express.Router();
const {
  verifyToken,
  verifyToken_Auth,
  verifyToken_Admin,
} = require("./verifyToken");

const Product = require("../models/product");
const productControllers = require("../controllers/product");

//CREATE
router.post("/", productControllers.createProduct);
router.put("/:id", verifyToken_Admin, productControllers.updateProduct);
router.delete("/:id", verifyToken_Admin, productControllers.deleteProduct);
router.get("/:id", productControllers.getProduct);
router.get("/", productControllers.getProducts);
module.exports = router;

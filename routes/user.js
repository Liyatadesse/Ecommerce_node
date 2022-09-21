const express = require("express");
const router = express.Router();
const {
  verifyToken,
  verifyToken_Auth,
  verifyToken_Admin,
} = require("./verifyToken");
const userControllers = require("../controllers/user");

router.put("/:id", verifyToken_Auth, userControllers.updateUser);
router.delete("/:id", verifyToken_Auth, userControllers.deleteUser);
router.get("/:id", verifyToken_Admin, userControllers.getUser);
router.get("/", verifyToken_Admin, userControllers.getUsers);
module.exports = router;

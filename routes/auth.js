const express = require("express");
const router = express.Router();

const authControllers = require("../controllers/auth");

//REGISTER
router.post("/register", authControllers.registerUser);
//LOGIN
router.post("/login", authControllers.login);

module.exports = router;

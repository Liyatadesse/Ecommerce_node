
const User=require("../models/user")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
exports.registerUser = async (req, res) => {
  const { email, username, password } = req.body;
  const hashPw = await bcrypt.hash(password, 10);
  const newUser = new User({
    email,
    username,
    password: hashPw,
  });
  try {
    const oldUser = await User.findOne({
      username: username,
    });
    if (oldUser) {
      res.status(400).json("already registered");
      return;
    }
    const result = await newUser.save();
    res.status(200).json({ newUser: newUser });
  } catch (err) {
    res.status(400).json(err);
  }
};
exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username });
    if (!user) {
      res.status(400).json("user not found");
    }
    const validatePw = await bcrypt.compare(password, user.password);
    if (!validatePw) {
      res.status(400).json("wrong credential");
      return;
    }
    const token = jwt.sign(
      { _id: user._id, isAdmin: user.isAdmin },
      process.env.JWT_SEC,
      { expiresIn: "3d" }
    );
    res.status(200).json({ user, token });
  } catch (err) {
    res.status(400).json("something failed");
  }
};

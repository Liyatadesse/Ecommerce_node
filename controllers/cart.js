
const Cart = require("../models/Cart");
exports.getCarts = async (req, res) => {
  try {
    const cart = await Cart.find();
    res.status(200).json({ carts: cart });
  } catch (err) {
    res.status(400).json(err);
  }
};
exports.getCart = async (req, res) => {
  try {
    const cart = await Cart.findById(req.params.id);
    res.status(200).json({ Cart: cart });
  } catch (err) {
    res.status(400).json(err);
  }
};
exports.updateCart = async (req, res) => {
  try {
    const updatedCart = await Cart.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedCart);
  } catch (err) {
    res.status(400).json(err);
  }
};
exports.createCart = async (req, res) => {
  const { userId, products } = req.body;

  const newCart = new Cart({
    userId,
    products,
  });
  try {
    const savedCart = await newCart.save();

    res.status(200).json({
      savedCart: savedCart,
    });
  } catch (err) {
    res.status(400).json(err);
  }
};

exports.deleteCart = async (req, res) => {
  try {
    await Cart.findByIdAndDelete(req.params.id);
    res.status(200).json("successfully deleted");
  } catch (err) {
    res.status(400).json(err);
  }
};

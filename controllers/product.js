const bcrypt = require("bcrypt");
const Product= require("../models/product")
exports.getProducts = async (req, res) => {
  try {
    const product = await Product.find();
    res.status(200).json({ product: product });
  } catch (err) {
    res.status(400).json(err);
  }
};

exports.getProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json({ product: product });
  } catch (err) {
    res.status(400).json(err);
  }
};
exports.updateProduct = async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json({ updatedProduct: updatedProduct });
  } catch (err) {
    res.status(400).json(err);
  }
};
exports.createProduct = async (req, res) => {
  const { title, desc, size, color, price, categories } = req.body;

  const newProduct = new Product({
    title,
    desc,
    size,
    color,
    price,
    categories,
  });
  try {
    const existingProd = await Product.findOne({
      title: title,
    });

    if (existingProd) {
      res.status(400).json("Product already exists");
      return;
    }
    const savedProduct = await newProduct.save();
    res.status(200).json({ savedProduct: savedProduct });
  } catch (err) {
    res.status(400).json(err);
  }
};
exports.deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json("successfully deleted");
  } catch (err) {
    res.status(400).json(err);
  }
};

const Order=require("../models/order")
exports.getOrders = async (req, res) => {
  try {
    const order = await Order.find();
    res.status(200).json({ orders: order });
  } catch (err) {
    res.status(400).json(err);
  }
};

exports.getOrder = async (req, res) => {
  try {
    const order = await Order.findById( req.params.id);

    res.status(200).json({ order: order });
  } catch (err) {
    res.status(400).json(err);
  }
};
exports.updateOrder = async (req, res) => {
  try {
    const updatedOrder = await Order.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json({ updatedOrder: updatedOrder });
  } catch (err) {
    res.status(400).json(err);
  }
};
exports.createOrder = async (req, res) => {
  const { userId, products, amount, address } = req.body;

  const newOrder = new Order({
    userId,
    products,
    amount,
    address,
  });
  try {
    const result = await newOrder.save();
    res.status(200).json({ "your orders": result });
  } catch (err) {
    res.status(400).json(err);
  }
};
exports.deleteOrder = async (req, res) => {
  try {
    await Order.findByIdAndDelete(req.params.id);
    res.status(200).json("successfully deleted");
  } catch (err) {
    res.status(400).json(err);
  }
};

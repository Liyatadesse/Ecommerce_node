const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
      unique: true,
    },
    products: [
      {
        productId: {
          type: String,
        },
        quantity: {
          type: Number,
          default: 1,
        },
      },
    ],
    amount: {
      type: Number,
      required: true,
    },
    address: {
      type: Object,
    },
    status: {
      type: String,
      default: "PENDING",
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Order", orderSchema);

const PORT = process.env.PORT || 7072;

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");
dotenv.config();
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("database connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(express.json());

//app.use("/cart", (_, res, next) => {}

app.use("/user", userRoute);
app.use("/auth", authRoute);
app.use("/product", productRoute);
app.use("/order", orderRoute);
app.use("/cart", cartRoute);

// app.use("*", (_, res) => {
//   res.status(404).json({ message: "Url not found" });
// });

app.listen(PORT, () => {
  console.log(`server is running ${PORT}`);
});

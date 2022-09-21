
const User=require("../models/user")
exports.getUsers = async (req, res) => {
  try {
    const user = await User.find();
    res.status(200).json({ users: user });
  } catch (err) {
    res.status(400).json(err);
  }
};
exports.getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, ...others } = user._doc;

    res.status(200).json(others);
  } catch (err) {
    res.status(400).json(err);
  }
};
exports.updateUser = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json({ updatedUser: updatedUser });
  } catch (err) {
    res.status(400).json(err);
  }
};
exports.deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json("successfully deleted");
  } catch (err) {
    res.status(400).json(err);
  }
};

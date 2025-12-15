const { User } = require("../models/UserModel");

const NameChangeController = async (req, res) => {
  try {
    console.log("Change name request:", req.body);

    const userId = req.user; // ✅ from JWT middleware
    console.log(userId)
    const { name } = req.body;

    if (!name) {
      return res.status(400).json({ message: "Name is required" });
    }

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { fullname:name },
      { new: true }
    );
    console.log(updatedUser)
    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json({
      message: "Name updated successfully",
      user: {
        id: updatedUser._id,
        name: updatedUser.fullname,
        email: updatedUser.email,
      },
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server error" });
  }
};

module.exports = { NameChangeController };

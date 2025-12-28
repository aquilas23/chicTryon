// controllers/GalleryController.js
const { Gallery } = require("../models/GalleryModel");

const GalleryController = async (req, res) => {
  try {
    console.log("Gallery Controller Hit");
    console.log("User:", req.user);

    const images = await Gallery.find({ userId: req.user }).sort({
      createdAt: -1,
    });

    return res.status(200).json({
      success: true,
      data: images,
    });
  } catch (err) {
    return res
      .status(500)
      .json({ success: false, message: "Server Error", error: err });
  }
};

module.exports = { GalleryController };

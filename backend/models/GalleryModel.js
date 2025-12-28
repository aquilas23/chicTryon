const mongoose = require("mongoose");

const gallerySchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    originalImg: {
      url: { type: String, required: true },
      public_id: { type: String, required: true }, // from cloudinary
    },

    generatedImg: {
      url: { type: String, required: true },
      public_id: { type: String, required: true },
    },

    // Optional fields for features later
    hairstyle: String,
    fitScore: Number,
    rating: Number,
  },
  { timestamps: true }
);

const Gallery = mongoose.model("Gallery", gallerySchema);
module.exports = { Gallery };

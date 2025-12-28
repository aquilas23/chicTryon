const fs = require("fs");
const path = require("path");
const fetch = require("node-fetch");
const cloudinary = require("../utils/cloudinary")
const Replicate = require("replicate");
const {Gallery}=require('../models/GalleryModel')
const { buildFluxPrompt } = require("../utils/promptBuilder");

const inspirationFilePath = path.join(__dirname, "../data/inspiration.json");

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
});

const StudioController = async (req, res) => {
  try {
    const { hair, length, thickness, color, accessory } = req.body;

    if (!req.file) {
      return res
        .status(400)
        .json({ success: false, message: "Image upload required" });
    }

    const localFilePath = req.file.path;

    // Upload original input image to Cloudinary
    const uploadedOriginal = await cloudinary.uploader.upload(localFilePath, {
      folder: "virtual_tryon_original",
    });

    const prompt = buildFluxPrompt({
      hair,
      length,
      thickness,
      color,
      accessory,
    });

    // Run Replicate model
    const outputStream = await replicate.run(
      "black-forest-labs/flux-kontext-pro",
      {
        input: {
          prompt,
          input_image: uploadedOriginal.secure_url,
          aspect_ratio: "match_input_image",
          output_format: "png",
          safety_tolerance: 2,
        },
      }
    );

    // Convert Replicate stream to buffer
    const chunks = [];
    for await (const chunk of outputStream) chunks.push(Buffer.from(chunk));
    const buffer = Buffer.concat(chunks);

    // Upload result to Cloudinary
    const uploadedGenerated = await new Promise((resolve, reject) => {
      cloudinary.uploader
        .upload_stream({ folder: "virtual_tryon_results" }, (err, result) =>
          err ? reject(err) : resolve(result)
        )
        .end(buffer);
    });

    // Save history to JSON
    let history = [];
    if (fs.existsSync(inspirationFilePath)) {
      history = JSON.parse(fs.readFileSync(inspirationFilePath, "utf-8"));
    }

    const newRecord = {
      id: Date.now(),
      before: uploadedOriginal.secure_url,
      after: uploadedGenerated.secure_url,
      hair,
      length,
      thickness,
      color,
      accessory,
      createdAt: new Date().toISOString(),
    };


    history.unshift(newRecord);
    fs.writeFileSync(inspirationFilePath, JSON.stringify(history, null, 2));

    console.log(req.user);
    const newImg = await Gallery.create({
      userId: req.user,
      originalImg: {
        url: uploadedOriginal.url,
        public_id: uploadedOriginal.public_id,
      },
      generatedImg:{
        url:uploadedGenerated.url,
        public_id:uploadedGenerated.public_id,
      }
    });



    console.log(uploadedOriginal)
    console.log(uploadedGenerated)


    return res.json({
      success: true,
      before: uploadedOriginal.secure_url,
      after: uploadedGenerated.secure_url,
    });
  } catch (err) {
    console.error("❌ AI ERROR:", err);
    return res.status(500).json({ success: false, error: err.message });
  }
};

const getInspiration = (req, res) => {
  if (!fs.existsSync(inspirationFilePath)) return res.json([]);
  const data = JSON.parse(fs.readFileSync(inspirationFilePath, "utf-8"));
  return res.json(data);
};

module.exports = { StudioController, getInspiration };

const express = require("express");
const router = express.Router();
const multer = require("multer");
const {
  StudioController,
  getInspiration,
} = require("../Controllers/StudioController");

const upload = multer({ dest: "uploads/" });

router.post("/studiodata", upload.single("image"), StudioController);
router.get("/inspiration", getInspiration);

module.exports = router;

const express = require("express");
const router = express.Router();
const multer = require("multer");
const {
  StudioController,
  getInspiration,
} = require("../Controllers/StudioController");

const { SignUpController } = require("../Controllers/SignUpController");
const { LoginController } = require("../Controllers/LoginController");
const {GalleryController}=require("../Controllers/GalleryContoller")
const {NameChangeController}=require("../Controllers/NameChangeController")
const {DeleteAccountController}=require("../Controllers/DeleteAccountController")
const {auth}=require("../middleware/jwt")

const upload = multer({ dest: "uploads/" });


router.post("/studiodata", upload.single("image"), StudioController);
router.get("/inspiration", getInspiration);
router.post("/signup", SignUpController);
router.post("/login", LoginController);
router.get("/gallery",auth,GalleryController);
router.post("/changename",auth,NameChangeController);
router.post("/deleteaccount",auth,DeleteAccountController)

module.exports = router;

const express = require("express");
const {
  updateUserProfile,
  loginUser,
  getUserProfile,
  registerUser,
} = require("../controllers/authController");
const { protect } = require("../middlewares/authMiddleware");
const upload = require("../middlewares/uploadMiddleware");
const router = express.Router();
const cloudinary = require("cloudinary").v2;

// Configure Cloudinary (replace with your actual credentials or use environment variables)
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
const fs = require("fs");

//Auth Routes
router.post("/register", upload.single("profileImage"), registerUser);
router.post("/login", loginUser);
router.get("/profile", protect, getUserProfile);
router.put("/profile", protect, updateUserProfile);

module.exports = router;

const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const upload = require("../middlewares/uploadMiddleware");
const cloudinary = require("cloudinary").v2;

// Configure Cloudinary (replace with your actual credentials or use environment variables)
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
const fs = require("fs");

//Generate jwt Token
const generateToken = (userId) => {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET, { expiresIn: "7d" });
};

//@desc Register a new user
//@route POST /api/auth/register
//@access Public
const registerUser = async (req, res) => {
  try {
    const { name, email, password, adminInviteToken } = req.body;

    // 🔒 Default image placeholder
    let imageUrl = "https://via.placeholder.com/150";

    // ✅ Upload to Cloudinary if file is present
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    if (!req.file.path) {
      return res.status(400).json({ message: "File path is missing" });
    }
    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: "profile_pics",
    });
   

    // delete temp file
    fs.unlinkSync(req.file.path);

    imageUrl = result.secure_url;

    // 🚫 Check if user already exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    // 🧠 Set role
    let role = "member";
    if (
      adminInviteToken &&
      adminInviteToken === process.env.ADMIN_INVITE_TOKEN
    ) {
      role = "admin";
    }

    // 🔐 Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // ✅ Create user WITH profileImageUrl
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      profileImageUrl: imageUrl, // ✅ This should now be correct
      role,
    });

    // 🎟️ Send back user + token
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      profileImageUrl: user.profileImageUrl,
      token: generateToken(user._id),
    });
  } catch (error) {
    console.error("Register error:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

//@desc Login user
//@route POST /api/auth/login
//@access Public
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    //compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "invalid email or password" });
    }

    //Return user data with jwt
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      profileImageUrl: user.profileImageUrl,
      token: generateToken(user._id),
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

//@desc  Get user profile
//@route Get/api/auth/profile
//@access Private (Requires JWT)
const getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    if (!user) {
      return res.status(404).json({ message: "user nnot found" });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

//@desc Update user profile
//@route PUT/api/auth/profile
//@access Private (Requires JWT)
const updateUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(404).json({ message: "User not Found" });
    }
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;

    if (req.body.password) {
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(req.body.password, salt);
    }

    const updatedUser = await user.save();

    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      role: updatedUser.role,
      token: generateToken(updatedUser._id),
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

module.exports = { registerUser, loginUser, getUserProfile, updateUserProfile };

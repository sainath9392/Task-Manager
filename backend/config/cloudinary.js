const cloudinary = require("cloudinary").v2;
require("dotenv").config();

const connectCloudinary = () => {
  cloudinary.config({
    cloud_name: process.env.CLDN_NAME,
    api_key: process.env.CLDN_API_KEY,
    api_secret: process.env.CLDN_API_SECRET,
  });
};

module.exports = connectCloudinary;

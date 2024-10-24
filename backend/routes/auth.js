const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const User = require("../models/user.js");
const router = express.Router();

// File upload config using multer (for profile pictures)
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});
const upload = multer({ storage: storage });

// Registration route
// Registration route
router.post("/register", upload.single("profilePicture"), async (req, res) => {
  const {
    name,
    email,
    password,
    portfolio,
    github,
    instagram,
    linkedin,
    twitter,
  } = req.body;

  // Check for missing required fields
  if (!name || !email || !password) {
    const missingFields = [];
    if (!name) missingFields.push("name");
    if (!email) missingFields.push("email");
    if (!password) missingFields.push("password");

    return res.status(400).json({
      msg: `Please fill in all required fields: ${missingFields.join(", ")}`,
    });
  }

  try {
    // Check if user already exists
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ msg: "User already exists" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    user = new User({
      name,
      email,
      password: hashedPassword,
      portfolio,
      github,
      instagram,
      linkedin,
      twitter,
      profilePicture: req.file ? req.file.path : "", // Save profile picture path if uploaded
    });

    await user.save();

    // Generate JWT token
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res
      .status(201)
      .json({ token, userId: user._id, msg: "Registration successful" });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: "Server error" }); // Send a clear server error message
  }
});

// Login route
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check for missing fields
    if (!email || !password) {
      return res
        .status(400)
        .json({ msg: "Please fill in all required fields" });
    }

    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }

    // Generate JWT token
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    return res.json({ token, userId: user._id, msg: "Login successful" });
  } catch (err) {
    console.error(err.message);
    return res
      .status(500)
      .json({ msg: "Server error, please try again later" });
  }
});

module.exports = router;

const express = require("express");
const router = express.Router();
const protect = require("../middleware/auth");
const {
  createProfile,
  updateProfile,
  getProfile,
  getAllProfiles,
} = require("../controllers/profile");

// router.route("/create").post(protect, createProfile);

router.route("/update").patch(protect, updateProfile);

router.route("/:username").get(getProfile);

// router.route("/all").get(getAllProfiles);

module.exports = router;

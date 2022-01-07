const express = require("express");
const router = express.Router();
const protect = require("../middleware/auth");
const {
  createProfile,
  updateProfile,
  getProfile,
  getAllProfiles,
} = require("../controllers/profile");

router.route("/create-profile").post(protect, createProfile);

router.route("/update-profile").patch(protect, updateProfile);

router.route("/profile/:id").get(getProfile);

router.route("/profiles").get(getAllProfiles);

module.exports = router;

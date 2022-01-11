const Profile = require("../models/Profile");
const User = require("../models/User");
const asyncHandler = require("express-async-handler");

exports.createProfile = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.user.id);
  const { profileData } = req.body;

  if (!user) {
    res.status(400);
    throw new Error("User not found");
  }

  if (profileData.firstName && profileData.lastName) {
    profile = await Profile.create({
      user,
      ...profileData,
    });
    res.status(201).json({
      success: {
        profile,
      },
    });
  } else {
    res.status(400);
    throw new Error("Profile must contain first name and last name");
  }
});

exports.updateProfile = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.user.id);
  const { id, profileData } = req.body;

  if (!user) {
    res.status(400);
    throw new Error("User not found");
  }

  profile = await Profile.findOne({ user });

  if (!profile) {
    if (profileData.firstName && profileData.lastName) {
      profile = await Profile.create({
        user,
        ...profileData,
      });
      res.status(201).json({
        success: {
          profile,
        },
      });
    } else {
      res.status(400);
      throw new Error("Profile must contain first name and last name");
    }
  } else {
    if (profileData.email && profileData.email !== user.email) {
      user.email = profileData.email;
      await user.save();
    }

    delete profileData.email;

    Object.keys(profileData).forEach((key) => {
      profile[key] = profileData[key];
    });
    await profile.save();

    res.status(201).json({
      success: {
        profile,
      },
    });
  }
});

exports.getProfile = asyncHandler(async (req, res, next) => {
  const user = await User.findOne({ username: req.params.username });

  if (!user) {
    res.status(404);
    throw new Error("User not found");
  }

  const profile = Profile.findOne({ user });
  if (!profile) {
    res.status(404);
    throw new Error("Profile for this user not found");
  }
  res.status(201).json({
    success: {
      profile,
    },
  });
});

exports.getAllProfiles = asyncHandler(async (req, res, next) => {
  const profiles = Profile.find();
  res.status(201).json({
    success: {
      profiles,
    },
  });
});

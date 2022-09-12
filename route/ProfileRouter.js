/** @format */

const express = require('express');
const {
	getSingleProfile,
	updateProfile,
} = require('../controller/ProfileController');
const router = express.Router();
const Auth = require('../helper/Jwt');
const uploadprofile = require('../helper/multerprofile');

router.get('/', Auth.VerifyProfile, getSingleProfile);
router.patch(
	'/',
	Auth.VerifyProfile,
	uploadprofile.single('profile_picture'),
	updateProfile
);
module.exports = router;

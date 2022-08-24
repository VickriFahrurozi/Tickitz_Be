/** @format */

const express = require('express');
const {
	getAllAccount,
	addNewAccountByFormBody,
	updatedAccountById,
	deleteAccountById,
	getAllAccountById,
	Login,
	VerifyLogin,
} = require('../controller/AccountController');
const router = express.Router();
const Auth = require('../helper/Jwt');

router.get('/', Auth.VerifyAuth, getAllAccount);
router.get('/id', Auth.VerifyAuth, getAllAccountById);
router.post('/', addNewAccountByFormBody);
router.post('/login', Login);
router.post('/VerifyRole', VerifyLogin);
router.patch('/', Auth.VerifyAuthUser, updatedAccountById);
router.delete('/', Auth.VerifyAuthUser, deleteAccountById);
module.exports = router;

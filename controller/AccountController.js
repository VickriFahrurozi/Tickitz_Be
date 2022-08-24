/** @format */

//controller : tempat dimana kita menghubungkan antara client dan database
const {
	getAllAccount,
	addNewAccountByFormBody,
	updatedAccountById,
	deleteAccountById,
	getAllAccountById,
	Login,
	VerifyLogin,
} = require('../model/Account');

module.exports = {
	getAllAccount: async (req, res) => {
		//get All Account With Join
		try {
			const result = await getAllAccount(req, res);
			res.status(200).send(result);
		} catch (error) {
			res.status(400).send({ message: 'Masih Ada Error  ', error });
		}
	},
	getAllAccountById: async (req, res) => {
		//get All Account With Join
		try {
			const result = await getAllAccountById(req, res);
			res.status(200).send(result);
		} catch (error) {
			res.status(400).send({ message: 'Masih Ada Error  ', error });
		}
	},
	addNewAccountByFormBody: async (req, res) => {
		//add New Account From Body
		try {
			const result = await addNewAccountByFormBody(req, res);
			res.status(200).send(result);
		} catch (error) {
			res.status(400).send(error);
		}
	},
	updatedAccountById: async (req, res) => {
		//BY  Input Form Data
		try {
			const result = await updatedAccountById(req, res);
			res.status(200).send(result);
		} catch (error) {
			res.status(400).send(error);
		}
	},
	deleteAccountById: async (req, res) => {
		try {
			const result = await deleteAccountById(req, res);
			res.status(200).send(result);
		} catch (error) {
			res.status(400).send(error);
		}
	},
	Login: async (req, res) => {
		//add New Account From Body
		try {
			const result = await Login(req, res);
			res.status(200).send(result);
		} catch (error) {
			res.send(error);
		}
	},
	VerifyLogin: async (req, res) => {
		//add New Account From Body
		try {
			const result = await VerifyLogin(req, res);
			res.status(200).send(result);
		} catch (error) {
			res.status(400).send(error);
		}
	},
};

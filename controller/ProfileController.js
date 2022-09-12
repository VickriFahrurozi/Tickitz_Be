/** @format */

//controller : tempat dimana kita menghubungkan antara client dan database
const { getSingleProfile, updateProfile } = require('../model/Profile');

module.exports = {
	getSingleProfile: async (req, res) => {
		//get All Account With Join
		try {
			const result = await getSingleProfile(req, res);
			res.status(200).send(result);
		} catch (error) {
			res.status(400).send({ message: 'Masih Ada Error  ', error });
		}
	},
	updateProfile: async (req, res) => {
		//get All Account With Join
		try {
			const result = await updateProfile(req, res);
			res.status(200).send(result);
		} catch (error) {
			res.status(400).send({ message: 'Masih Ada Error  ', error });
		}
	},
};

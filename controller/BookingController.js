/** @format */

//controller : tempat dimana kita menghubungkan antara client dan database
const {
	getAllBooking,
	addNewBookingByFormBody,
	updatedBookingById,
	deleteBookingById,
	getAllBookingById,
} = require('../model/Booking');

module.exports = {
	getAllBooking: async (req, res) => {
		//get All Booking With Join
		try {
			const result = await getAllBooking(req, res);
			res.status(200).send(result);
		} catch (error) {
			res.status(400).send({ message: 'Masih Ada Error  ', error });
		}
	},
	getAllBookingById: async (req, res) => {
		//get All Booking With Join
		try {
			const result = await getAllBookingById(req, res);
			res.status(200).send(result);
		} catch (error) {
			res.status(400).send({ message: 'Masih Ada Error  ', error });
		}
	},
	addNewBookingByFormBody: async (req, res) => {
		//add New Booking From Body
		try {
			const result = await addNewBookingByFormBody(req, res);
			res.status(200).send(result);
		} catch (error) {
			res.status(400).send(error);
		}
	},
	updatedBookingById: async (req, res) => {
		//BY  Input Form Data
		try {
			const result = await updatedBookingById(req, res);
			res.status(200).send(result);
		} catch (error) {
			res.status(400).send(error);
		}
	},
	deleteBookingById: async (req, res) => {
		try {
			const result = await deleteBookingById(req, res);
			res.status(200).send(result);
		} catch (error) {
			res.status(400).send(error);
		}
	},
};

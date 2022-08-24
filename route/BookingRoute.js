/** @format */

const express = require('express');
const {
	getAllBooking,
	addNewBookingByFormBody,
	updatedBookingById,
	deleteBookingById,
	getAllBookingById,
} = require('../controller/BookingController');
const router = express.Router();
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

// router.get('/Booking',(req,res)=>{ //Bisa Aja Pake ini,cuman nanti ribet 1-1 di define,jadinya dikumpulin di index route
//     console.log("sdf")
// })
router.get('/', getAllBooking);
router.get('/id', getAllBookingById);
router.post('/', addNewBookingByFormBody);
router.patch('/', updatedBookingById);
router.delete('/', deleteBookingById);

module.exports = router;

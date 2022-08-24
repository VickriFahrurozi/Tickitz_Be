/** @format */

const express = require('express');
const {
	getAllScheduled,
	getAllScheduledById,
	addNewScheduledByFormBody,
	updatedScheduledById,
	deleteScheduledById,
} = require('../controller/ScheduledController');
const router = express.Router();

// router.get('/movies',(req,res)=>{ //Bisa Aja Pake ini,cuman nanti ribet 1-1 di define,jadinya dikumpulin di index route
//     console.log("sdf")
// })
router.get('/', getAllScheduled);
router.get('/id', getAllScheduledById);
router.post('/', addNewScheduledByFormBody);
router.patch('/', updatedScheduledById);
router.delete('/', deleteScheduledById);

module.exports = router;

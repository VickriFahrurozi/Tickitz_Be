/** @format */

const express = require('express');
const {
	getAllMovies,
	addNewMoviesByFormBody,
	updatedMoviesById,
	deleteMoviesById,
	getAllMoviesById,
	getNowShowingMovies,
	getUpcomingMovies,
	SearchMovies,
} = require('../controller/MoviesController');
const Auth = require('../helper/Jwt');
const router = express.Router();
const upload = require('../helper/multer');
const uploadpost = require('../helper/multer Post');

// router.get('/movies',(req,res)=>{ //Bisa Aja Pake ini,cuman nanti ribet 1-1 di define,jadinya dikumpulin di index route
//     console.log("sdf")
// })
router.get('/', getAllMovies);
router.get('/search', SearchMovies);
router.get('/nowshowing', getNowShowingMovies);
router.get('/upcoming', getUpcomingMovies);
router.get('/id', getAllMoviesById);
router.post(
	'/',
	Auth.VerifyAuth,
	uploadpost.single('cover'),
	addNewMoviesByFormBody
);
router.patch('/', Auth.VerifyAuth, updatedMoviesById);
router.patch('/id', Auth.VerifyAuth, upload.single('cover'), updatedMoviesById);
router.delete('/', Auth.VerifyAuth, deleteMoviesById);
module.exports = router;

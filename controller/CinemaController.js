/** @format */

//controller : tempat dimana kita menghubungkan antara client dan database
const {
	getAllMovies,
	addNewMoviesByFormBody,
	updatedMoviesById,
	deleteMoviesById,
	getAllMoviesById,
	getNowShowingMovies,
	getUpcomingMovies,
	SearchMovies,
} = require('../model/movies');

const { addCinema, getAllCinema } = require('../model/Cinema');

module.exports = {
	getAllCinema: async (req, res) => {
		//get All Movies With Join
		try {
			const result = await getAllCinema(req, res);
			res.status(200).send(result);
		} catch (error) {
			res.status(400).send({ message: 'Masih Ada Error  ', error });
		}
	},
	SearchMovies: async (req, res) => {
		//get All Movies With Join
		try {
			const result = await SearchMovies(req, res);
			res.status(200).send(result);
		} catch (error) {
			res.status(400).send({ message: 'Masih Ada Error  ', error });
		}
	},
	getNowShowingMovies: async (req, res) => {
		//get All Movies With Join
		try {
			const result = await getNowShowingMovies(req, res);
			res.status(200).send(result);
		} catch (error) {
			res.status(400).send({ message: 'Masih Ada Error  ', error });
		}
	},
	getUpcomingMovies: async (req, res) => {
		//get All Movies With Join
		try {
			const result = await getUpcomingMovies(req, res);
			res.status(200).send(result);
		} catch (error) {
			res.status(400).send({ message: 'Masih Ada Error  ', error });
		}
	},
	getAllMoviesById: async (req, res) => {
		//get All Movies With Join
		try {
			const result = await getAllMoviesById(req, res);
			res.status(200).send(result);
		} catch (error) {
			res.status(400).send({ message: 'Masih Ada Error  ', error });
		}
	},
	addCinema: async (req, res) => {
		//add New Movies From Body
		try {
			const result = await addCinema(req, res);
			res.status(200).send(result);
		} catch (error) {
			res.status(400).send(error);
		}
	},
	updatedMoviesById: async (req, res) => {
		//BY  Input Form Data
		try {
			const result = await updatedMoviesById(req, res);
			res.status(200).send(result);
		} catch (error) {
			res.status(400).send(error);
		}
	},
	deleteMoviesById: async (req, res) => {
		try {
			const result = await deleteMoviesById(req, res);
			res.status(200).send(result);
		} catch (error) {
			res.status(400).send(error);
		}
	},
};

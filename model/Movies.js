/** @format */

//model = tempat dimana kita meletakkan fungsi/query/isinya
const { deletecover, updatecover } = require('../helper/deletefiles');
const db = require('../helper/db_connection');
const FileValidation = require('../helper/FileValidation');
const jwt = require('jsonwebtoken');
const date = new Date();
module.exports = {
	getAllMovies: (req, res) => {
		return new Promise((resolve, reject) => {
			const { limit, page } = req.query;
			let offset = page * limit - limit;

			db.query(
				`SELECT movies.* , category.movie_category from movies JOIN category on movies.id = category.movie_id ORDER by movies.showing_date_start limit ${limit} OFFSET ${offset} `,
				(error, result) => {
					db.query(`SELECT * from movies`, (error2, result2) => {
						let totalpage = Math.ceil(result2.length / limit);
						if (error) {
							reject({
								message: 'Get All Movies Failed',
								status: 400,
							});
						} else {
							resolve({
								message: 'Get All Movies Success',
								status: 200,
								totalpage: totalpage,
								totalRow: result.length,
								totaldata: result2.length,
								list: result,
							});
							// totalrow,
						}
					});
				}
			);
		});
	},
	getNowShowingMovies: (req, res) => {
		let datetime =
			date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
		return new Promise((resolve, reject) => {
			const { limit, page } = req.query;
			let offset = page * limit - limit;

			db.query(
				`SELECT movies.* , category.movie_category from movies JOIN category on movies.id = category.movie_id WHERE showing_date_Start <= '${datetime}' AND showing_date_end >= '${datetime}' ORDER by movies.showing_date_start DESC limit ${limit} OFFSET ${offset}`,
				(error, result) => {
					db.query(
						`SELECT * from movies WHERE showing_date_Start <= '${datetime}' AND showing_date_end >= '${datetime}'`,
						(error2, result2) => {
							let totalpage = Math.ceil(result2.length / limit);
							if (error) {
								reject({
									message: 'Get All Movies Failed',
									status: 400,
								});
							} else {
								resolve({
									message: 'Get Now Movies Success',
									status: 200,
									totalpage: totalpage,
									totalRow: result.length,
									totaldata: result2.length,
									list: result,
								});
							}
						}
					);
				}
			);
		});
	},
	getUpcomingMovies: (req, res) => {
		let datetime =
			date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
		return new Promise((resolve, reject) => {
			const { limit, page } = req.query;
			let offset = page * limit - limit;

			db.query(
				`SELECT movies.* , category.movie_category from movies JOIN category on movies.id = category.movie_id WHERE showing_date_Start > '${datetime}' ORDER by movies.showing_date_start ASC limit ${limit} OFFSET ${offset}`,
				(error, result) => {
					db.query(
						`SELECT * from movies WHERE showing_date_Start > '${datetime}'`,
						(error2, result2) => {
							let totalpage = Math.ceil(result2.length / limit);
							if (error) {
								reject({
									message: 'Get All Movies Failed',
									status: 400,
								});
							} else {
								resolve({
									message: 'Get All Movies Success',
									status: 200,
									totalpage: totalpage,
									totalRow: result.length,
									totaldata: result2.length,
									list: result,
								});
							}
						}
					);
				}
			);
		});
	},
	getAllMoviesById: (req, res) => {
		//get All Movies With ID
		return new Promise((resolve, reject) => {
			const { id } = req.query;
			db.query(`SELECT * from movies WHERE id= ${id}`, (error, result) => {
				if (error) {
					reject({
						message: 'Data Tidak Tersedia',
						status: 400,
					});
				} else {
					resolve({
						message: 'Get From Movies BY ID Success',
						status: 200,
						list: result,
					});
				}
			});
		});
	},
	updatedMoviesById: (req, res) => {
		const fs = require('fs');
		//BY  Input Form Data
		return new Promise((resolve, reject) => {
			const {
				title,
				cover,
				release_date,
				director,
				description,
				casts,
				duration_hours,
				duration_minute,
				showing_date_start,
				showing_date_end,
			} = req.body;
			const { id } = req.query;

			if (req.file) {
				if (updatecover(id) == 0) {
					reject({
						message: 'ID TIDAK DITEMUKAN',
					});
				} else {
					db.query(
						`UPDATE movies SET title='${title}',cover='${req.file.filename}',release_date='${release_date}'
						,director='${director}',description='${description}',casts='${casts}'
						,duration_hours='${duration_hours}',duration_minute='${duration_minute}'
						,showing_date_start='${showing_date_start}'
						,showing_date_end='${showing_date_end}'  WHERE id=${id}`,
						(err, result) => {
							if (err) {
								reject({
									message: 'Gagal Update Dataa',
									status: 400,
								});
							} else {
								resolve({
									message: 'Berhasil Update Dataa',
									status: 200,
									result,
								});
							}
						}
					);
				}
			} else {
				db.query(
					`UPDATE movies SET title='${title}',release_date='${release_date}'
						,director='${director}',description='${description}',casts='${casts}'
						,duration_hours='${duration_hours}',duration_minute='${duration_minute}'
						,showing_date_start='${showing_date_start}'
						,showing_date_end='${showing_date_end}'  WHERE id=${id}`,
					(err, result) => {
						if (err) {
							reject({
								message: 'Gagal Update Dataa',
								status: 400,
							});
						} else {
							resolve({
								message: 'Berhasil Update Dataa',
								status: 200,
								result,
							});
						}
					}
				);
			}
		});
	},
	getAllMoviesByIdParams: (req, res) => {
		//get All Movies With ID
		return new Promise((resolve, reject) => {
			const { id } = req.params.id;
			db.query(
				`SELECT * from movies WHERE id= ${id}
                      ORDER BY release_date DESC`,
				(error, result) => {
					if (error) {
						reject({
							message: `Data Tidak Tersedia ${id}`,
							status: 400,
						});
					} else {
						resolve({
							message: 'Get From Movies BY ID Success',
							status: 200,
							list: result,
						});
					}
				}
			);
		});
	},

	addNewMoviesByFormBody: (req, res) => {
		//add New Movies From Body
		return new Promise((resolve, reject) => {
			const {
				title,
				cover,
				release_date,
				director,
				description,
				casts,
				category,
				duration_hours,
				duration_minute,
				showing_date_start,
				showing_date_end,
			} = req.body;

			if (req.file) {
				if (FileValidation(req.file.filename) != 1) {
					reject({
						message: 'Wrong File Type , Allowed File Type : Jpg,Png,Jpeg,Webp',
						status: 400,
					});
				} else {
					db.query(
						`INSERT into movies (title,cover,release_date,director,description,casts,duration_hours,duration_minute,showing_date_start,showing_date_end) 
				   Values ("${title}","${req.file.filename}","${release_date}","${director}","${description}","${casts}","${duration_hours}","${duration_minute}","${showing_date_start}","${showing_date_end}")`,
						(err, result) => {
							const lastid = result.insertId;
							if (err) {
								reject({
									message: 'Data Tidak Berhasil Di Inputt',
									status: 400,
								});
							} else {
								db.query(
									`insert into category (movie_id,movie_category) values("${lastid}","${category}")`
								);

								resolve({
									message: 'data movie dan category berhasil di input',
									status: 200,
									result,
								});
							}
						}
					);
				}
			} else {
				res.status(400).send({
					message: 'COVER CANNOT BE EMPTY',
				});
			}
		});
	},

	deleteMoviesById: (req, res) => {
		return new Promise((resolve, reject) => {
			const { id } = req.query;
			console.log(id);
			db.query(`select cover from movies where id = ${id}`, (err, result) => {
				if (!result.length) {
					reject({
						message: `Data Dengan ID = ${id} Tidak Ditemukan `,
					});
				} else {
					deletecover(`./uploads/${result[0].cover}`);
					db.query(`delete from movies where id = "${id}" `, (err, result) => {
						if (err) {
							reject({
								message: 'Failed Deleted Data',
							});
						} else {
							resolve({
								message: 'Delete Data Success',
								status: 200,
								result,
							});
						}
					});
				}
			});
		});
	},
	SearchMovies: (req, res) => {
		return new Promise((resolve, reject) => {
			const { limit, page, title } = req.query;
			let offset = page * limit - limit;

			db.query(
				`SELECT movies.* , category.movie_category from movies JOIN category on movies.id = category.movie_id WHERE movies.title like '%${title}%' ORDER by movies.showing_date_start limit ${limit} OFFSET ${offset} `,
				(error, result) => {
					db.query(
						`SELECT * from movies WHERE movies.title like '%${title}%' `,
						(error2, result2) => {
							let totalpage = Math.ceil(result2.length / limit);
							if (error) {
								reject({
									message: `Get All Movies Failed ${error}`,
									status: 400,
								});
							} else {
								resolve({
									message: 'Get All Movies Success',
									status: 200,
									totalpage: totalpage,
									totalRow: result.length,
									totaldata: result2.length,
									list: result,
								});
							}
						}
					);
				}
			);
		});
	},
};

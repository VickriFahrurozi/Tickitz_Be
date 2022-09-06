/** @format */

//model = tempat dimana kita meletakkan fungsi/query/isinya
const { deletecover, updatecover } = require('../helper/deletefiles');
const db = require('../helper/db_connection');
const FileValidation = require('../helper/FileValidation');
const jwt = require('jsonwebtoken');
const date = new Date();
module.exports = {
	getAllCinema: (req, res) => {
		return new Promise((resolve, reject) => {
			const { limit, page } = req.query;
			let offset = page * limit - limit;

			db.query(
				`SELECT cinema.* , category.movie_category from cinema JOIN category on cinema.id = category.movie_id ORDER by cinema.showing_date_start limit ${limit} OFFSET ${offset} `,
				(error, result) => {
					db.query(`SELECT * from cinema`, (error2, result2) => {
						let totalpage = Math.ceil(result2.length / limit);
						if (error) {
							reject({
								message: 'Get All Cinema Failed',
								status: 400,
							});
						} else {
							resolve({
								message: 'Get All Cinema Success',
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
	getNowShowingCinema: (req, res) => {
		let datetime =
			date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
		return new Promise((resolve, reject) => {
			const { limit, page } = req.query;
			let offset = page * limit - limit;

			db.query(
				`SELECT cinema.* , category.movie_category from cinema JOIN category on cinema.id = category.movie_id WHERE showing_date_Start <= '${datetime}' AND showing_date_end >= '${datetime}' ORDER by cinema.showing_date_start DESC limit ${limit} OFFSET ${offset}`,
				(error, result) => {
					db.query(
						`SELECT * from cinema WHERE showing_date_Start <= '${datetime}' AND showing_date_end >= '${datetime}'`,
						(error2, result2) => {
							let totalpage = Math.ceil(result2.length / limit);
							if (error) {
								reject({
									message: 'Get All Cinema Failed',
									status: 400,
								});
							} else {
								resolve({
									message: 'Get All Cinema Success',
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
	getUpcomingCinema: (req, res) => {
		let datetime =
			date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
		return new Promise((resolve, reject) => {
			const { limit, page } = req.query;
			let offset = page * limit - limit;

			db.query(
				`SELECT cinema.* , category.movie_category from cinema JOIN category on cinema.id = category.movie_id WHERE showing_date_Start > '${datetime}' ORDER by cinema.showing_date_start ASC limit ${limit} OFFSET ${offset}`,
				(error, result) => {
					db.query(
						`SELECT * from cinema WHERE showing_date_Start > '${datetime}'`,
						(error2, result2) => {
							let totalpage = Math.ceil(result2.length / limit);
							if (error) {
								reject({
									message: 'Get All Cinema Failed',
									status: 400,
								});
							} else {
								resolve({
									message: 'Get All Cinema Success',
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
	getAllCinemaById: (req, res) => {
		//get All Cinema With ID
		return new Promise((resolve, reject) => {
			const { id } = req.query;
			db.query(`SELECT * from cinema WHERE id= ${id}`, (error, result) => {
				if (error) {
					reject({
						message: 'Data Tidak Tersedia',
						status: 400,
					});
				} else {
					resolve({
						message: 'Get From Cinema BY ID Success',
						status: 200,
						list: result,
					});
				}
			});
		});
	},
	updatedCinemaById: (req, res) => {
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
						`UPDATE cinema SET title='${title}',cover='${req.file.filename}',release_date='${release_date}'
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
					`UPDATE cinema SET title='${title}',release_date='${release_date}'
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
	getAllCinema: (req, res) => {
		//get All Cinema With ID
		return new Promise((resolve, reject) => {
			db.query(`SELECT * from cinema`, (error, result) => {
				if (error) {
					reject({
						message: `Data Cinema Tidak Tersedia`,
						status: 400,
					});
				} else {
					resolve({
						message: 'Get All Cinema Success',
						status: 200,
						data: result,
					});
				}
			});
		});
	},
	addCinema: (req, res) => {
		//add New Cinema From Body
		return new Promise((resolve, reject) => {
			const {
				cinema_code,
				cinema_brand,
				cinema_name,
				cinema_address,
				cinema_city,
				cinema_price,
			} = req.body;
			if (
				!cinema_code.length ||
				!cinema_brand.length ||
				!cinema_name.length ||
				!cinema_address.length ||
				!cinema_city.length ||
				!cinema_price.length
			) {
				reject({
					message: 'Field Cannot Be Empty',
					status: 400,
				});
			} else {
				db.query(
					`INSERT into cinema (cinema_code,cinema_brand,cinema_name,cinema_address,cinema_city,cinema_price) 
                       Values ("${cinema_code}","${cinema_brand}","${cinema_name}","${cinema_address}","${cinema_city}","${cinema_price}")`,
					(err, result) => {
						if (err) {
							reject({
								message: 'Data Cinema Tidak Berhasil di Input',
								status: 400,
							});
						} else {
							resolve({
								message: 'Data Cinema Berhasil di Input',
								status: 200,
								result,
							});
						}
					}
				);
			}
		});
	},
	deleteCinemaById: (req, res) => {
		return new Promise((resolve, reject) => {
			const { id } = req.query;
			console.log(id);
			db.query(`select cover from cinema where id = ${id}`, (err, result) => {
				if (!result.length) {
					reject({
						message: `Data Dengan ID = ${id} Tidak Ditemukan `,
					});
				} else {
					deletecover(`./uploads/${result[0].cover}`);
					db.query(`delete from cinema where id = "${id}" `, (err, result) => {
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
	SearchCinema: (req, res) => {
		return new Promise((resolve, reject) => {
			const { limit, page, title } = req.query;
			let offset = page * limit - limit;

			db.query(
				`SELECT cinema.* , category.movie_category from cinema JOIN category on cinema.id = category.movie_id WHERE cinema.title like '%${title}%' ORDER by cinema.showing_date_start limit ${limit} OFFSET ${offset} `,
				(error, result) => {
					db.query(
						`SELECT * from cinema WHERE cinema.title like '%${title}%' `,
						(error2, result2) => {
							let totalpage = Math.ceil(result2.length / limit);
							if (error) {
								reject({
									message: `Get All Cinema Failed ${error}`,
									status: 400,
								});
							} else {
								resolve({
									message: 'Get All Cinema Success',
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

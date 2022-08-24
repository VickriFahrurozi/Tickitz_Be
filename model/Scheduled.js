/** @format */

//model = tempat dimana kita meletakkan fungsi/query/isinya
const db = require('../helper/db_connection');
module.exports = {
	getAllScheduled: (req, res) => {
		//get All Movies With Join
		return new Promise((resolve, reject) => {
			db.query(`Select * From scheduled`, (error, result) => {
				if (error) {
					reject({
						message: 'Data Tidak Tersedia',
						status: 400,
					});
				} else {
					resolve({
						message: 'Get From Movies-Scheduled Success',
						status: 200,
						list: result,
					});
				}
			});
		});
	},
	getAllScheduledById: (req, res) => {
		//get All Movies With ID
		return new Promise((resolve, reject) => {
			const { id } = req.body;
			db.query(
				`SELECT * From scheduled WHERE scheduled_id= ${id}`,
				(error, result) => {
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
				}
			);
		});
	},
	addNewScheduledByFormBody: (req, res) => {
		//add New Movies From Body
		return new Promise((resolve, reject) => {
			const {
				movie_id,
				cinema_id,
				studio_id,
				movie_title,
				movie_cover,
				cinema_name,
				scheduled_price_min,
				scheduled_price_max,
				scheduled_date_start,
				scheduled_date_end,
			} = req.body;
			db.query(
				`INSERT INTO scheduled(movie_id,cinema_id,studio_id,movie_title,movie_cover,cinema_name,scheduled_price_min,
                       scheduled_price_max,scheduled_date_start,scheduled_date_end)
                       Values ("${movie_id}","${cinema_id}","${studio_id}","${movie_title}","${movie_cover}","${cinema_name}",
                       "${scheduled_price_min}","${scheduled_price_max}","${scheduled_date_start}","${scheduled_date_end}")`,
				(err, result) => {
					if (err) {
						reject({
							message: 'Data Tidak Berhasil Di Input',
							status: 400,
						});
					} else {
						resolve({
							message: 'data movie dan category berhasil di input',
							status: 200,
							result,
						});
					}
				}
			);
		});
	},
	updatedScheduledById: (req, res) => {
		//BY  Input Form Data
		return new Promise((resolve, reject) => {
			const { scheduled_id, movie_cover } = req.body;
			db.query(
				`update scheduled set movie_cover=${movie_cover} where scheduled_id = ${scheduled_id}`,
				(err, result) => {
					if (err) {
						reject({
							message: 'Gagal Update Dataa',
							status: 400,
						});
					} else {
						resolve({
							message: 'Berhasil Update Data',
							status: 200,
							result,
						});
					}
				}
			);
		});
	},
	deleteScheduledById: (req, res) => {
		return new Promise((resolve, reject) => {
			const { scheduled_id } = req.query;
			console.log(`${scheduled_id}`);
			db.query(
				`delete from scheduled where scheduled_id = "${scheduled_id}" `,
				(err, result) => {
					if (err) {
						reject({
							message: 'Failed Deleted Data',
						});
					} else {
						resolve({
							message: 'Delete Data Success 1',
							status: 200,
							result,
						});
					}
				}
			);
		});
	},
};

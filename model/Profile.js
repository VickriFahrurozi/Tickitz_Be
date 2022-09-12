/** @format */

const db = require('../helper/db_connection');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const token = require('../helper/Jwt');
const { deletecover, updateprofile } = require('../helper/deletefiles');

module.exports = {
	getSingleProfile: (req, res) => {
		//get All Account With ID
		return new Promise((resolve, reject) => {
			const { profile_id } = req.query;
			db.query(
				`SELECT * from profiles WHERE profile_id= ${profile_id}`,
				(error, result) => {
					if (error) {
						reject({
							message: 'Get  Failed',
							status: 400,
						});
					} else {
						resolve({
							message: 'Get Profile Success',
							status: 200,
							result: result,
						});
					}
				}
			);
		});
	},
	updateProfile: (req, res) => {
		const fs = require('fs');
		console.log(req.body, 'ini req body nya');
		//BY  Input Form Data
		return new Promise((resolve, reject) => {
			const { first_name, last_name, phone_number, profile_picture } = req.body;
			const { profile_id } = req.query;

			if (req.file) {
				if (updateprofile(profile_id) == 0) {
					reject({
						message: 'ID TIDAK DITEMUKAN',
					});
				} else {
					db.query(
						`UPDATE profiles SET first_name='${first_name}',profile_picture='${req.file.filename}',last_name='${last_name}',phone_number='${phone_number}' WHERE profile_id = '${profile_id}'`,
						(err, result) => {
							if (err) {
								reject({
									message: 'Gagal Update Profile',
									status: 400,
								});
							} else {
								resolve({
									message: 'Berhasil Update Profile',
									status: 200,
									result,
								});
							}
						}
					);
				}
			} else {
				db.query(
					`UPDATE profiles SET first_name='${first_name}',last_name='${last_name}',phone_number='${phone_number}' WHERE profile_id = '${profile_id}'`,
					(err, result) => {
						if (err) {
							reject({
								message: 'Gagal Update Profile',
								status: 400,
							});
						} else {
							resolve({
								message: 'Berhasil Update Profile',
								status: 200,
								result,
							});
						}
					}
				);
			}
		});
	},
};

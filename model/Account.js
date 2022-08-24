/** @format */

const db = require('../helper/db_connection');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const token = require('../helper/Jwt');
const Verifier = require('email-verifier');
module.exports = {
	getAllAccount: (req, res) => {
		return new Promise((resolve, reject) => {
			const { limit, page } = req.query;
			let offset = page * limit - limit;

			db.query(
				`SELECT account_id,email from account limit ${limit} OFFSET ${offset}`,
				(error, result) => {
					db.query(
						`SELECT account_id,email from account `,
						(error2, result2) => {
							let totalpage = Math.ceil(result2.length / limit);
							if (error) {
								reject({
									message: 'Get All Account Failed',
									status: 400,
								});
							} else {
								// let pagination = result.slice((page - 1) * limit, page * limit);
								resolve({
									message: 'Get All Account Success',
									status: 200,
									totalpage: totalpage,
									totalRow: result.length,
									totaldata: result2,
									list: result,
								});
								// totalrow,
							}
						}
					);
				}
			);
		});
	},
	getAllAccountById: (req, res) => {
		//get All Account With ID
		return new Promise((resolve, reject) => {
			const { account_id } = req.query;
			db.query(
				`SELECT * from account WHERE account_id= ${account_id}`,
				(error, result) => {
					if (error) {
						reject({
							message: 'Get Account BY ID Failed',
							status: 400,
						});
					} else {
						resolve({
							message: 'Get Account BY ID Success',
							status: 200,
							list: result,
						});
					}
				}
			);
		});
	},
	updatedAccountById: (req, res) => {
		//BY  Input Form Data
		return new Promise((resolve, reject) => {
			const { account_id, email, password } = req.body;
			bcrypt.hash(password, 10, function (err, hash) {
				if (err) {
					res.send({ message: ' Failed To Encrypt Password' });
				} else {
					db.query(
						`UPDATE account SET email='${email}',password='${hash}'
							  WHERE account_id=${account_id}`,
						(err, result) => {
							if (err) {
								reject({
									message: 'Update Account Failed',
									status: 400,
								});
							} else {
								resolve({
									message: 'Update Account Success',
									status: 200,
									result,
								});
							}
						}
					);
				}
			});
		});
	},
	getAllAccountByIdParams: (req, res) => {
		//get All Account With ID
		return new Promise((resolve, reject) => {
			const { account_id } = req.params.account_id;
			db.query(
				`SELECT * from account WHERE account_id= ${account_id}`,
				(error, result) => {
					if (error) {
						reject({
							message: `Get Account By Params Failed`,
							status: 400,
						});
					} else {
						resolve({
							message: 'Get Account By Params Failed',
							status: 200,
							list: result,
						});
					}
				}
			);
		});
	},

	addNewAccountByFormBody: (req, res) => {
		//add New Account From Body
		return new Promise((resolve, reject) => {
			let {
				email,
				password,
				confirmpassword,
				first_name,
				last_name,
				phone_number,
			} = req.body;
			email = email.toLowerCase();
			if (
				!email.length ||
				!password.length ||
				!confirmpassword.length ||
				!first_name.length ||
				!last_name.length ||
				!phone_number.length
			) {
				reject({
					message: `Field Cannot Be Empty`,
					status: 400,
				});
			} else if (confirmpassword != password) {
				reject({
					message: `Password Not Match`,
					status: 400,
				});
			} else if (password.length < 8) {
				reject({
					message: `Password Need To Be At Least 8 Characters`,
					status: 400,
				});
			} else {
				db.query(
					`SELECT email from account where email = '${email.toLowerCase()}'`,
					(err, result) => {
						if (err || result.length) {
							reject({
								message: `Email Already Registered , Use Another One `,
								status: 400,
							});
						} else {
							bcrypt.hash(password, 10, function (err, hash) {
								if (err) {
									res.status(400).send({
										message: `Failed To Encrypt Password`,
									});
								} else {
									db.query(
										`INSERT into account (email,password) 
											   Values ("${email}","${hash}")`,
										(err, result) => {
											const lastid = result.insertId;

											if (err) {
												reject({
													message: `Add New Account Failed`,
													status: 200,
												});
											} else {
												db.query(
													`insert into profiles (account_id,first_name,last_name,phone_number) values("${lastid}","${first_name}","${last_name}","${phone_number}")`
												);

												resolve({
													message: 'Add New Account Success ',
													status: 200,
													email,
													password,
													hash,
												});
											}
										}
									);
								}
							});
						}
					}
				);
			}
		});
	},

	Login: (req, res) => {
		//add New Account From Body
		return new Promise((resolve, reject) => {
			const { email, password } = req.body;
			let hashingpassword, ID;
			db.query(
				`select password,account_id,role from account where email = "${email.toLowerCase()}"`,
				(err, result) => {
					if (err) {
						res.send({
							message: err,
						});
					} else if (!result.length) {
						res.send({
							message: 'Email Not Found',
						});
					} else {
						hashingpassword = result[0].password;
						ID = result[0].account_id;
						bcrypt.compare(
							password,
							hashingpassword,
							function (err, matchresult) {
								if (matchresult == true) {
									const token = jwt.sign(
										{ id: ID, role: result[0].role }, // ini payload JWT NYA
										process.env.JWT_SECRET_KEY, //INI PRIVATE KEY NYA
										{ expiresIn: '1d' },
										{ algorithm: 'HS256' } //INI ALGORITMA NYA , KALAU HS256 CUMA BUTUH 1 KEY
									);
									// const JWTtoken = token(ID, result[0].role);
									// console.log(JWTtoken);
									jwt.verify(
										token,
										process.env.JWT_SECRET_KEY,
										function (err, decoded) {
											console.log(decoded.ID); // bar
										}
									);

									resolve({
										message: 'Login Success',
										ID,
										token,
										role: result[0].role,
									});
								} else {
									reject({
										message: 'Incorrect Email/Password',
									});
								}
							}
						);
					}
				}
			);
		});
	},

	deleteAccountById: (req, res) => {
		return new Promise((resolve, reject) => {
			const { account_id } = req.query;
			db.query(
				`select from account where account_id = ${account_id}`,
				(err, result) => {
					if (!result.length) {
						console.log(`Data Akun Dengan ID ${account_id} Tidak Ditemukan `);
					} else {
						db.query(
							`delete from account where account_id = "${account_id}" `,
							(err, result) => {
								if (err) {
									reject({
										message: 'Failed Deleted Account',
									});
								} else {
									resolve({
										message: 'Delete Account Success',
										status: 200,
										result,
									});
								}
							}
						);
					}
				}
			);
		});
	},

	VerifyLogin: (req, res) => {
		//add New Account From Body
		return new Promise((resolve, reject) => {
			const { token } = req.query;
			console.log(token);

			jwt.verify(token, process.env.JWT_SECRET_KEY, function (err, decoded) {
				if (err) {
					res.send({
						message: 'Failed To Identify',
						role: 0,
					});
				} else {
					res.send({
						role: decoded.role,
					});
				}
			});
		});
	},
};

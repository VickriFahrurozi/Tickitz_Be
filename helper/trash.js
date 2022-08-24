/** @format */
const bcrypt = require('bcrypt');
const { encrypt } = require('./password');

// // console.log(fetch('ASD', 10));
// if ((await encrypt('a', 10)) == 'a') {
// 	console.log('YEYEYE');
// } else {
// 	console.log('KLAKAKA');
// }

async function fetch(password, salltrounds) {
	try {
		const result = await encrypt(password, salltrounds);
		console.log(`${result}`);
	} catch (error) {
		console.log(error, 'Hehehe');
	}
}

fetch('a', 5);

// Login: (req, res) => {
// 	//add New Account From Body
// 	return new Promise((resolve, reject) => {
// 		const { email, password } = req.body;
// 		db.query(`select from account where email = ${email}`, (err, result) => {
// 			if (err) {
// 				reject({
// 					message: 'Email Not Found',
// 				});
// 			}
// 		});

// 		bcrypt.compare(password, hash, function (err, result) {
// 			if (err) {
// 				res.status(400).send({
// 					message: 'Failed To Encrypt Password',
// 				});
// 			} else if (result == false) {
// 				res.status(400).send({
// 					message: 'Email/Password Incorrect',
// 				});
// 			} else {
// 				db.query(
// 					`INSERT into account (email,password)
//                            Values ("${email}","${hash}")`,
// 					(err, result) => {
// 						const lastid = result.insertId;

// 						if (err) {
// 							reject({
// 								message: 'Add New Account Failed',
// 								status: 400,
// 							});
// 						} else {
// 							db.query(`insert into profiles (account_id) values("${lastid}")`);

// 							resolve({
// 								message: 'Add New Account Success ',
// 								status: 200,
// 								result: hash,
// 							});
// 						}
// 					}
// 				);
// 			}
// 		});
// 	});
// };

// /** @format */

// const express = require('express');
// const bcrypt = require('bcrypt');

// const encrypt = (password) => {
// 	new Promise((resolve, rejejct) => {
// 		bcrypt.hash(password, 10, function (err, hash) {
// 			if (err) {
// 				rejejct({
// 					message: 'Proccess Encrypt Gagal',
// 					data: hash,
// 				});
// 			} else {
// 				resolve({
// 					message: 'Proccess Encrypt Berhasil',
// 					data: hash,
// 				});
// 			}
// 		});
// 	});
// };
// async function fetch() {
// 	try {
// 		const result = await encrypt('ABCD');
// 		console.log(result);
// 	} catch (error) {
// 		console.log('HEHEHEHE');
// 	}
// }

// const decrypt = (password, hash) => {
// 	bcrypt.compare(password, hash, function (err, result) {
// 		return result;
// 	});
// };

// console.log(encrypt('Vickri'));

// module.exports = {
// 	encrypt,
// 	decrypt,
// };
// fetch();

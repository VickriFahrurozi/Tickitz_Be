/** @format */

const express = require('express');
const bcrypt = require('bcrypt');

const encrypt = (password, saltRounds) => {
	return new Promise((resolve, reject) => {
		bcrypt
			.hash(password, saltRounds)
			.then(function (hash) {
				resolve(hash);
			})
			.catch((err) => {
				reject(err);
			});
	});
};

module.exports = {
	encrypt,
	// decrypt,
	// a,
};

// const decrypt = (password, hash) => {
// 	bcrypt.compare(password, hash, function (err, result) {
// 		return result;
// 	});
// };

// const a = (text) => {
// 	const hash = bcrypt.hashSync(text, 10);
// 	return text;
// };

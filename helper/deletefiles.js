/** @format */

const fs = require('fs');
const db = require('./db_connection');
const deletecover = (FileLocation) => {
	fs.unlink(FileLocation, (err) => {
		if (err) {
			console.log(`Error di FS unlink ${err}`);
		} else {
			console.log('sukses');
		}
	});
};
const updatecover = (id) => {
	db.query(`select cover from movies where id = ${id}`, (err, result) => {
		if (err) {
			console.log('error di db query');
			return 0;
		} else if (!result.length) {
			console.log('Data Cover Tidak Ada , Tidak Ada Cover yang diganti');
			return 0;
		} else {
			deletecover(`./uploads/${result[0].cover}`);
			return 1;
		}
	});
};

module.exports = { deletecover, updatecover };

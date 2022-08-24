/** @format */
const db = require('./db_connection');

const IDValidation = (id) => {
	return db.query(`select * from movies where id = ${id}`, (err, result) => {
		if (err) {
			return 0;
		} else if (!result.length) {
			return 0;
		} else {
			return 1;
		}
	});
};

module.exports = IDValidation;

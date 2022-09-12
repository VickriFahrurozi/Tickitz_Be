/** @format */
const db = require('../helper/db_connection');
const FileValidation = require('./FileValidation');
const multer = require('multer');
const storageprofile = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, 'uploads');
	},
	filename: async function (req, file, cb) {
		await db.query(
			`select * from profiles where profile_id = '${req.query.profile_id}'`,
			(err, result) => {
				if (err) {
					req.res.status(404).send({
						message: err,
					});
				} else if (!result.length) {
					req.res.status(400).send({
						message: 'Error , ID Not Foundd',
					});
				} else {
					const uniqueSuffix = Date.now();
					if (FileValidation(file.originalname) == 1) {
						cb(null, uniqueSuffix + '-' + file.originalname);
					} else {
						req.res.status(400).send({
							message: 'Error , Incorrect File Type',
						});
					}
				}
			}
		);
	},
});

const uploadprofile = multer({ storage: storageprofile });

module.exports = uploadprofile;

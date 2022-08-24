/** @format */
const FileValidation = require('./FileValidation');
const multer = require('multer');
const storagepost = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, 'uploads');
	},

	filename: function (req, file, cb) {
		if (file) {
			const uniqueSuffix = Date.now();
			if (FileValidation(file.originalname) == 1) {
				cb(null, uniqueSuffix + '-' + file.originalname);
			} else {
				req.res.status(400).send({
					message: 'Error , Incorrect File Type',
				});
			}
		}
	},
});

const uploadpost = multer({ storage: storagepost });

module.exports = uploadpost;

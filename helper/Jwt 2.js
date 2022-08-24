/** @format */
const jwt = require('jsonwebtoken');

const VerifyAuthUser = (req, res, next) => {
	if (req.headers.token) {
		const token = req.headers.token;
		jwt.verify(token, process.env.JWT_SECRET_KEY, function (err, decoded) {
			if (err) {
				return res.status(404).send({
					message: 'INVALID TOKEN',
				});
			} else if (decoded.id != req.headers.id) {
				return res.status(404).send({
					message: 'IT`S NOT YOUR ACCOUNT',
				});
			} else {
				next();
			}
		});
	} else {
		return res.status(404).send({
			message: 'PLEASE LOG IN FIRST',
		});
	}
};
module.exports = VerifyAuthUser;

// module.exports = {
// 	AccessToken: (id, role) => {
// 		return new Promise((resolve, reject) => {
// 			const payload = {
// 				ID: id,
// 				Role: role,
// 			};
// 			const key = process.env.JWT_SECRET_KEY;
// 			const options = {
// 				expiresIn: '5m',
// 			};
// 			jwt.sign(payload, key, options, (err, token) => {
// 				if (err) {
// 					console.log(err.message);
// 					reject({
// 						message: 'Failed Create Token',
// 					});
// 				} else {
// 					resolve(token);
// 				}
// 			});
// 		});
// 	},

// 	RefreshToken: (id, role) => {
// 		return new Promise((resolve, reject) => {
// 			const payload = {
// 				ID: id,
// 				Role: role,
// 			};
// 			const key = process.env.JWT_SECRET_KEY;
// 			const options = {
// 				expiresIn: '5m',
// 			};
// 			jwt.sign(payload, key, options, (err, token) => {
// 				if (err) {
// 					console.log(err.message);
// 					reject({
// 						message: 'Failed Create Token',
// 					});
// 				} else {
// 					resolve(token);
// 				}
// 			});
// 		});
// 	},
// };

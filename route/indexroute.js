/** @format */

// // Cara ke-1 , Gausah Pake Express , inheritance
const express = require('express');
const app = express();
const MoviesRoute = require('./MoviesRoute');
const ScheduledRoute = require('./ScheduledRoute');
const BookingRoute = require('./BookingRoute');
const AccountRoute = require('./AccountRoute');
const CinemaRoute = require('./CinemaRoute');
const OrderRoute = require('./OrderRoute');

const justname = (app, prefix, cors) => {
	app.use(`${prefix}/movies`, MoviesRoute); //cara 1 buat nambahin prefixnya , ini untuk manggil semua method yang ada di movies route
	app.use(`${prefix}/scheduled`, ScheduledRoute); //cara 1 buat nambahin prefixnya , ini untuk manggil semua method yang ada di movies route
	app.use(`${prefix}/booking`, BookingRoute); //cara 1 buat nambahin prefixnya , ini untuk manggil semua method yang ada di movies route
	app.use(`${prefix}/account`, AccountRoute); //cara 1 buat nambahin prefixnya , ini untuk manggil semua method yang ada di movies route
	app.use(`${prefix}/cinema`, CinemaRoute); //cara 1 buat nambahin prefixnya , ini untuk manggil semua method yang ada di movies route
	app.use(`${prefix}/order`, OrderRoute); //cara 1 buat nambahin prefixnya , ini untuk manggil semua method yang ada di movies route
};
module.exports = justname;

//Cara ke-2
// const express = require ('express')
// const app = express()
// const MoviesRoute = require('./MoviesRoute')

//     app.use('/movies',MoviesRoute)

// module.exports = app

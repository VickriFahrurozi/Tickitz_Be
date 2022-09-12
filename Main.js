/** @format */

require('dotenv').config();
const cors = require('cors');
const express = require('express');
const path = require('path');
const app = express();
app.use(cors());
port = process.env.PORT || 3001;
const mysql = require('mysql');

const bodyParser = require('body-parser');
const multer = require('multer');
const { application } = require('express');
const router1 = require('./route/indexroute.js'); //get fungsi yang ada di router/index
// const router = require('./route/MoviesRoute') Bisa Pakai ini tapi nanti jadinya satu satu , jadi dikumpulin semua di index.js route
const upload = multer();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use(express.static('uploads'));
// //Cara Ke-1
router1(app, '/api/v1', cors());
//Cara Ke-2
// app.use('/api/v1',router)
// app.use('/',router) ini kalau makenya satu satu , nanti app use nya banyak

{
	//   app.get('/movies',(req,res)=>{
	//   db.query(`SELECT movies.title , movies.cover ,
	//   category.movie_category,movies.release_date ,
	//   movies.description,movies.casts,
	//   movies.duration_hours,
	//   movies.duration_minute
	//   FROM movies
	//   INNER JOIN category ON movies.id=category.movie_id WHERE category.movie_category LIKE "%Adventure%"
	//   ORDER BY release_date DESC` ,(error,result)=>{
	//     if(error){
	//       res.status(400).send({
	//         message : "Data Tidak Tersedia",
	//         status : 400
	//       })
	//     }
	//     else{
	//     res.status(200).send({
	//       message :"Get From Movies Success",
	//       status : 200,
	//       list : result
	//     })
	//     }
	//   })
	// })
	// app.get('/movies/body',(req,res)=>{ //BY INPUT FORM BODY
	//   const {id} = req.body
	//   db.query(`Select * from movies WHERE id= ${id}` ,(error,result)=>{
	//     if(error){
	//       res.status(400).send({
	//         message : "Data Tidak Tersedia",
	//         status : 400
	//       })
	//     }
	//     else{
	//     res.status(200).send({
	//       message :"Get From Movies Body Success",
	//       status : 200,
	//       list : result
	//     })
	//     }
	//   })
	// })
	// app.get('/movies/params/:id',(req,res)=>{ //GET MOVIES BY ID PARAMS
	//   const id = req.params.id
	//   db.query(`Select * from movies WHERE id = ${id}` ,(error,result)=>{
	//     if(error){
	//       res.status(400).send({
	//         message : "Data ID Tidak Tersedia",
	//         status : 400
	//       })
	//     }
	//     else{
	//     res.status(200).send({
	//       message :"Get From Movies BY ID PARAMS Success",
	//       status : 200,
	//       list : result
	//     })
	//     }
	//   })
	// })
	// app.post('/movies',(req,res)=>{ //Input Data Manual
	//   db.query(`INSERT into movies (title,cover,release_date,director,description,casts,category,duration_hours,duration_minute) Values ("title","cove","2022-06-25","director","description","a,b,c","category",2,40)`,
	//   (err,result)=>{
	//     if(err){
	//       res.status(400).send({
	//         message :"Data Tidak Berhasil Di Input",
	//         status : 400
	//       })
	//     }
	//     else {
	//       res.status(200).send({
	//         status : 200 ,
	//         result
	//       })
	//     }
	//   })
	// })
	// app.post('/movies/:title/:cover/:release_date/:director/:description/:casts/:category/:duration_hours/:duration_minute',//Input Data Otomatis by PARAMS
	// (req,res)=>{
	//  const {
	//   title,cover,release_date,director,description,casts,category,duration_hours,duration_minute
	// } = req.params
	// let categorylist = category.split(",")
	//   db.query(`INSERT into movies (title,cover,release_date,director,description,casts,duration_hours,duration_minute)
	//   Values ("${title}","${cover}","${release_date}","${director}","${description}","${casts}","${duration_hours}","${duration_minute}")`,
	//   (err,result)=>{
	//     const lastid = result.insertId
	//     console.log(lastid)
	//     if(err){
	//       res.status(400).send({
	//         message :"Data Tidak Berhasil Di Input",
	//         status : 400
	//       })
	//     }
	//     else {
	//       for(let i=0  ; i<categorylist.length;i++){
	//         db.query(`insert into category (movie_id,movie_category) values("${lastid}","${categorylist[i]}")`)
	//         }
	//           res.status(200).send({
	//             message : "data movie dan category berhasil di input",
	//             status : 200 ,
	//             result
	//           })
	//     }
	//   })
	// })
	// app.post('/movies/FromBody',//Input Data Otomatis by Body
	// (req,res)=>{
	//  const {
	//   title,cover,release_date,director,description,casts,category,duration_hours,duration_minute
	// } = req.body
	//   db.query(`INSERT into movies (title,cover,release_date,director,description,casts,duration_hours,duration_minute)
	//   Values ("${title}","${cover}","${release_date}","${director}","${description}","${casts}","${duration_hours}","${duration_minute}")`,
	//   (err,result)=>{
	//     const lastid = result.insertId
	//     console.log(lastid)
	//     if(err){
	//       res.status(400).send({
	//         message :"Data Tidak Berhasil Di Inputt",
	//         status : 400
	//       })
	//     }
	//     else {
	//         db.query(`insert into category (movie_id,movie_category) values("${lastid}","${category}")`)
	//           res.status(200).send({
	//             message : "data movie dan category berhasil di input",
	//             status : 200 ,
	//             result
	//           })
	//     }
	//   })
	// }
	// )
	// app.delete('/movies',(req,res)=>{
	//   const {id} = req.body
	//   console.log(id)
	//   db.query(`delete from movies where id = "${id}" `,(err,result)=>{
	//     if(err){
	//       res.status(400).send({
	//         message : "Failed Deleted Data"
	//       })
	//     }
	//     else{
	//       res.status(200).send({
	//       message :"Delete Data Success",
	//       status : 200 ,
	//       result
	//       })
	//     }
	//   })
	// })
	// app.patch('/movies/:title/:id',(req,res)=>{ //BY PARAMS
	//   const title = req.params.title
	//   const id = req.params.id
	//   db.query(`update movies set title=${title} where id = ${id}`,(err,result)=>{
	//     if(err){
	//       res.status(400).send({
	//         message : "Gagal Update Data",
	//         status : 400
	//       })
	//     }
	//     else{
	//       res.status(200).send(({
	//         message :"Berhasil Update Data" ,
	//         status : 200,
	//         result
	//       }))
	//     }
	//   })
	// })
	// app.patch('/movies/',(req,res)=>
	// { //BY  Input Form Data
	// const {id,title} = req.body
	//   db.query(`update movies set title=${title} where id = ${id}`,(err,result)=>{
	//     if(err){
	//       res.status(400).send({
	//         message : "Gagal Update Dataa",
	//         status : 400
	//       })
	//     }
	//     else{
	//       res.status(200).send(({
	//         message :"Berhasil Update Data" ,
	//         status : 200,
	//         result
	//       }))
	//     }
	//   })
	// }
	// )
}
app.listen(port, () => {
	console.log(`Connected To Port ${port}`);
});

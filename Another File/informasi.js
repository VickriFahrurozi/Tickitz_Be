require('dotenv').config()
const express = require('express') 
const app =express()
port = 3000
const mysql = require('mysql')
const db = require('./db_connection')
//req = dari inputan user
// params = parameter yang di input oleh user
// query = 
//body
//res = keluaran server
const bodyParser = require('body-parser')
const multer = require ('multer')  // ini supaya bisa ngambil data dari form-data/multipart
const { application } = require('express')
const upload = multer()    // ini dibikin fungsi supaya ga error
//Cara Pertama Input pake bodrParser Json
app.use(bodyParser.json()) //buat data raw tipe json
app.use(bodyParser.urlencoded({extended:true})) //ini supaya bisa pake form data yang raw urlencoded
//pake query.data
app.get('/users/',(req,res)=>{ //req.query untuk nge get key dan value di postman nya , kalau req.query.sesuatu , itu cuma nge get valuenya aja , tapi key nya harus sama
  // console.log(req.query.judulfilm) //req.query buat get data inputan yang dimasukin ke postman kalau misalkan paramsnya ga di define
  if(req.query.judulfilm){
   res.send( datafromdb.find(item => item.title == req.query.judulfilm))
  }
  else {
    res.status(400).send({
      message : "Data Tidak Tersedia",
      status : 400
    })
  }
})
//pake params 
app.get('/users/:judulfilm',(req,res)=>{ //req.query untuk nge get key dan value di postman nya , kalau req.query.sesuatu , itu cuma nge get valuenya aja , tapi key nya harus sama
  // console.log(req.params.judulfilm) //req.query buat get data inputan yang dimasukin ke postman kalau misalkan paramsnya ga di define
  if(req.params.judulfilm){
   const hasil = datafromdb.find(item => item.title == req.params.judulfilm)
    if(hasil)
      {
        res.send(hasil)
      }
      else{
        res.status(404).send({
          message :"Tidak Ada Film dengan dengan judul yang anda cari",
          status : 404
        })
      }
  }
  else {
    res.status(404).send({
      message :"Tidak Ada Film dengan dengan judul yang anda cari",
      status : 404
    })
  }
})
app.post('/users',upload.array(),(req,res)=>{
  res.send({
    message : "Post Method Berhasil",
    data :req.body
  })
})  
 
console.log("asd")

app.listen(port,()=>{
    console.log(`Connected To Port ${port}`)
}) 
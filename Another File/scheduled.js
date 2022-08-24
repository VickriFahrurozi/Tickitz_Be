require('dotenv').config()
const express = require('express') 
const app =express()
port = 3000
const mysql = require('mysql')
const db = require('./db_connection')

const bodyParser = require('body-parser')
const multer = require ('multer')
const { application } = require('express')
const upload = multer()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.post('/scheduled')
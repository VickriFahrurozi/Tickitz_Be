# TICKITZ  [![TICKETING APP](https://awesome.re/badge-flat2.svg)](https://)
<h3 align="center">

![](https://capsule-render.vercel.app/api?type=waving&color=gradient&height=100&section=header)

<img src="https://camo.githubusercontent.com/5bbf8ca61ef5f92684489ace45ad6f45984fff87a621040c62b1fe31e3005ff9/687474703a2f2f692e696d6775722e636f6d2f436a34724d72532e676966" width="30">
  Welcome to Tickitz!
  <img src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif" width="28">
  
---
<div align="center">
# About :
  
---
## Getting Started

  

### Prerequisites

 Make sure that Node JS is installed on the computer.

* [Node Js](https://nodejs.org/)
* [expressjs](https://expressjs.com/en/starter/installing.html)

  

### Installation

  1. Clone this repos (Tickitz_Be)

```sh
git clone https://github.com/VickriFahrurozi/Tickitz_Be.git
```

2. Go To Folder Repo

```sh
code .
```

3. Install Module

```sh
npm install
```
  
4. Start website

```sh
npm start / nodemon
``` 
# Features Application
- [x] Movies.
- [x] Cinema.
- [x] Booking.
- [x] Account.
- [x] Scheduled.
- [x] Profile.
## Screenshots

  
<div  align="center">
<img  width="350"  src="https://github.com/teach-me-project/DailyNews_BE/blob/main/WhatsApp%20Image%202022-07-26%20at%2010.45.26.jpeg">


# Developer
 | profile | Name | Stack | Github | Linkedin |
 | ------- | ---- | ------ | ------ | -------- |
 | ![profile Vickri][img-Vickri] | Vickri Fahrurozi | Backend | [Vickri](https://github.com/VickriFahrurozi)|[Vickri](https://www.linkedin.com/in/vickri-fahrurozi) 
 
[img-Vickri]: https://avatars.githubusercontent.com/u/40363306?v=4

Postman Documentation : https://documenter.getpostman.com/view/21564590/UzBsKR4v
# End Point 
- GET Movies
  
Url : localhost:3001/api/v1/movies/
  
PARAMS = limit,page
  
BODY = id,title,release_date
  
Method = GET
  

- Search Movies 
  
Url : localhost:3001/api/v1/movies/search
  
PARAMS = limit ,page
  
BODY = id,title,release_date
  
Method = GET
  

- Get Now Showing Movies
  
Url : localhost:3001/api/v1/movies/nowshowing/
  
PARAMS = limit, page
  
BODY = id,title,release_date
  
Method = GET
  

- Get Upcoming Movies
  
Url : localhost:3001/api/v1/movies/upcoming/
  
PARAMS = limit ,page
  
BODY =id,title,release_date
  
Method = GET
  

- Get Movie By Id
  
Url : localhost:3001/api/v1/movies/id/
  
PARAMS = id
  
Method = GET
  

- Add New Movie
  
Url : localhost:3001/api/v1/movies
  
Headers : Token
  
Body : title,release_date,director,casts,description,category,duration_hours,duration_minute,showing_date_start,showing_date_end,cover
  
Method : POST

- Delete Movie By Id
  
Url : localhost:3001/api/v1/movies/
  
Headers : Token
  
Params : Id
  
Method : Delete

- Update Movie By Id
  
Url : localhost:3001/api/v1/movies/id
  
Headers : Token
  
Params : id
  
Body : title,release_date,director,casts,description,category,duration_hours,duration_minute,showing_date_start,showing_date_end,cover
  
Method : PATCH

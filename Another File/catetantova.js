const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const multer = require('multer')
const upload = multer()
//cara pertama kita input kita ada di json (di postman: body > Raw > Type = JSON)
app.use(bodyParser.json())
//www-url-form-encoded
app.use(bodyParser.urlencoded({ extended: true }))
//form-data (multer)
// app.post('/users', upload.array(), (req, res) => {}
const dataFromDB = [
    {
      "id": 1,
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz",
      "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
          "lat": "-37.3159",
          "lng": "81.1496"
        }
      },
      "phone": "1-770-736-8031 x56442",
      "website": "hildegard.org",
      "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
      }
    },
    {
      "id": 2,
      "name": "Ervin Howell",
      "username": "Antonette",
      "email": "Shanna@melissa.tv",
      "address": {
        "street": "Victor Plains",
        "suite": "Suite 879",
        "city": "Wisokyburgh",
        "zipcode": "90566-7771",
        "geo": {
          "lat": "-43.9509",
          "lng": "-34.4618"
        }
      },
      "phone": "010-692-6593 x09125",
      "website": "anastasia.net",
      "company": {
        "name": "Deckow-Crist",
        "catchPhrase": "Proactive didactic contingency",
        "bs": "synergize scalable supply-chains"
      }
    },
    {
      "id": 3,
      "name": "Clementine Bauch",
      "username": "Samantha",
      "email": "Nathan@yesenia.net",
      "address": {
        "street": "Douglas Extension",
        "suite": "Suite 847",
        "city": "McKenziehaven",
        "zipcode": "59590-4157",
        "geo": {
          "lat": "-68.6102",
          "lng": "-47.0653"
        }
      },
      "phone": "1-463-123-4447",
      "website": "ramiro.info",
      "company": {
        "name": "Romaguera-Jacobson",
        "catchPhrase": "Face to face bifurcated interface",
        "bs": "e-enable strategic applications"
      }
    },
    {
      "id": 4,
      "name": "Patricia Lebsack",
      "username": "Karianne",
      "email": "Julianne.OConner@kory.org",
      "address": {
        "street": "Hoeger Mall",
        "suite": "Apt. 692",
        "city": "South Elvis",
        "zipcode": "53919-4257",
        "geo": {
          "lat": "29.4572",
          "lng": "-164.2990"
        }
      },
      "phone": "493-170-9623 x156",
      "website": "kale.biz",
      "company": {
        "name": "Robel-Corkery",
        "catchPhrase": "Multi-tiered zero tolerance productivity",
        "bs": "transition cutting-edge web services"
      }
    },
    {
      "id": 5,
      "name": "Chelsey Dietrich",
      "username": "Kamren",
      "email": "Lucio_Hettinger@annie.ca",
      "address": {
        "street": "Skiles Walks",
        "suite": "Suite 351",
        "city": "Roscoeview",
        "zipcode": "33263",
        "geo": {
          "lat": "-31.8129",
          "lng": "62.5342"
        }
      },
      "phone": "(254)954-1289",
      "website": "demarco.info",
      "company": {
        "name": "Keebler LLC",
        "catchPhrase": "User-centric fault-tolerant solution",
        "bs": "revolutionize end-to-end systems"
      }
    },
    {
      "id": 6,
      "name": "Mrs. Dennis Schulist",
      "username": "Leopoldo_Corkery",
      "email": "Karley_Dach@jasper.info",
      "address": {
        "street": "Norberto Crossing",
        "suite": "Apt. 950",
        "city": "South Christy",
        "zipcode": "23505-1337",
        "geo": {
          "lat": "-71.4197",
          "lng": "71.7478"
        }
      },
      "phone": "1-477-935-8478 x6430",
      "website": "ola.org",
      "company": {
        "name": "Considine-Lockman",
        "catchPhrase": "Synchronised bottom-line interface",
        "bs": "e-enable innovative applications"
      }
    },
    {
      "id": 7,
      "name": "Kurtis Weissnat",
      "username": "Elwyn.Skiles",
      "email": "Telly.Hoeger@billy.biz",
      "address": {
        "street": "Rex Trail",
        "suite": "Suite 280",
        "city": "Howemouth",
        "zipcode": "58804-1099",
        "geo": {
          "lat": "24.8918",
          "lng": "21.8984"
        }
      },
      "phone": "210.067.6132",
      "website": "elvis.io",
      "company": {
        "name": "Johns Group",
        "catchPhrase": "Configurable multimedia task-force",
        "bs": "generate enterprise e-tailers"
      }
    },
    {
      "id": 8,
      "name": "Nicholas Runolfsdottir V",
      "username": "Maxime_Nienow",
      "email": "Sherwood@rosamond.me",
      "address": {
        "street": "Ellsworth Summit",
        "suite": "Suite 729",
        "city": "Aliyaview",
        "zipcode": "45169",
        "geo": {
          "lat": "-14.3990",
          "lng": "-120.7677"
        }
      },
      "phone": "586.493.6943 x140",
      "website": "jacynthe.com",
      "company": {
        "name": "Abernathy Group",
        "catchPhrase": "Implemented secondary concept",
        "bs": "e-enable extensible e-tailers"
      }
    },
    {
      "id": 9,
      "name": "Glenna Reichert",
      "username": "Delphine",
      "email": "Chaim_McDermott@dana.io",
      "address": {
        "street": "Dayna Park",
        "suite": "Suite 449",
        "city": "Bartholomebury",
        "zipcode": "76495-3109",
        "geo": {
          "lat": "24.6463",
          "lng": "-168.8889"
        }
      },
      "phone": "(775)976-6794 x41206",
      "website": "conrad.com",
      "company": {
        "name": "Yost and Sons",
        "catchPhrase": "Switchable contextually-based project",
        "bs": "aggregate real-time technologies"
      }
    },
    {
      "id": 10,
      "name": "Clementina DuBuque",
      "username": "Moriah.Stanton",
      "email": "Rey.Padberg@karina.biz",
      "address": {
        "street": "Kattie Turnpike",
        "suite": "Suite 198",
        "city": "Lebsackbury",
        "zipcode": "31428-2261",
        "geo": {
          "lat": "-38.2386",
          "lng": "57.2232"
        }
      },
      "phone": "024-648-3804",
      "website": "ambrose.net",
      "company": {
        "name": "Hoeger LLC",
        "catchPhrase": "Centralized empowering task-force",
        "bs": "target end-to-end models"
      }
    }
]
// req = inputan dari user 
//  body
//  params
//  query

// res = keluaran server
app.get('/users/:id', (req, res) => {
    if(req.params.id) {
        console.log(req.params.id)
        const filter = dataFromDB.find(item => item.id == req.params.id)
        if(filter) {
            res.send(filter)
        }else {
            res.status(404).send({
                message: "ID USER NOT FOUND",
                status: 404
            })
        }

    }else {
        res.status(400).send({
            message: "ID USER REQUIRED",
            status: 400
        })
    }
})
app.get('/users', (req, res) => {
    if(req.query.name) {
        res.send(dataFromDB.find(item => item.name === req.query.name))
    }else {
        res.send(dataFromDB)
    }
})

app.post('/users', (req, res) => {
    console.log(req.body)
    res.send({
        message: "Tambah User berhasil",
        data: req.body
    })
})
app.patch('/users/:id', (req, res) => {
    res.send()
})
app.put('/users/:id', (req, res) => {
    res.send()
})
app.delete('/users/:id', (req, res) => {
    res.send()
})

app.listen(port, () => {
  console.log(`Tickitz Backend listening on port ${port}`)
})



// movie = [
//     {
//       title : "Spider-Man : Home Coming",
//       category : [
//         "Adventure","Action","Sci-Fi"
//       ],
//       releasedate : 
//                 {
//         year : 2017,
//         month : "june",
//         day : 28
//       },
//       picture : "Spiderman.jpg",
//       director : "Jon Watss",
//       casts : ["Tom Holland","Michael Keaton","Robert Downey Jr"],
//       synopsis : "Thrilled by his experience with the Avengers, Peter returns home, where he lives with his Aunt May, under the watchful eye of his new mentor Tony Stark, Peter tries to fall back into his normal daily routine - distracted by thoughts of proving himself to be more than just your friendly neighborhood Spider-Man - but when the Vulture emerges as a new villain, everything that Peter holds most important will be threatened. ",
//       duration :[ {
//         hours : 2,
//         minutes : 13
//       }],
//       cinema : ["ebv.id","CineOne21","hiflix"] ,
//       price$ : 10,
//     },
//     {
//       title : "The Lion King",
//       category : [
//         "Adventure","Sci-Fi"
//       ],
//       releasedate : 
//                 {
//         year : 2019,
//         month : "july",
//         day : 17
//       },
//       picture : "LionKing.jpg",
//       director : "Jon Favreau",
//       casts : ["Beyonce","James Earl Jones","Donald Glover","Chiwetel Ejiofor","Billy Eichner"],
//       synopsis : "After the murder of his father, a young lion prince flees his kingdom only to learn the true meaning of responsibility and bravery.",
//       duration :[ {
//         hours : 1,
//         minutes : 58
//       }],
//       cinema : ["ebv.id","hiflix"] ,
//       price$ : 12,
//     },
//     {
//       title : "John Wick 3 : Parabellum",
//       category : [
//         "Action","Sci-Fi"
//       ],
//       releasedate : 
//                 {
//         year : 2019,
//         month : "May",
//         day : 9
//       },
//       picture : "JohnWick3.jpg",
//       director : "Chad Stahelski",
//       casts : ["Keane Reeves","Halle Berry","Laurence Fishburne","Mark Dacascos"],
//       synopsis : "John Wick makes his way through Manhattan before he is labeled for the unauthorized killing of High Table crime lord Santino D'Antonio on the grounds of the New York Continental Hotel",
//       duration :[ {
//         hours : 2,
//         minutes : 11
//       }],
//       cinema : ["ebv.id","CineOne21"] ,
//       price$ : 15,
//     },
//     {
//       title : "Black Widow",
//       category : [
//         "Action","Adventure","Sci-Fi"
//       ],
//       releasedate : 
//                 {
//         year : 2021,
//         month : "June",
//         day : 29
//       },
//       picture : "BlackWidow.jpg",
//       director : "Cate Shortland",
//       casts : ["Scarlett Johansson","Florence Pugh","David Harbour","O-T Fagbenle"],
//       synopsis : "In 1995, super soldier Alexei Shostakov and Black Widow Melina Vostokoff work as Russian undercover agents, posing as a family in Ohio with Natasha Romanoff and Yelena Belova as their daughters",
//       duration :[ {
//         hours : 2,
//         minutes : 14
//       }],
//       cinema : ["CineOne21"] ,
//       price$ : 11,
//     },
//     {
//       title : "Black Widow",
//       category : [
//       "Adventure","Comedy","Family"
//       ],
//       releasedate : 
//                 {
//         year : 2020,
//         month : "October",
//         day : 22
//       },
//       picture : "TheWitches.jpg",
//       director : "Robert Zemeckis",
//       casts : ["Anne Hathaway","Octavia Spencer","Stanley Tucci"],
//       synopsis : "In 1968, a young boy named Charlie Hansen goes to live with his grandmother, Agatha in Demopolis, Alabama after a car accident kills his parents in Chicago. Gradually, Charlie is cheered up by Agatha who buys him a pet mouse whom he names Daisy",
//       duration :[ {
//         hours : 1,
//         minutes : 44
//       }],
//       cinema : ["ebv.id","CineOne21","hiflix"] ,
//       price$ : 14,
//     },
//     {
//       title : "Tenet",
//       category : [
//       "Action","Sci-Fi"
//       ],
//       releasedate : 
//                 {
//         year : 2020,
//         month : "August",
//         day : 26
//       },
//       picture : "Tenet.jpg",
//       director : "Christopher Nolan",
//       casts : ["John David Washington","Robert Pattinson","Elizabeth Debicki","Dimple Kapadia"],
//       synopsis : "A CIA operative, the Protagonist, participates in an extraction at the Kyiv Opera House. His team retrieves an artifact but he is captured, tortured by mercenaries, and ultimately consumes a suicide pill.",
//       duration :[ {
//         hours : 2,
//         minutes : 30
//       }],
//       cinema : ["ebv.id","CineOne21","hiflix"] ,
//       price$ : 10,
//     }
//         ],
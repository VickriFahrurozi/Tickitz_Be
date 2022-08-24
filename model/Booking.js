//model = tempat dimana kita meletakkan fungsi/query/isinya
const db = require('../helper/db_connection')
module.exports={
    getAllBooking : (req,res) => { //get All Booking With Join
        return new Promise ((resolve,reject)=>{
            db.query(`SELECT * from booking` ,
            (error,result)=>{
                if(error){
                          reject({
                            message : "Data Tidak Tersedia",
                            status : 400
                          })
              }
                else{
                     resolve({
                            message :"Get From Booking Success",
                            status : 200,
                            list : result
                     })
              }
            })
        })
    },
    getAllBookingById : (req,res) => { //get All Booking With ID
        return new Promise ((resolve,reject)=>{
            const{booking_id} = req.body 
            db.query(`SELECT * from booking where booking_id= ${booking_id}` ,
            (error,result)=>{
                if(error){
                          reject({
                            message : "Data Tidak Tersedia",
                            status : 400
                          })
              }
                else{
                     resolve({
                            message :"Get From Booking BY ID Success",
                            status : 200,
                            list : result
                     })
              }
            })
        })
    },
    addNewBookingByFormBody : (req,res) =>{ //add New Booking From Body
        return new Promise((resolve,reject)=>{
            const {
                    booking_code, scheduled_id, profile_id, movie_id, movie_title, cinema_id, 
                    cinema_name,cinema_city,cinema_address,studio_id,studio_price, booking_date
                    ,payment_status,seat_booked,booking_status
           } = req.body 
             db.query(`INSERT booking(booking_code, scheduled_id, profile_id, movie_id, movie_title, cinema_id, 
                       cinema_name,cinema_city,cinema_address,studio_id,studio_price, booking_date
                       ,payment_status,seat_booked,booking_status)
                       Values ("${booking_code}","${scheduled_id}","${profile_id}","${movie_id}","${movie_title}",
                       "${cinema_id}","${cinema_name}","${cinema_city}","${cinema_address}","${studio_id}",
                       "${studio_price}","${booking_date}","${payment_status}","${seat_booked}","${booking_status}")`,
             (err,result)=>{
               if(err){
                reject({
                    message :"Data Tidak Berhasil Di Inputt",
                    status : 400
                })
               }
               else {
                resolve({
                    message : "data Booking berhasil di input",
                    status : 200 ,
                    result
                })  
               }
             })
        })
        
    },
    updatedBookingById : (req,res)=>{//BY  Input Form Data
        return new Promise((resolve,reject)=>{
            const {booking_id,movie_title} = req.body
            db.query(`update booking set movie_title=${movie_title} where booking_id = ${booking_id}`,
            (err,result)=>{
                if(err){
                    reject({
                        message : "Gagal Update Dataa",
                        status : 400
                    })  
                    }
                else{
                    resolve({
                        message :"Berhasil Update Data" ,
                        status : 200,
                        result
                    }) 
                    }
                })
        }) 
    },
    deleteBookingById : (req,res) =>{
       return new Promise ((resolve,reject)=>{
           const {booking_id} = req.body
           db.query(`delete from booking where booking_id = "${booking_id}" `,
           (err,result)=>{
             if(err){
                reject ({
                        message : "Failed Deleted Data"
                })
             }
             else{
                resolve({
                        message :"Delete Data Success",
                        status : 200 ,
                        result
                })
             }
           })
       })
    }
}
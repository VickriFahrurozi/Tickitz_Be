//controller : tempat dimana kita menghubungkan antara client dan database
const {getAllScheduled,getAllScheduledById,updatedScheduledById,addNewScheduledByFormBody,deleteScheduledById} = require("../model/Scheduled")

module.exports={ 
    getAllScheduled : async (req,res) => { //get All Movies With Join
        try {
            const result = await getAllScheduled(req,res)
            res.status(200).send(result)
        } catch (error) {
            res.status(400).send({message:"Masih Ada Error  ",error})
        }
    },
    getAllScheduledById : async (req,res) => { //get All Movies With Join
        try {
            const result = await getAllScheduledById(req,res)
            res.status(200).send(result)
        } catch (error) {
            res.status(400).send({message:"Masih Ada Error  ",error})
        }
    },
    addNewScheduledByFormBody :async (req,res) =>{ //add New Movies From Body
        try {
            const result = await addNewScheduledByFormBody(req,res)
            res.status(200).send(result)
        } catch (error) {
            res.status(400).send(error)
        }
    },
    updatedScheduledById : async(req,res)=>{//BY  Input Form Data
        try {
            const result = await updatedScheduledById(req,res)
            res.status(200).send(result)
        } catch (error) {
            res.status(400).send(error)
        }
    },
    deleteScheduledById :async(req,res) =>{
        try {
            const result = await deleteScheduledById(req,res)
            res.status(200).send(result)
        } catch (error) {
            res.status(400).send(error)
        }
    }
}
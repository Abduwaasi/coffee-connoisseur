import {   getCoffeeStoreByFilter } from "../../libs/airtable"
const getCoffeeStoreById = async(req,res)=>{
    const {id}  = req.query
   try {
    if(id){
        const record = await getCoffeeStoreByFilter(id)
        if(record.length !==0){
            res.status(200).json(record)
        }else{
            res.status(400).json({message:`coffee store with id of ${id} not found`})
        }
       }else{
        res.status(400).json({message:`coffee store with id of ${id} not found`})
       }
   } catch (error) {
       console.log("An error occured while trying to fetch the coffee store", error)
       res.status(500).json({message:"An error occured",error})
   }
}

export default getCoffeeStoreById
import { getCoffeeStoreByFilter, getMinifiedRecords,table } from "../../libs/airtable"


const createCoffeeStores = async (req, res)=>{
    if(req.method==="POST"){
        const {fsq_id,name,location,neighborhood,rating,imgUrl} = req.body
        try {
            if(fsq_id){
                const record = await getCoffeeStoreByFilter(fsq_id)
                if(record.length !==0){
                    res.status(200).json(record)
                }
                else{
                    if(name){
                        const createRecord = await table.create([
                            {  
                                fields:{ fsq_id,name,location,neighborhood:neighborhood[0],rating,imgUrl }
                            }
                        ])
                        const createField= getMinifiedRecords(createRecord)
                        res.status(200).send(createField)
                        // res.status(200).json({message:"create new coffee store",createField})
                    
                }else{
                        res.status(500).json({message:"id or name is required"})
                    }
                 
            }
            }else{
                res.status(500).json({message:"id is required"}) 
            }
            
            
        } catch (error){
            res.status(500).json({message:"Error finding or creating a store store",error})
        }
        
    }
}
export default createCoffeeStores
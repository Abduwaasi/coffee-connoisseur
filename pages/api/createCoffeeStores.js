import { getMinifiedRecords,table } from "../../libs/airtable"


const createCoffeeStores = async (req, res)=>{
    const {id,name,address,neighborhood,rating,imgUrl} = req.body
 
    if(req.method==="POST"){
        try {
            if(id){
                const findCoffeeStoreRecords = await table.select({
                    filterByFormula:`id=${id}`
                }).firstPage()
                if(findCoffeeStoreRecords.length !== 0){
                    const fieldRecord= getMinifiedRecords(findCoffeeStoreRecords)
                    res.status(200).json(fieldRecord)
                }else{
                    if(name){
                        const createRecord = await table.create([
                            {
                                fields:{ id,name,address,neighborhood,rating,imgUrl }
                            }
                        ])
                        const createField= getMinifiedRecords(createRecord)
                        res.status(200).send(createField)
                        res.status(200).json({message:"create new coffee store"})
                    
                }else{
                        res.status(400).json({message:"id or name is requires"})
                    }
                 
            }
            }else{
                res.status(400).json({message:"id is requires"}) 
            }
            
            
        } catch (error) {
            res.status(500).json({message:"Error finding or creating a store store",error})
        }
        
    }
}
export default createCoffeeStores
import { getCoffeeStoreByFilter, getMinifiedRecords, table } from "../../libs/airtable"

const upVoteCoffeeStoreById = async(req,res)=>{
    if(req.method === "PUT"){
        const {fsq_id} = req.body
        try {
            if(fsq_id){
                const records = await getCoffeeStoreByFilter(fsq_id)
                if(records.length !==0){
                    const record = records[0]
                    const calculateRating= parseInt(record.rating + 1)

                    // Update a Record
                    const updateRecord = await table.update([
                        {
                            id:record.id,
                            fields:{
                                rating:calculateRating
                            }
                        }
                    ])
                    if(updateRecord){
                        const minifiedRecord = getMinifiedRecords(updateRecord)
                        res.status(200).json(minifiedRecord)
                    }
                }else{
                    res.status(404).json({message:"store not found"})
                }
            }
        } catch (error) {
            res.status(500).json({message:"Error while attempting to update coffee store",error})
        }
    }

}

export default upVoteCoffeeStoreById
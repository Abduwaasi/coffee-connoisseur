import { fetchCoffeeStores } from "../../libs/fetchCoffeeStores"
const getCoffeeStoresByLocation = async (req, res)=>{ 
    
    try {
        const {latLong,limit} = req.query
        const response = await fetchCoffeeStores(latLong,limit)
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json("Oh no. something went wrong",error)
    }

}

export default getCoffeeStoresByLocation
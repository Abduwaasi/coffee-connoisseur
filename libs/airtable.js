const Airtable = require('airtable');
const base = new Airtable({apiKey: process.env.NEXT_PUBLIC_API_KEY}).base(process.env.NEXT_PUBLIC_BASE_KEY);

const table = base('coffee-stores')
const getMinifiedRecord =(record)=>{
    return{
        id:record.id,
        ...record.fields
    }
}
const getMinifiedRecords=(records)=>{
   return records.map(record=> getMinifiedRecord(record))
}

const getCoffeeStoreByFilter = async(fsq_id)=>{
    const findCoffeeStoreRecords = await table.select({
        filterByFormula:`fsq_id="${fsq_id}"`
    }).firstPage()
        return getMinifiedRecords(findCoffeeStoreRecords)

}
export {table,getMinifiedRecords,getCoffeeStoreByFilter}
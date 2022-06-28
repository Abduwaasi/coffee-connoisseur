import { createApi } from 'unsplash-js';

// on your node server
const unsplashApi = createApi({
  accessKey: process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY,
  //...other fetch options
});
const getListOfCoffeePhoto = async ()=>{
    const {response:{results}} = await unsplashApi.search.getPhotos({
        query: 'coffee shop',
        perPage: 40,
      });
      const photoResponse = results.map(item=>item.urls.small)
      return photoResponse
}
export const fetchCoffeeStores= async(latLong="43.65267326999575,-79.39545615725015",limit)=>{
    const photos = await getListOfCoffeePhoto()
    // console.log("Photo", photos)
    const getCoffeeUrl=()=>{
        const baseUrl= "https://api.foursquare.com/v3/places/search"
        return `${baseUrl}?ll=${latLong}&query=coffee&radius=100000&limit=${limit}`
    }
    const options ={
        method: 'GET',
        headers: {
          Accept: 'application/json',
          Authorization: process.env.NEXT_PUBLIC_FOURSQUARE_API_KEY
        }
      }
      try {
        const response = await fetch(getCoffeeUrl(),options)
        const data = await response.json()
        // console.log(data)
        return data.results.map((result,index)=>{
         return{
           fsq_id:result.fsq_id,
             name:result.name || "Abdulwaasi coffee",
             location:result.location.address || "Ilorin",
             neighborhood:result.location.neighborhood || ["Osogbo"],
             imgUrl:photos[index]
         }
        })
      } catch (error) {
          console.log(error)
      }
 
      
}
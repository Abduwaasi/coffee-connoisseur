import { useEffect,useState} from "react";
import { Box, Heading,Grid, Text } from "@chakra-ui/react";
import Header from "../components/header";
import Head from "next/head"
import Heading1 from "../components/Heading1";

import CoffeeCard from "../components/coffeeCard";

import { fetchCoffeeStores } from "../libs/fetchCoffeeStores";

import useTrackLocation from "../hooks/use-track-location";
import { ACTION_TYPES,useGlobalContext } from "../store/store-context";



const Home = (props)=>{
  const {errorMessage,isLoading,handleTrackLocation} = useTrackLocation()
  const [errors, setErrors] = useState(null)

  const{state:{latLong,coffeeStores},dispatch} =useGlobalContext()
  const styles = {
    container:{
      width:"100%",
      height:"100%",
      overFlowX:"hidden",
      py:"5rem",
      
    },
 
  }
  useEffect(async() => {
    if(latLong){
      try {
        const response= await fetch(`api/getCoffeeStoresByLocation?latLong=${latLong}&limit=30`)
        const coffeeStores = await response.json()
       
        dispatch({
          type:ACTION_TYPES.SET_COFFEE_STORE,
          payload:{coffeeStores}
        })
        setErrors("")
        
      } catch (error) {
        setErrors(errorMessage)
        console.log({"Error":error})
      }
  
    }
     }, [latLong])
// console.log("coffee stores",coffeeStores)
  return <>
  
  <Head>
  <title>Coffee Connoisseur</title>
  </Head>
  
  <Box as="main"sx={styles.container} >
    <Header errorMessage={errorMessage} latLong={latLong} isLoading={isLoading} handleTrackLocation={handleTrackLocation}/>
    {errorMessage&&<Text>Something went wrong: {errorMessage}</Text>}
    { coffeeStores.length>0&&<>
    <Heading1 heading="Coffee stores near me"/>
    <Grid templateColumns={["repeat(1,1fr)","repeat(1,1fr)",,"repeat(3,1fr)"]} gap="2rem">
      {coffeeStores.map((coffee)=>(
        <CoffeeCard
        key={coffee.fsq_id}
        coffeeName={coffee.name}
        href={`/coffee-store-near-me/${coffee.fsq_id}`}
        imgUrl={coffee.imgUrl || "https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y29mZmVlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"}
        />
      ))}
     
    </Grid>
    </>
    }

    {props.data.length > 0 && <>
        
    <Heading1 heading="Osogbo store"/>
    <Grid templateColumns={["repeat(1,1fr)","repeat(1,1fr)",,"repeat(3,1fr)"]} gap="2rem">
      {props.data.map((coffee)=>(
        <CoffeeCard
        key={coffee.fsq_id}
        coffeeName={coffee.name}
        href={`/coffee-store/${coffee.fsq_id}`}
        imgUrl={coffee.imgUrl || "https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y29mZmVlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"}
        />
      ))}
     
    </Grid>
    </>}
  </Box> 
  </>
  
}

export async function getStaticProps(context){
const data = await fetchCoffeeStores('43.65267326999575,-79.39545615725015',6)
// console.log("DATA",data)  
return {
    props:{
      data:data
    }
  }
}

export default Home


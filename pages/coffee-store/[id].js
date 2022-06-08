import {Box,Text,Flex,Heading,Icon, Button} from "@chakra-ui/react"
import {useRouter} from "next/router"
import Link from "next/link"
import Head from "next/head"
// import Image  from "next/image"
import {AiOutlineArrowLeft} from "react-icons/ai"
import {GoLocation} from "react-icons/go"
import {MdOutlineInvertColors} from "react-icons/md"
import {FiStar} from "react-icons/fi"
// import coffeeStoreData from "../../data/data.json"
import CustomImage from "../../components/CustomImage"
import Heading1 from "../../components/Heading1"

import { fetchCoffeeStores } from "../../libs/fetchCoffeeStores"

import { useGlobalContext } from "../../store/store-context"

const DynamicStore=({unitCoffee})=>{
    const {name,location,imgUrl,neighborhood}=unitCoffee
    const {state:{latLong,coffeeStores}}=useGlobalContext()
    const handleUpvote=()=>{
        console.log("handle upvote !")
    }
    const router = useRouter()
    if(router.isFallback){
        return  <Text>Loading...</Text>
    }
    return <>
    <Head>
        <title>{name}</title>
    </Head>
     <Box as="main" py="5rem">
         
        <Flex sx={styles.container}>
        <Flex sx={styles.col1}>
           <Link href="/">
                <Flex  align="center" my="1.2rem" gap="0.4rem" cursor="pointer">
                  <Icon as={AiOutlineArrowLeft}/>
                  <Text>Back to home page</Text>
                </Flex>
            </Link>
          <Heading1 heading={name}/>
          <CustomImage src={imgUrl || "https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y29mZmVlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"} alt={`${name} image`} width={500} height={400} borderRadius="12px"/>
        </Flex>
        <Flex sx={styles.col2}>
        <Box sx={styles.col2.glass}>
         <Flex sx={styles.col2.glass.flex}>
         <Icon as ={GoLocation}/>
         <Text sx={styles.col2.glass.text}>{location}</Text>
         </Flex>
         {neighborhood.length >0&& <Flex sx={styles.col2.glass.flex}>
         <Icon as ={MdOutlineInvertColors}/>
          {neighborhood.map((item,index)=>(<Text  key ={index} sx={styles.col2.glass.text}>{item}</Text>))    
          }
         
         </Flex>}
        
         <Flex sx={styles.col2.glass.flex}>
         <Icon as ={FiStar}/>
         <Text sx={styles.col2.glass.text}>1</Text>
         </Flex>
         <Flex mt="1rem">
         <Button colorScheme="blue" onClick={handleUpvote}> Up vote !</Button>
         </Flex>
        </Box> 
        </Flex>
        
    </Flex>
    </Box>
    </>
}

const styles = {
 
    container:{
        justifyContent:["flex-start",,"space-between"],
        minHeight:"100vh",
        flexDir:["column",,,"row"],
        alignItems:["flex-start",,,"center"],
        gap:"3rem",

        
    },
    col1:{
        flexDir:"column",
        flex:1
    },
    col2:{
        flex:1,
        glass:{
            background: 'hsla( 0, 0%, 100%,0.6 )',
            boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
            backdropFilter: "blur( 10px )",
            borderRadius: "10px",
            width:["100%",,,"80%"],
            p:"1rem 1.4rem",
            transition:"all .3s ease",
            _hover:{
                background: 'hsla( 0, 0%, 100%,0.3 )'
            },
            flex:{
                alignItems:'center',
                gap:"0.4rem"
            },
            text:{
               fontWeight:"500",
               fontSize:"1.2rem",
               mb:"0.4rem"
            }
        }
       
        
    }
}
export async function getStaticProps({params}){
  const coffeeStores = await fetchCoffeeStores('43.65267326999575,-79.39545615725015',6)
  const unitCoffeeStore = coffeeStores.find(coffeeStore=>coffeeStore.fsq_id.toString()===params.id)
  console.log("UNIT",unitCoffeeStore)
  return {
      props:{
          unitCoffee:unitCoffeeStore?unitCoffeeStore:{} 
      }
  }
}

export async function getStaticPaths(){
    const coffeeStores = await fetchCoffeeStores('43.65267326999575,-79.39545615725015',6)
    const paths = coffeeStores.map(item=>{
        return {params:{id:item.fsq_id.toString()}}
    })
    return{
        paths,
        fallback:true
    }
}

export default DynamicStore
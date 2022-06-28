import {Box,Text,Flex,Heading,Icon, Button} from "@chakra-ui/react"
import {useRouter} from "next/router"
import Link from "next/link"
import Head from "next/head"
import {AiOutlineArrowLeft} from "react-icons/ai"
import {GoLocation} from "react-icons/go"
import {MdOutlineInvertColors} from "react-icons/md"
import {FiStar} from "react-icons/fi"
import CustomImage from "../../components/CustomImage"
import Heading1 from "../../components/Heading1"



import { useGlobalContext } from "../../store/store-context"

const NearMe=()=>{
    
    const {state:{latLong,coffeeStores}}=useGlobalContext()
    const handleUpvote=()=>{
        console.log("handle upvote !")
    }
 
  
    return <>
        </>
}

export default NearMe
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
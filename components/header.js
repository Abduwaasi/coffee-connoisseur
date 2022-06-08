import {Text,Heading,Flex,Box,Button} from "@chakra-ui/react"
import Image from "next/image"
import coffeeImage from "../public/images/coffeeImage.png"

import useTrackLocation from "../hooks/use-track-location"


const Header = ()=>{
    
    const {handleTrackLocation,isLoading} = useTrackLocation()
    const handleClick=()=>{
        handleTrackLocation()

    }
    const styles ={
        container:{
           flexDirection:["column","row"],
           justifyContent:["space-between"],
           alignItems:"center"
        },
    
        heading:{
            fontSize:['3rem','3.5rem','4rem','4.5rem'],
            fontWeight:"700",
            letterSpacing:"-1.5px",
            lineHeight:"3rem",
            color:"#fff"
        },
        text:{
            fontSize:['1.2rem','1.5rem'],
            fontWeight:"300",
            letterSpacing:"-1.5px",
            lineHeight:"2rem",
            color:"#fff",
            opacity:"0.9",
            my:"1rem"
        },
        button:{
            px:"2rem",
            py:"1rem",
            bg:"blue",
            fontSize:"1rem",
            letterSpacing:"1px",
            color:"#fff",
            transition:"all .3s ease",
            _hover:{
                transform:"scale(1.02)",
            }

        },
        imgBox:{
            mt:['2rem',0]
        }
    }
    return <Flex sx={styles.container}>
        <Box>

            <Heading as="h1" sx={styles.heading}>Coffee <span style={{color:"blue"}}>Connoisseur</span></Heading>
            <Text as="p" sx={styles.text}>Discover your local coffee shop</Text>
            <Button sx={styles.button} onClick={handleClick}>{isLoading ?"Loading...":"View stores nearby"}</Button>
        </Box>
        <Box sx={styles.imgBox}>
            <Image src={coffeeImage} alt="coffee illustration" width={700} height={500}/>
        </Box>
    </Flex>
}


export default Header
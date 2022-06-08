import {Text,Box,Flex,Icon} from "@chakra-ui/react"
import Link from "next/link"
import Image from "next/image"
import {AiOutlineArrowRight} from "react-icons/ai"


const CoffeeCard=({href, coffeeName,imgUrl,})=>{

const styles ={
    glassContainer:{
        background: 'hsla( 0, 0%, 100%,0.2 )',
        boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
        backdropFilter: "blur( 10px )",
        borderRadius: "10px",
        border: "1px solid rgba( 255, 255, 255, 0.18 )",
        px:"2rem",
        py:"1rem",
        trainsition:"all .3s ease",
        _hover:{
            background: 'hsla( 0, 0%, 100%,0.5 )',  
        }
        },
        textWrapper:{
         alignItems:'center',
         gap:"0.5rem"
        },
        text:{
            color:"#373B64",
            fontSize:"1.3rem",
            fontWeight:"600",
            lineHeight:"1rem",
            letterSpacing:"1px"
        },
        imgWrapper:{
            mt:"1.5rem",
            // borderRadius: "12px", 
            overflow:"hidden"      
        }
    }
    return <Link href={href}>
       <Box as="a" sx={styles.glassContainer}>
           <Flex sx={styles.textWrapper}>
            <Text sx={styles.text}>{coffeeName}</Text>
            <Icon as={AiOutlineArrowRight}/>
           </Flex>
           <Box sx={styles.imgWrapper}>
               <Image src={imgUrl} width={400} height={260} alt="coffee image" objectFit="cover" className="cardImage"/>
           </Box>
       </Box>
    </Link>
}
export default CoffeeCard

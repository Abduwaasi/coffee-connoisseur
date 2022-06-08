import {Heading} from "@chakra-ui/react"

const Heading1 = (props)=>{
    const styles={
       heading:{
           fontSize:['2.25rem',"2.5rem"],
           fontWeight:"700",
           letterSpacing:"1px",
           lineHeight:"3rem",
           color:"rgba(255,255,255,0.9)",
           my:"1rem",
          
       }
    }

  return <Heading sx={styles.heading}>{props.heading}</Heading>
}

export default Heading1
   
   

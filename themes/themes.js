import {extendTheme} from "@chakra-ui/react"
import Image from "../public/images/mesh.png"


const theme = {
    styles:{
        global:{
            html:{
                boxSizing:"border-box",
                padding:0,
                margin:0,
            },
            body:{
                backgroundImage: "url(/images/mesh.png)",
                width:"100vw",
                height:"100%",
                maxWidth: "1400px",
                px:["1rem","2rem",,"5rem"],
                mx:"auto",
                fontFamily: 'Fredoka',
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
            },
           
        }
    }
}

const themes = extendTheme(theme)
export default  themes
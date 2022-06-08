import {ChakraProvider} from "@chakra-ui/react"

import themes from "../themes/themes"
import "../styles/globals.css"
import AppProvider from "../store/store-context"
 

function MyApp({ Component, pageProps }) {
// console.log(themes)
  return <AppProvider>
          <ChakraProvider theme={themes}>
            <Component {...pageProps} />
          </ChakraProvider>
       </AppProvider>
  
}

export default MyApp

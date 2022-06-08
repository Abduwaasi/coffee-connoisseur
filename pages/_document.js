import Document,{Html,Head,Main,NextScript} from "next/document"

class AppDocument extends Document{
  
    render() {
        return (
          <Html>
            <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
            <link href="https://fonts.googleapis.com/css2?family=Fredoka:wght@300;400;500;600;700&display=swap" rel="stylesheet"/>
           
            </Head>
            <body>
              <Main />
              <NextScript />
            </body>
          </Html>
        )
      }
}

export default AppDocument

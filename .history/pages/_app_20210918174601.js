import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";

function MyApp({ Component, pageProps }) {
  return(
  <ChakraProvider>
    
  </ChakraProvider>
  <Component {...pageProps} />
    )
}

export default MyApp;

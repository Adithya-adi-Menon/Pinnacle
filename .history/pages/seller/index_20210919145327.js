import Head from "next/head";
import { VStack } from "@chakra-ui/layout";
import Sidebar from "../../components/Sidebar/Sidebar";
import { Flex, Text, IconButton } from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";
import Footer from "../../components/Footer";
import { Spacer, Box, Button, Heading } from "@chakra-ui/react";
import Buy1 from "../../components/BuySearch";
import Seller1 from "../../components/Seller1";

export default function SellerScreen() {
  return (
    <div>
      <Head>
        <title>Pinnacle</title>
        <meta name="description" content="An escrow system build on Stellar" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex position="fixed" w="100%" h="100%">
        <Sidebar />
      </Flex>

      <VStack
        w="100%"
        background="linear-gradient(-28deg, rgba(209, 194, 244, 1) 2%, rgba(209, 194, 244, 1) 35%, rgba(221, 217, 232, 1) 51%, rgba(221, 217, 232, 1) 68%, rgba(209, 194, 244, 1) 82%)"
        // backgroundImage={useColorModeValue('url(/images/v2/lightbg.png)', 'url(/images/v2/darkbg.png)')}
        backgroundSize="cover"
        backgroundAttachment="fixed"
        backgroundRepeat="no-repeat"
      >
        <Seller1 />
        <Footer />
      </VStack>
    </div>
  );
}

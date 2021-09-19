import Head from "next/head";
import { VStack } from "@chakra-ui/layout";
import Sidebar from "../components/Sidebar/Sidebar";
import { Flex, Text, IconButton } from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Pinnacle</title>
        <meta name="description" content="An escrow system build on Stellar" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <VStack
        w="100%"
        background="linear-gradient(28deg, rgba(108, 131, 255, 0.3) 2%, rgba(221, 217, 232, 1) 31%, rgba(37,39,55,1) 51%, rgba(39,34,47,1) 68%, rgba(220, 23, 155, 0.2) 82%)"
        // backgroundImage={useColorModeValue('url(/images/v2/lightbg.png)', 'url(/images/v2/darkbg.png)')}
        backgroundSize="cover"
        backgroundAttachment="fixed"
        backgroundRepeat="no-repeat"
      >
        <Flex w="100%" h="100%">
          <Sidebar />
          <Flex
            pos="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
          >
            <Text>Click the to resize the vertical navigation bar.</Text>
          </Flex>
        </Flex>
      </VStack>
    </div>
  );
}

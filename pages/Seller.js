import Head from "next/head";
import { VStack } from "@chakra-ui/layout";
import Sidebar from "../components/Sidebar/Sidebar";
import { Flex, Text, IconButton } from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";
import { Heading } from "@chakra-ui/react";
import { Box } from "@chakra-ui/layout";
import { Input } from "@chakra-ui/react"
import { Stack  } from "@chakra-ui/layout";
import { Spacer } from "@chakra-ui/react";
import { Square } from "@chakra-ui/layout";
import { Center } from "@chakra-ui/layout";
export default function Seller() {
  return (
    <div>
      {/* <Head>
        <title>Pinnacle</title>
        <meta name="description" content="An escrow system build on Stellar" />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}

      <VStack
        w="100%"
        background="linear-gradient(28deg, rgba(209, 194, 244, 1) 2%, rgba(209, 194, 244, 1) 31%, rgba(221, 217, 232, 1) 51%, rgba(221, 217, 232, 1) 68%, rgba(209, 194, 244, 1) 82%)"
        // backgroundImage={useColorModeValue('url(/images/v2/lightbg.png)', 'url(/images/v2/darkbg.png)')}
        backgroundSize="cover"
        backgroundAttachment="fixed"
        backgroundRepeat="no-repeat"
      >
        <Flex w="100%" h="100%">
          <Sidebar />
          <Flex 
          pos="absolute"
          top="15%"
          left="35%"
          transform="translate(-50%, -50%)" >

         
          <Box maxW="35rem">
  <Heading mb={4}>Seller</Heading>
  <Text fontSize="xl">
  Start selling your product/ commodity/ NFT/ in just a few clicks.
  </Text>
  
</Box>

</Flex>
<Box maxW="35rem">
<Flex color="white">
  <Center w="100px" bg="green.500">
    <Text>Box 1</Text>
  </Center>
  <Square bg="blue.500" size="150px">
    <Text>Box 2</Text>
  </Square>
  <Box flex="1" bg="tomato">
    <Text>Box 3</Text>
  </Box>
</Flex>
</Box>
    </Flex>
      </VStack>
    </div>
  );
}

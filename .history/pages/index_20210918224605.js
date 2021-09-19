import Head from "next/head";
import { VStack } from "@chakra-ui/layout";
import Sidebar from "../components/Sidebar/Sidebar";
import { Flex, Text, IconButton } from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";
import Hero from "../components/Hero";
import Hero2 from "../components/Hero2";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Pinnacle</title>
        <meta name="description" content="An escrow system build on Stellar" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex w="100%" h="100%">

      <Sidebar />
      <VStack
        w="100%"
        background="linear-gradient(28deg, rgba(209, 194, 244, 1) 2%, rgba(209, 194, 244, 1) 25%, rgba(221, 217, 232, 1) 51%, rgba(221, 217, 232, 1) 68%, rgba(209, 194, 244, 1) 82%)"
        // backgroundImage={useColorModeValue('url(/images/v2/lightbg.png)', 'url(/images/v2/darkbg.png)')}
        backgroundSize="cover"
        backgroundAttachment="fixed"
        backgroundRepeat="no-repeat"
      >
        <Flex w="100%" h="100%">
          <Hero />
          <Hero />
      </VStack>
    </div>
  );
}

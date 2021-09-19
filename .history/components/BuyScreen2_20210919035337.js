import React from "react";
import {
  chakra,
  Box,
  useColorModeValue,
  Stack,
  Image,
  Flex,
  Button,
  Spacer,
  HStack,
} from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import TextLoop from "react-text-loop";

const BuyScreen2 = () => {
  return (
    <HStack bg={useColorModeValue("brand.500")} px={8} py={24} mx="auto">
      <Box
        paddingLeft="150"
        paddingTop="70"
        w={{ base: "full", md: 11 / 12, xl: 9 / 12 }}
        mx="auto"
        pr={{ md: 20 }}
      >
        <chakra.h2
          fontSize={{ base: "3xl", sm: "4xl" }}
          fontWeight="extrabold"
          lineHeight="shorter"
          color={useColorModeValue("white", "gray.100")}
          mb={6}
        >
          <chakra.span
            display="block"
            color="black"
            fontFamily="sans-serif"
            // bgGradient="linear(to-r, #4F3BA9, #CB5AFD)"
            // bgClip="text"
            fontSize="xxx-large"
          >
            Buy 
          </chakra.span>
        </chakra.h2>
        <chakra.p mb="3" fontSize={{ base: "lg", md: "xl" }} color="#47586B">
          <span>Enter the unique URL from your seller</span>
        </chakra.p>

        <Input
          _hover={{
            borderColor: "#4F3BA9",
          }}
          borderColor="#CB5AFD"
          color="black"
          size="lg"
        />
        <br />
        <br />
        <br />
        <Button
          paddingY="7"
          display="inline-flex"
          rounded="md"
          shadow="md"
          bgGradient="linear(to-r, #4F3BA9, #CB5AFD)"
          _hover={{
            bgGradient: "linear(to-l, #4F3BA9, #CB5AFD)",
          }}
        >
          <chakra.a
            display="inline-flex"
            alignItems="center"
            justifyContent="center"
            px={5}
            py={3}
            border="solid transparent"
            fontWeight="bold"
            w="full"
            rounded="md"
            color={useColorModeValue("white")}
          >
            Buy
          </chakra.a>
        </Button>
      </Box>
      <Box
        paddingTop="30"
        w={{ base: "full", md: 10 / 16 }}
        mx="auto"
        textAlign="center"
      >
        <Image
          w="full"
          rounded="lg"
          shadow="2xl"
          src="https://kutty.netlify.app/hero.jpg"
          alt="Hellonext feedback boards software screenshot"
        />
      </Box>
    </HStack>
  );
};

export default BuyScreen2;

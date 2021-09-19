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
  VStack,
  GridItem,
  Center,
  SimpleGrid,
  VisuallyHidden,
  Icon,
  Text,
} from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import Lottie from "react-lottie-player";
import success from "./success-tick.json";

import TextLoop from "react-text-loop";

const BuyScreen4 = () => {
  return (
    <HStack
      spacing="20"
      bg={useColorModeValue("brand.500")}
      px={8}
      py={24}
      mx="auto"
    >
      <Box paddingLeft="150" paddingTop="70" w="100%" pr={{ md: 20 }}>
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
            Payment Completed successfully
          </chakra.span>
          <chakra.span
            paddingTop="5"
            display="block"
            color="black"
            fontFamily="sans-serif"
            // bgGradient="linear(to-r, #4F3BA9, #CB5AFD)"
            // bgClip="text"
            fontSize="medium"
          >
          </chakra.span>
        </chakra.h2>
        <chakra.p mb="3" fontSize={{ base: "lg", md: "xl" }} color="#47586B">
          <Text>
            {" "}
            Thanks for purchasing. Your code is live at https://github.com/xyz .
            Please verify and release payment asap.{" "}
          </Text>
          {/* <VStack align="initial">
            <span>
              <b>Name :</b> XXX
            </span>
            <span>
              <b>Description :</b> XXX
            </span>
            <span>
              <b>Price :</b> XXX
            </span>
            <span>
              <b>Payment address to deposit :</b> XXX
            </span>
            <span>
              <b>Condition(s) :</b> XXX
            </span>
          </VStack> */}
        </chakra.p>
        <br />
        <br />
        <br />
      </Box>
      <Box
        paddingRight="10"
        w={{ base: "full", md: 10 / 16 }}
        mx="auto"
        textAlign="center"
      ></Box>
    </HStack>
  );
};

export default BuyScreen4;

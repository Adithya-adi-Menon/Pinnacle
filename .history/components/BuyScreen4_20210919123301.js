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
            width="100%"
            color="black"
            fontFamily="sans-serif"
            // bgGradient="linear(to-r, #4F3BA9, #CB5AFD)"
            // bgClip="text"
            fontSize="xxx-large"
          >
            Payment Completed Successfully
          </chakra.span>
        </chakra.h2>
        <chakra.p mb="3" fontSize={{ base: "lg", md: "xl" }} color="#47586B">
          <Text>
            The seller has marked the received the payment and the transaction
            has been completed successfully.
            <br />
            Please find the transaction receipt below.
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
        <Button
          marginStart="10"
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
            Download Receipt
          </chakra.a>
        </Button>
        <br />
        <br />
      </Box>
      <Box paddingRight="10" mx="auto" textAlign="center"></Box>
    </HStack>
  );
};

export default BuyScreen4;

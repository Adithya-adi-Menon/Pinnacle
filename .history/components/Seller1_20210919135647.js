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

const Seller1 = () => {
  return (
    <Flex py={24} mx="auto">
      <Box w="full" mx="auto">
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
            Create Payment Link
          </chakra.span>
        </chakra.h2>
        <chakra.p mb="3" fontSize={{ base: "lg", md: "xl" }} color="#47586B">
          <span>Name of the product</span>
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
    </Flex>
  );
};

export default Seller1;

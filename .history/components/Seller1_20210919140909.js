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
    <Box padding="40" w="full" mx="auto">
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
      <HStack>
        <Box>
          <chakra.p mb="3" fontSize={{ base: "lg", md: "xl" }} color="#47586B">
            <span>Name of the product</span>
          </chakra.p>

          <Input
            _hover={{
              borderColor: "#4F3BA9",
            }}
            paddingRight="20"
            borderColor="#CB5AFD"
            color="black"
            size="lg"
          />
        </Box>
        <Box paddingLeft="10">
          <chakra.p mb="3" fontSize={{ base: "lg", md: "xl" }} color="#47586B">
            <span>Price in XLM</span>
          </chakra.p>

          <Input
            _hover={{
              borderColor: "#4F3BA9",
            }}
            borderColor="#CB5AFD"
            color="black"
            size="lg"
          />
        </Box>
      </HStack>

      <HStack>
        <Box paddingTop="5">
          <chakra.p mb="3" fontSize={{ base: "lg", md: "xl" }} color="#47586B">
            <span>Description of product</span>
          </chakra.p>

          <Input
            _hover={{
              borderColor: "#4F3BA9",
            }}
            paddingRight="520"
            borderColor="#CB5AFD"
            color="black"
            size="lg"
            paddingBottom="20"
          />
        </Box>
      </HStack>
      <HStack paddingTop="5">
        <Box>
          <chakra.p mb="3" fontSize={{ base: "lg", md: "xl" }} color="#47586B">
            <span>Deposit Address</span>
          </chakra.p>

          <Input
            _hover={{
              borderColor: "#4F3BA9",
            }}
            paddingRight="20"
            borderColor="#CB5AFD"
            color="black"
            size="lg"
          />
        </Box>
        <Box paddingLeft="10">
          <chakra.p mb="3" fontSize={{ base: "lg", md: "xl" }} color="#47586B">
            <span>Conditions</span>
          </chakra.p>

          <Input
            _hover={{
              borderColor: "#4F3BA9",
            }}
            borderColor="#CB5AFD"
            color="black"
            paddingRight="150"
            size="lg"
          />
        </Box>
      </HStack>
      <HStack>
        <Box paddingTop="5">
          <chakra.p mb="3" fontSize={{ base: "lg", md: "xl" }} color="#47586B">
            <span>Secret</span>
          </chakra.p>
          <chakra.p fontSize={{ base: "lg", md: "xl" }} color="#47586B">
            <span>Secret</span>
          </chakra.p>
          <Input
            _hover={{
              borderColor: "#4F3BA9",
            }}
            paddingRight="520"
            borderColor="#CB5AFD"
            color="black"
            size="lg"
            paddingBottom="20"
          />
        </Box>
      </HStack>

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
  );
};

export default Seller1;

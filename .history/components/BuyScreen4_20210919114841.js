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
  Text
} from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import TextLoop from "react-text-loop";

const BuyScreen4 = () => {
  return (
  
      <Box
        paddingLeft="0"
        paddingTop="0"
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
            Escrow Completed
          </chakra.span>
        </chakra.h2>
        <Text>Payment has successfully completed to seller. The escrow deal is marked complete.</Text>
        <Box padding="3">
              <Button
                marginStart="10"
                paddingX="10"
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
                  Download Payment Receipt (IPFS)
                </chakra.a>
              </Button>
            </Box>
        
      </Box>
     
  
  );
};

export default BuyScreen4;

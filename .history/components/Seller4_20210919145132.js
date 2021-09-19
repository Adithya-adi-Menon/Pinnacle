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
  IconButton,
  Icon,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import TextLoop from "react-text-loop";
import { FaCopy } from "react-icons/fa";

const Seller4 = () => {
  return (
    <HStack
      spacing="20"
      bg={useColorModeValue("brand.500")}
      px={8}
      py={24}
      mx="auto"
    >
      <Box
        paddingLeft="1"
        paddingTop="1"
        w={{ base: "full", md: 11 / 12, xl: 11 / 14 }}
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
            Payment received
          </chakra.span>
        </chakra.h2>
        <chakra.p mb="3" fontSize={{ base: "lg", md: "xl" }} color="#47586B">
          <VStack align="initial">
            <span>
              The buyer has successfully verified your product. The tokens will
              be transferred automatically to your deposit address in a couple
              of minutes.
            </span>
            <br></br>
            <br />
            <br />
            <br />
            <Alert
              color="gray.800"
              borderRadius="20"
              bgGradient="linear(to-r, rgba(79, 59, 169, 0.3), rgba(203, 90, 253, 0.3))"
              status="info"
            >
              <AlertIcon color="gray.800" />
              <b>Status : </b>
              <Spacer />
              Payment received and marked completed.
              <Spacer />
            </Alert>
            <br></br>
            <span>
              <HStack>
                <Box paddingTop="5">
                  <Button
                    paddingX="10"
                    paddingY="7"
                    display="inline-flex"
                    color="white"
                    rounded="md"
                    shadow="md"
                    bgGradient="linear(to-r, black, black)"
                    _hover={{
                      bgGradient: "linear(to-l,  #df1b1b, #ce2525)",
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
                      Raise Dispute
                    </chakra.a>
                  </Button>
                </Box>
                <Box paddingTop="5">
                  <Button
                    paddingY="7"
                    display="inline-flex"
                    rounded="md"
                    shadow="md"
                    color=""
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
                      I am a buyer
                    </chakra.a>
                  </Button>
                </Box>
              </HStack>
            </span>
          </VStack>
        </chakra.p>
        <br />
        <br />
        <br />
      </Box>
    </HStack>
  );
};

export default Seller4;

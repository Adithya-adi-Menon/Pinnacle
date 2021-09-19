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

const Seller3 = () => {
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
            Payment Link Created
          </chakra.span>
        </chakra.h2>
        <chakra.p mb="3" fontSize={{ base: "lg", md: "xl" }} color="#47586B">
          <VStack align="initial">
            <span>
              The payment link has been created. Please share the link with the
              Buyer.
            </span>
            <br></br>

            <Alert colorSchemr="violet" status="info">
              <AlertIcon />
              Chakra is going live on August 30th. Get ready!
            </Alert>
            <br></br>
            <span>
              <Box paddingTop="10">
                <Box
                  marginStart="1"
                  paddingX="10"
                  display="inline-flex"
                  rounded="md"
                  shadow="md"
                  color="white"
                  bgColor="rgba(79, 59, 169, 0.5)"
                >
                  <chakra.a
                    display="inline-flex"
                    alignItems="center"
                    justifyContent="center"
                    px={5}
                    py={3}
                    border="solid transparent"
                    fontWeight="bold"
                    w="300px"
                    rounded="md"
                    color={useColorModeValue("white")}
                  >
                    https://pinnacle.us.org
                  </chakra.a>
                  <Center>
                    <IconButton
                      aria-label="Search database"
                      icon={<FaCopy />}
                    />
                  </Center>
                </Box>
              </Box>
              <Box paddingTop="5">
                <Button
                  paddingX="10"
                  paddingY="7"
                  display="inline-flex"
                  color="white"
                  rounded="md"
                  shadow="md"
                  bgGradient="linear(to-r, #df1b1b, #ce2525)"
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
                    Delete Payment Link
                  </chakra.a>
                </Button>
              </Box>
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

export default Seller3;

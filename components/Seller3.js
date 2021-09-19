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
} from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import TextLoop from "react-text-loop";

export default function Seller3(){
    return(
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
            Verifying the Product
            </chakra.span>
          </chakra.h2>
          <chakra.p mb="3" fontSize={{ base: "lg", md: "xl" }} color="#47586B">
            <VStack align="initial">
              <span>
                <b>The Buyer is Verifying the product and this can take a maximum of 30 minutes</b>
              </span>
              <br>
              </br>
              <span>
                  <b>Payment status: Recieved to escrow wallet. Buyer is Verifying the product.This might take upto 30 minutes.Please raise a dispute if you think something wrong.</b>
              </span>
              <SimpleGrid columns={2} spacingX="3px" spacingY="20px">
              
              <Box padding="35" marginLeft="10px">
              <Button
                marginStart="1"
                paddingX="3"
                paddingY="7"
                display="inline-flex"
                rounded="xl"
                shadow="md"
                bgGradient="linear(to-r, #434343, #000000)"
                _hover={{
                  bgGradient: "linear(to-l, #434343, #000000)",
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
                  w="300px"
                  rounded="md"
                  color={useColorModeValue("white")}
                >
               Raise a Dispute
                </chakra.a>
              </Button>
            </Box>
            <Box padding="35" marginLeft="10px">
              <Button
                marginStart="1"
                paddingX="3"
                paddingY="7"
                display="inline-flex"
                rounded="xl"
                shadow="md"
                bgGradient="linear(to-r, #5aff15, #00b712)"
                _hover={{
                  bgGradient: "linear(to-l, #5aff15, #00b712)",
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
                  w="300px"
                  rounded="md"
                  color={useColorModeValue("white")}
                >
               Make payment as Completed
                </chakra.a>
              </Button>
            </Box>
              
              </SimpleGrid>
            </VStack>
          </chakra.p>
          <br />
          <br />
          <br />
        </Box>
        
      </HStack>
    )
}
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

import { Link } from "@chakra-ui/layout";
import { Input } from "@chakra-ui/react";
import TextLoop from "react-text-loop";

const BuyScreen2 = () => {
  return (
    <HStack
      spacing="20"
      bg={useColorModeValue("brand.500")}
      px={8}
      py={24}
      mx="auto"
    >
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
            Product Information
          </chakra.span>
        </chakra.h2>
        <chakra.p mb="3" fontSize={{ base: "lg", md: "xl" }} color="#47586B">
          <VStack align="initial">
            <span>
              <b>Name :</b> Pinnacle
            </span>
            <span>
              <b>Description :</b> Olympics Of Hackathons
            </span>
            <span>
              <b>Price :</b> 10 xlm
            </span>
            <span>
              <b>Payment address to deposit :</b> GDMC47LOWBL2ZRZQSRYWO4D4HI3JG3EIJWFJ6WMYSDPKRNNKIV33N3VK

            </span>
            <span>
              <b>Condition(s) :</b> No Refund
            </span>
          </VStack>
        </chakra.p>
        <br />
        <br />
        <br />
      </Box>
      <Box
        paddingTop="30"
        w={{ base: "full", md: 10 / 16 }}
        mx="auto"
        textAlign="center"
      >
        <Box colSpan={{ base: "auto", md: 4 }}>
          <Box as="form" mb={6} rounded="lg" shadow="xl">
            <Center pb={0} color={useColorModeValue("gray.700", "gray.600")}>
              <chakra.p
                fontSize="xl"
                fontWeight="extrabold"
                letterSpacing="tight"
                bgGradient="linear(to-r, #4F3BA9, #CB5AFD)"
                bgClip="text"
                opacity="0.6"
              >
                Payment Information
              </chakra.p>
            </Center>
            <SimpleGrid
              columns={1}
              px={6}
              py={4}
              spacing={4}
              borderBottom="solid 1px"
              borderColor={useColorModeValue("gray.200", "gray.700")}
            >
               <Image marginStart="20" paddingTop="10" src="/images/frame.png" />
              {/* <Flex>
                <VisuallyHidden>First Name</VisuallyHidden>
                <Input
                  mt={0}
                  type="text"
                  placeholder="First Name"
                  required="true"
                />
              </Flex>
              <Flex>
                <VisuallyHidden>Email Address</VisuallyHidden>
                <Input
                  mt={0}
                  type="email"
                  placeholder="Email Address"
                  required="true"
                />
              </Flex>
              <Flex>
                <VisuallyHidden>Password</VisuallyHidden>
                <Input
                  mt={0}
                  type="password"
                  placeholder="Password"
                  required="true"
                />
              </Flex> */}
            </SimpleGrid>
            <Box padding="3">
              <Link href="/buy/buy3">
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
                  Pay To descrow
                </chakra.a>
              </Button>
              </Link>
            </Box>
          </Box>
          <chakra.p fontSize="xs" textAlign="center" color="gray.600">
            By signing up you agree to our{" "}
            <chakra.a color="brand.500">Terms of Service</chakra.a>
          </chakra.p>
        </Box>
      </Box>
    </HStack>
  );
};

export default BuyScreen2;

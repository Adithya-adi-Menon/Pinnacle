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
            Product Information
          </chakra.span>
        </chakra.h2>
        <chakra.p mb="3" fontSize={{ base: "lg", md: "xl" }} color="#47586B">
          <VStack align="initial">
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
              <p pt={2}>Start talking now</p>
            </Center>
            <SimpleGrid
              columns={1}
              px={6}
              py={4}
              spacing={4}
              borderBottom="solid 1px"
              borderColor={useColorModeValue("gray.200", "gray.700")}
            >
              <Flex>
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
              </Flex>
              <Button colorScheme="brand" w="full" py={2} type="submit">
                Sign up for free
              </Button>
            </SimpleGrid>
            <Flex px={6} py={4}>
              <Button
                py={2}
                w="full"
                colorScheme="blue"
                leftIcon={
                  <Icon
                    mr={1}
                    aria-hidden="true"
                    boxSize={6}
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="transparent"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20.283,10.356h-8.327v3.451h4.792c-0.446,2.193-2.313,3.453-4.792,3.453c-2.923,0-5.279-2.356-5.279-5.28	c0-2.923,2.356-5.279,5.279-5.279c1.259,0,2.397,0.447,3.29,1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233	c-4.954,0-8.934,3.979-8.934,8.934c0,4.955,3.979,8.934,8.934,8.934c4.467,0,8.529-3.249,8.529-8.934	C20.485,11.453,20.404,10.884,20.283,10.356z" />
                  </Icon>
                }
              >
                Continue with Google
              </Button>
            </Flex>
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

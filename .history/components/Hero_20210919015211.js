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
} from "@chakra-ui/react";
import TextLoop from "react-text-loop";

const Hero = () => {
  return (
    <Flex
      direction={{ base: "column", md: "row" }}
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
            Escrow Man
          </chakra.span>
        </chakra.h2>
        <chakra.p mb="3" fontSize={{ base: "lg", md: "xl" }} color="#47586B">
          <TextLoop>
            <span>Escrow man enables safe and trustless payments online.</span>
            <span>Stay safe from scammers in the digital world.</span>
          </TextLoop>
        </chakra.p>
        <br />
        <br />

        <Stack direction="row" mb={{ base: 4, md: 8 }} spacing={7}>
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
              I am a buyer
            </chakra.a>
          </Button>
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
              I am a seller
            </chakra.a>
          </Button>
        </Stack>
        <Image paddingTop="5" src="/images/MadeAtPinnacle.png" />
      </Box>
      <Box
        paddingTop="30"
        w={{ base: "full", md: 10 / 16 }}
        mx="auto"
        textAlign="center"
      >
        <Image
          w="full"
          rounded="lg"
          shadow="2xl"
          src="https://kutty.netlify.app/hero.jpg"
          alt="Hellonext feedback boards software screenshot"
        />
      </Box>
    </Flex>
  );
};

export default Hero;

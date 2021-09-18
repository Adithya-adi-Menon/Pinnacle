import React from "react";
import {
  chakra,
  Box,
  Flex,
  useColorModeValue,
  Stack,
  Link,
  Center,
} from "@chakra-ui/react";

export default function Footer() {
  return (
    <Flex p={10} w="full" alignItems="center" justifyContent="center">
      <Center>
        {" "}
        <chakra.p
          fontSize="5xl"
          fontWeight="extrabold"
          letterSpacing="tight"
          bgGradient="linear(to-r, #4F3BA9, #CB5AFD)"
          bgClip="text"
          opacity="0.6"
        >
          How to use?
        </chakra.p>
      </Center>
    </Flex>
  );
}

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
    <Flex
      bgGradient="linear(to-l, rgba(121, 40, 202, 0.3), rgba(121, 40, 202, 0.5))"
      p={5}
      w="full"
      alignItems="center"
      justifyContent="center"
    >
      <Center>Made with at Pinnacle 2021.</Center>
    </Flex>
  );
}

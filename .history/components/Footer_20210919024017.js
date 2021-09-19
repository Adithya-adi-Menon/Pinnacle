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
          fontSize="xl"
          fontWeight="extrabold"
          letterSpacing="tight"
          bgClip="text"
        >
          Made with love at Pinnacle 2021
        </chakra.p>
      </Center>
    </Flex>
  );
}

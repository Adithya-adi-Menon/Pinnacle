import React from "react";
import { Flex, Spacer, Box, Button, Heading } from "@chakra-ui/react";

export default function Header() {
  return (
    <Flex width="100%">
      <Spacer />
      <Box paddingTop="5" paddingRight="5">
        <Button colorScheme="teal">Connect Wallet</Button>
      </Box>
    </Flex>
  );
}

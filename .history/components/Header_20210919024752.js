import React from "react";
import { Flex, Spacer, Box, Button, Heading } from "@chakra-ui/react";

export default function Header() {
  return (
    <Flex width="100%">
      <Spacer />
      <Box>
        <Button colorScheme="teal">
          Log in
        </Button>
      </Box>
    </Flex>
  );
}

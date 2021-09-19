import React from "react";
import {
  Flex,
  Spacer,
  Box,
  Button,
  Heading,
  chakra,
  useColorModeValue,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

export default function Header() {
  return (
    <Flex width="100%">
      <Spacer />
      <Box paddingTop="5" paddingRight="5">
        <Button
          marginStart="10"
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
            Connect Wallet
          </chakra.a>
        </Button>
      </Box>
    </Flex>
  );
}

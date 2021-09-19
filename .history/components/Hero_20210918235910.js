import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";

export default function SplitScreen() {
  return (
    <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={6} w={"full"} maxW={"lg"}>
          <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
            <Text
              color={"blue.400"}
              as={"span"}
              bgClip="text"
              bgGradient="linear(to-l, #7928CA, #7928CA)"
              bgClip="text"
            >
              Easy Escrow
            </Text>{" "}
          </Heading>
          <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
            A trustless escrow solution to collect payments seamlessly.
            <br></br>
            The safest way to trade/ buy online.
          </Text>
          <Stack direction={{ base: "column", md: "row" }} spacing={4}>
            <Button
              rounded={"full"}
              bg={"blue.400"}
              color={"white"}
              _hover={{
                bg: "blue.500",
              }}
            >
              Create Project
            </Button>
            <Button rounded={"full"}>How It Works</Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}></Flex>
    </Stack>
  );
}

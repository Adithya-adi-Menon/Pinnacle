import React from "react";
import {
  chakra,
  Box,
  SimpleGrid,
  Flex,
  useColorModeValue,
  Icon,
} from "@chakra-ui/react";
import TextLoop from "react-text-loop";

export default function HowToUse() {
  const Feature = (props) => {
    return (
      <Box>
        <Flex
          alignItems="center"
          justifyContent="center"
          w={8}
          h={8}
          mb={4}
          rounded="full"
        >
          <Icon
            boxSize={5}
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            {props.icon}
          </Icon>
        </Flex>
        <chakra.h3
          mb={2}
          fontWeight="semibold"
          lineHeight="shorter"
          color="black"
        >
          {props.title}
        </chakra.h3>
        <chakra.p fontSize="sm" color="white">
          {props.children}
        </chakra.p>
      </Box>
    );
  };
  return (
    <Flex
      paddingLeft="140"
      w="auto"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        borderTopLeftRadius="20"
        px={8}
        py={10}
        mx="auto"
        bgGradient="linear(to-l, rgba(121, 40, 202, 0.3), rgba(121, 40, 202, 0.5))"
        shadow="xl"
      >
        <Box textAlign={{ lg: "center" }}>
          <chakra.p
            fontSize={{ base: "3xl", sm: "4xl" }}
            lineHeight="8"
            fontWeight="extrabold"
            letterSpacing="tight"
            color="black"
          >
            How to use
          </chakra.p>
          <chakra.p
            paddingTop="9"
            paddingBottom="9"
            mb="3"
            fontSize={{ base: "lg", md: "xl" }}
            color="#DDD9E8"
          >
            <TextLoop>
              <span>
                Escrow man enables safe and trustless payments online.
              </span>
              <span>Stay safe from scammers in the digital world.</span>
            </TextLoop>
          </chakra.p>
        </Box>
        <SimpleGrid
          columns={{ base: 1, sm: 2, md: 3, lg: 4 }}
          spacingX={{ base: 16, lg: 24 }}
          spacingY={20}
          mt={6}
          paddingLeft="20"
        >
          <Feature
            color="white"
            title="Step 1"
            icon={
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                ></path>
              </svg>
            }
          >
            Seller creates a link and sends to the buyer for payment.
          </Feature>

          <Feature
            color="pink"
            title="Step 2"
            icon={
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                ></path>
              </svg>
            }
          >
            Buyer deposits in the escrow's wallet through the link provided by
            seller.
          </Feature>

          <Feature
            color="yellow"
            title="Step 3"
            icon={
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
            }
          >
            Buyer checks the product/ service and approves i
          </Feature>

          <Feature
            color="green"
            title="Step 4"
            icon={
              <>
                <path
                  fillRule="evenodd"
                  d="M6.625 2.655A9 9 0 0119 11a1 1 0 11-2 0 7 7 0 00-9.625-6.492 1 1 0 11-.75-1.853zM4.662 4.959A1 1 0 014.75 6.37 6.97 6.97 0 003 11a1 1 0 11-2 0 8.97 8.97 0 012.25-5.953 1 1 0 011.412-.088z"
                  clipRule="evenodd"
                />
                <path
                  fillRule="evenodd"
                  d="M5 11a5 5 0 1110 0 1 1 0 11-2 0 3 3 0 10-6 0c0 1.677-.345 3.276-.968 4.729a1 1 0 11-1.838-.789A9.964 9.964 0 005 11zm8.921 2.012a1 1 0 01.831 1.145 19.86 19.86 0 01-.545 2.436 1 1 0 11-1.92-.558c.207-.713.371-1.445.49-2.192a1 1 0 011.144-.83z"
                  clipRule="evenodd"
                />
                <path
                  fillRule="evenodd"
                  d="M10 10a1 1 0 011 1c0 2.236-.46 4.368-1.29 6.304a1 1 0 01-1.838-.789A13.952 13.952 0 009 11a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </>
            }
          >
            Our forecasting is your magical crystal ball that helps you predict
            and plan for the future.
          </Feature>
        </SimpleGrid>
      </Box>
    </Flex>
  );
}

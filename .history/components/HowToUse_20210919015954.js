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
            Buyer checks the product/ service and releases the payment to
            seller.
          </Feature>

          <Feature
            color="green"
            title="Step 4"
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
                  d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01"
                ></path>
              </svg>
            }
          >
            In case of an issue, a dispute can be raised and will be solved
            ASAP.
          </Feature>
        </SimpleGrid>
        <Box>
        SimpleGrid

If you're like me, you probably tend to check the MDN docs for anything CSS grid.

View source

    @chakra-ui/layout

chakra ui pro
Chakra UI Pro: Start your application or marketing site with a growing collection of beautiful and responsive UI components.
Ads via Chakra UI

SimpleGrid provides a friendly interface to create responsive grid layouts with ease. It renders a div element with display: grid.
Import#

import { SimpleGrid } from "@chakra-ui/react"

Usage#

Specifying the number of columns for the grid layout.
<SimpleGrid columns={2} spacing={10}>
  <Box bg="tomato" height="80px"></Box>
  <Box bg="tomato" height="80px"></Box>
  <Box bg="tomato" height="80px"></Box>
  <Box bg="tomato" height="80px"></Box>
  <Box bg="tomato" height="80px"></Box>
</SimpleGrid>

          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </Box>
      </Box>
    </Flex>
  );
}

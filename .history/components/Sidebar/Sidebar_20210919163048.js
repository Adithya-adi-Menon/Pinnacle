import React, { useState } from "react";
import {
  Flex,
  Text,
  IconButton,
  Divider,
  Avatar,
  Heading,
} from "@chakra-ui/react";
import {
  FiMenu,
  FiHome,
  FiCalendar,
  FiUser,
  FiDollarSign,
  FiBriefcase,
  FiSettings,
  FiGithub,
} from "react-icons/fi";

import IoHelpBuoySharp from "react-icons/io5";

import { FaQuestion } from "react-icons/fi";
import NavItem from "../Sidebar/NavItem";

export default function Sidebar() {
  const [navSize, changeNavSize] = useState("small");
  return (
    <Flex
      style={{ position: "absolute" }}
      position="absolute"
      left="5"
      h="95vh"
      bgGradient="linear(to-l, rgba(121, 40, 202, 0.3), rgba(121, 40, 202, 0.5))"
      marginTop="2.5vh"
      boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
      borderRadius={navSize == "small" ? "15px" : "30px"}
      w={navSize == "small" ? "75px" : "200px"}
      flexDir="column"
      justifyContent="space-between"
    >
      <Flex
        marginTop="15.5vh"
        p="5%"
        flexDir="column"
        w="100%"
        alignItems={navSize == "small" ? "center" : "flex-start"}
        as="nav"
      >
        <NavItem
          navSize={navSize}
          icon={FiHome}
          title="Dashboard"
          description="This is the description for the dashboard."
        />
        <NavItem navSize={navSize} icon={FaQuestion} title="Calendar" />
        <NavItem navSize={navSize} icon={IoHelpBuoySharp} title="Clients" />
        <NavItem navSize={navSize} icon={FiGithub} title="Animals" />
      </Flex>

      <Flex
        p="5%"
        flexDir="column"
        w="100%"
        alignItems={navSize == "small" ? "center" : "flex-start"}
        mb={4}
      ></Flex>
    </Flex>
  );
}
// import React, { useState } from "react";
// import {
//   Flex,
//   Text,
//   IconButton,
//   Divider,
//   Avatar,
//   Heading,
// } from "@chakra-ui/react";
// import {
//   FiMenu,
//   FiHome,
//   FiCalendar,
//   FiUser,
//   FiDollarSign,
//   FiBriefcase,
//   FiSettings,
// } from "react-icons/fi";
// import { IoPawOutline } from "react-icons/io5";
// import NavItem from "./NavItem";

// export default function Sidebar() {
//   const [navSize, changeNavSize] = useState("small");
//   return (
//     <Flex
//       backgroundColor="gray.300"
//       pos="sticky"
//       left="5"
//       boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
//       borderRadius={navSize == "small" ? "15px" : "30px"}
//       w={navSize == "small" ? "75px" : "200px"}
//       flexDir="column"
//       justifyContent="space-between"
//     >
//       <Flex
//         p="5%"
//         flexDir="column"
//         w="100%"
//         alignItems={navSize == "small" ? "center" : "flex-start"}
//         as="nav"
//       >
//         <NavItem
//           navSize={navSize}
//           icon={FiHome}
//           title="Dashboard"
//           description="This is the description for the dashboard."
//         />
//         <NavItem navSize={navSize} icon={FiCalendar} title="Calendar" />
//         <NavItem navSize={navSize} icon={FiUser} title="Clients" />
//         <NavItem navSize={navSize} icon={IoPawOutline} title="Animals" />

//       </Flex>
//     </Flex>
//   );
// }

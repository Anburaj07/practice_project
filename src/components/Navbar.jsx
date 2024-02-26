import { HStack, Heading, Text } from "@chakra-ui/react";
import React from "react";

const Navbar = () => {
  return (
    <HStack
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
      p={"15px"}
      borderBottom={"0.5px solid #cecccc"}
    >
      <Heading as={"h2"} size={"lg"}>
        LOGO
      </Heading>
      <HStack alignItems={"center"}>
        <Text>+</Text>
        <Text>🔔</Text>
        <Text>👨‍💻</Text>
      </HStack>
    </HStack>
  );
};

export default Navbar;

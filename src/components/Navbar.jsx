import { Box, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";

function Navbar() {
  return (
    <Flex
      justify="space-between"
      width={"100%"}
      px={{ base: 4, md: 50 }}
      h={70}
      align={"center"}
      top={0}
      pos={"fixed"}
      zIndex={"2"}
      // borderBottom="1px"
      // borderColor="#E4E4E4"
      bg={"#fff"}
    >
      <Heading
        fontFamily={"title"}
        as="h4"
        size="md"
        color={"#B87333"}
        fontWeight={"bold"}
      >
        AquilaFarm
      </Heading>
      <Box display="flex" gap={8}>
        <NavLink className="links" to="/">
          Home
        </NavLink>
        <NavLink className="links" to="/about">
          About Us
        </NavLink>
        <NavLink className="links" to="/contact">
          Contact Us
        </NavLink>
        <NavLink className="links" to="/services">
          Services
        </NavLink>
      </Box>
      <Flex alignItems={"center"} gap={"20px"}>
        <Box
          bg={"#B87333"}
          cursor={"pointer"}
          lineHeight={"40px"}
          color={"#fff"}
          p={"5px"}
          w={"110px"}
        >
          Get in Touch
        </Box>
        <Box size={"22px"} color={"#B87333"} as={FiShoppingCart} />
      </Flex>
    </Flex>
  );
}

export default Navbar;

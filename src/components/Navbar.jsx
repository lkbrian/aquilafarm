import {
  Box,
  Flex,
  Heading,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { HamburgerIcon } from "@chakra-ui/icons";


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
      <Box gap={8} display={{ base: "none", lg: "flex" }}>
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
          display={{ base: "none", lg: "flex" }}
          w={"110px"}
        >
          Get in Touch
        </Box>
        <Box size={"22px"} color={"#B87333"} as={FiShoppingCart} />
        <Box display={{ base: "flex", lg: "none" }}>
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<HamburgerIcon />}
              variant="outline"
            />
            <MenuList>
              <MenuItem as={NavLink} className="links" to="/">
                Home
              </MenuItem>
              <MenuItem as={NavLink} className="links" to="/about">
                About Us
              </MenuItem>
              <MenuItem as={NavLink} className="links" to="/contact">
                Contact Us
              </MenuItem>
              <MenuItem as={NavLink} className="links" to="/services">
                Services
              </MenuItem>
              <MenuItem>
                <Box
                  bg={"#B87333"}
                  cursor={"pointer"}
                  lineHeight={"40px"}
                  color={"#fff"}
                  p={"5px"}
                  display={{ base: "flex", lg: "none" }}
                  w={"100%"}
                >
                  Get in Touch
                </Box>
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </Flex>
    </Flex>
  );
}

export default Navbar;

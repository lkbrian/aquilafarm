import { Box, Heading, Text, Link, Stack } from "@chakra-ui/react";
import React from "react";

function Footer() {
  return (
    <Box bg="#001219" color="white" p="20px" pt="30px" w="100%">
      <Stack spacing={4} align="center">
        <Heading
          size="lg"
          fontFamily={'title'}
          //  color="#6DA544"
          color="#B87333"
        >
          Aquila Farm
        </Heading>
        <Text fontSize="sm">
          Growing and exporting premium coffee with a commitment to
          sustainability.
        </Text>
        <Stack direction="row" spacing={4}>
          <Link href="#about" color="gray.300" _hover={{ color: "gray.100" }}>
            About Us
          </Link>
          <Link href="#contact" color="gray.300" _hover={{ color: "gray.100" }}>
            Contact
          </Link>
          <Link href="#privacy" color="gray.300" _hover={{ color: "gray.100" }}>
            Privacy Policy
          </Link>
        </Stack>
        <Text fontSize="xs" color="gray.400">
          &copy; 2024 Aquila Farm Ltd. All rights reserved.
        </Text>
      </Stack>
    </Box>
  );
}

export default Footer;

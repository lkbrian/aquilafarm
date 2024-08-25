import {
  Box,
  Text,
  Flex,
  Link,
  Stack,
  Icon,
  Button,
  Image,
  HStack,
  Heading,
} from "@chakra-ui/react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaCcMastercard } from "react-icons/fa";
import { RiVisaFill } from "react-icons/ri";
import { SiMastercard } from "react-icons/si";

const Footer = () => {
  return (
    <Box bg="#0f343f" color="#fff" pt={10}>
      <Flex
        justifyContent="space-evenly"
        flexDirection={{ base: "column", md: "row" }}
        alignItems={{ base: "flex-start", md: "center" }}
        gap={'20px'}
        ml={{base:"50px",md: 0}}
      >
        {/* Contact Us Section */}
        <Box>
          <Box pb={"25px"}>
            <Heading color={"#B87333"} fontFamily={"cinzel"}>
              Aquilafarm
            </Heading>
            <Text color={"#fff"} letterSpacing={1} fontSize={"12px"}>
              Certified coffee exporter. Premium coffee
            </Text>
          </Box>
          <Text fontWeight="bold" fontFamily={"title"} fontSize="lg" mb={4}>
            CONTACT US
          </Text>
          <Stack spacing={2}>
            <Flex align="center">
              <Icon as={FaPhoneAlt} color="#B87333" mr={2} />
              <Text color="#B87333">+254 719 623 040</Text>
            </Flex>
            <Flex align="center">
              <Icon as={FaMapMarkerAlt} color="#B87333" mr={2} />
              <Text>PO Box 344 Nairobi,Kenya</Text>
            </Flex>
            <Flex align="center">
              <Icon as={FaEnvelope} color="#B87333" mr={2} />
              <Link color="#B87333" href="mailto:info@example.com">
                Send us an email
              </Link>
            </Flex>
          </Stack>
        </Box>

        {/* Quick Links Section */}
        <Box>
          <Text fontWeight="bold" fontFamily={"title"} fontSize="lg" mb={4}>
            QUICK LINKS
          </Text>
          <Stack spacing={2}>
            <Link href="/">Home</Link>
            <Link href="#">About Us</Link>
            <Link href="#">our Work</Link>
            <Link href="#">Contact Us</Link>
            <Link href="#">our products</Link>
            <Link href="#">SDG solutions</Link>
          </Stack>
        </Box>

        {/* Get In Touch Section */}
        <Box>
          <Text fontWeight="bold" fontFamily={"title"} fontSize="lg" mb={4}>
            GET IN TOUCH
          </Text>
          <Button
            letterSpacing={1}
            textAlign="center"
            alignItems="center"
            display="flex"
            justifyContent="space-between"
            w={"auto"}
            mt={"20px"}
            outline="none"
            color={"#111"}
            p="25px"
            borderRadius=".2rem"
            fontSize={"12px"}
            gap={"20px"}
            bg="#FFF"
            cursor={"pointer"}
            mb={4}
          >
            REQUEST A QUOTE
          </Button>
          <Flex align="center" gap={4} alignItems={"center"}>
            <RiVisaFill color="#fff" fontSize={"60px"} />
            <Box>
              <SiMastercard color="#fff" fontSize={"50px"} />
              <Text fontSize={"14px"} textAlign={"center"}>
                mastercard
              </Text>
            </Box>
          </Flex>
        </Box>
      </Flex>

      {/* Footer Bottom Section */}
      <Flex
        justifyContent={{base:"center" ,md:"space-evenly"}}
        bg={"#B87333"}
        p={"6px"}
        flexDirection={{ base: "column", md: "row" }}
        alignItems="center"
        mt={8}
        pt={4}
      >
        <Text fontFamily={"body"} textAlign={'center'} fontWeight={'400'} fontSize={"14px"}>
          © 2024 Aquilafarm. All Rights Reserved. Website design by lkbian
        </Text>
        <HStack>
          <Link href="/terms">Terms of Use |</Link>
          <Link href="/privacy">Privacy Statement</Link>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Footer;

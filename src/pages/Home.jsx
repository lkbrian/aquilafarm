import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  ListItem,
  Text,
  UnorderedList
} from "@chakra-ui/react";
import React from "react";
import arabica from "../assets/arabica.jpeg";
import roasted from "../assets/roasted.jpeg";
import robusta from "../assets/robusta.jpeg";
import farmone from "../assets/farm-01.jpeg";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import SdgCards from "../components/SdgCards";
import { FaArrowCircleRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";


function Home() {
  const sdgImpacts = [
    {
      title: "No Poverty (SDG 1)",
      description:
        "Coffee farming provides livelihoods for millions of smallholder farmers. By supporting fair trade practices, it helps reduce poverty and improve living standards in rural communities.",
    },
    {
      title: "Zero Hunger (SDG 2)",
      description:
        "Sustainable coffee farming enhances food security by promoting diversified farming systems and improving soil health, which benefits local communities.",
    },
    {
      title: "Good Health and Well-Being (SDG 3)",
      description:
        "Coffee farming generates income and promotes physical activity, contributing to the health and well-being of farming communities.",
    },
    {
      title: "Quality Education (SDG 4)",
      description:
        "Income from coffee farming allows families to afford education, while cooperatives invest in educational programs, improving access to quality education.",
    },
    {
      title: "Gender Equality (SDG 5)",
      description:
        "Coffee farming empowers women through training and leadership roles, promoting gender equality and enhancing community well-being.",
    },
    {
      title: "Clean Water and Sanitation (SDG 6)",
      description:
        "Sustainable practices in coffee farming help conserve water and manage waste, ensuring clean water access for surrounding communities.",
    },
    {
      title: "Decent Work and Economic Growth (SDG 8)",
      description:
        "Coffee farming is a major source of employment, driving economic growth. Promoting decent work conditions and fair wages supports sustainable development.",
    },
    {
      title: "Responsible Consumption and Production (SDG 12)",
      description:
        "Eco-friendly coffee farming methods align with responsible consumption and production by reducing waste and promoting resource efficiency.",
    },
    {
      title: "Climate Action (SDG 13)",
      description:
        "Sustainable coffee farming contributes to climate action through practices like agroforestry, which sequesters carbon and reduces greenhouse gas emissions.",
    },
    {
      title: "Life on Land (SDG 15)",
      description:
        "Sustainable coffee farming supports biodiversity by protecting ecosystems and maintaining natural habitats.",
    },
  ];
  const coffeeProducts = [
    {
      id: 1,
      name: "Arabica Coffee Beans",
      description:
        "Arabica beans are prized for their smooth, sweet flavor with hints of fruit and floral notes. Grown at high altitudes, they offer a refined taste with balanced acidity. Available in AA (highest grade) and AB (balanced flavor) grades.",
      imageSrc: `${arabica}`, // Replace with actual image path
      altText: "Arabica Coffee Beans",
    },
    {
      id: 2,
      name: "Robusta Coffee Beans",
      description:
        "Robusta beans deliver a strong, bold flavor with earthy and nutty notes. Known for their high caffeine content, they offer a full-bodied experience. Available in AA (strong, less bitter) and AB (smooth, intense) grades.",
      imageSrc:  `${robusta}`,
      altText: "Robusta Coffee Beans",
    },
    {
      id: 3,
      name: "Roasted Coffee",
      description:
        "Our roasted coffee offers a rich, flavorful experience. Choose from light roast (bright, fruity), medium roast (balanced, caramel), or dark roast (bold, smoky) to suit your taste preference.",
      imageSrc:  `${roasted}`,
      altText: "Roasted Coffee Beans",
    },
  ];

  return (
    <div className="scrollbar home">
      <Navbar />

      {/* Hero Section */}
      <Box position="relative" h="95vh" mt={"70px"} overflow={"hidden"}>
        <HeroSection />
      </Box>

      <Flex
        p={10}
        direction={{ base: "column", lg: "row" }}
        align={"start"}
        gap={8}
        // justify={'space-evenly'}
      >
        <Box
          shadow="0 2px 8px rgba(0, 0, 0, 0.1)"
          flex="1"
          py={4}
          px={6}
          borderWidth={2}
          borderColor="gray"
          borderRadius="0.7rem"
          maxW={{ base: "100%", lg: "50%" }}
          // w={[400, 600, 700, 800]}
          w={{ base: "100%", lg: "50%", xl: "40%" }}
          minH={{ base: "auto", md: "450px" }}
        >
          <Heading as="h3" size="lg" mb={2} fontFamily={"title"}>
            Who we are
          </Heading>
          <Text letterSpacing={"1px"}>
            Aquila Farm Ltd is a premier licensed exporter of green bean coffee,
            proudly operating from the fertile volcanic highlands of Kenya.
            Specializing in single-origin coffee, our beans are meticulously
            handpicked from altitudes of 1,685 meters above sea level, ensuring
            a product that embod2es the rich, distinctive flavors unique to
            Kenya’s coffee-growing regions. At Aquila Farm Ltd, we are dedicated
            to delivering only the highest quality coffee to our global
            clientele. Our commitment to excellence extends beyond our product
            to the communities we serve and the environment we strive to
            protect.
            <Box display={{ base: "none", md: "inline" }}>
              {" "}
              Through sustainable farming practices, fair trade initiatives, and
              active participation in community development, we aim to create a
              positive impact both locally and internationally. Our focus on
              sustainability is reflected in our alignment with key United
              Nations Sustainable Development Goals (SDGs), as we work
              tirelessly to promote environmental stewardship, support local
              education, and provide better livelihoods through job creation.
              With every bean we export, Aquila Farm Ltd carries forward a
              legacy of quality, integrity, and a deep respect for the people
              and land that make our coffee exceptional.
            </Box>
          </Text>
        </Box>
        <Box
          flex="1"
          p="4"
          borderWidth={2}
          borderColor="gray"
          borderRadius="0.7rem"
          shadow="0 2px 8px rgba(0, 0, 0, 0.1)"
        >
          <Heading
            as="h3"
            fontWeight={"bold"}
            fontFamily={"title"}
            size="lg"
            mb={2}
          >
            Our Mission
          </Heading>
          <Text mb={2}>
            To deliver the finest single-origin green bean coffee, handpicked
            from the rich volcanic soils of Kenya, ensuring quality and
            sustainability in every bean.
          </Text>
          <Heading
            as="h3"
            fontWeight={"bold"}
            fontFamily={"title"}
            size="lg"
            mb={2}
          >
            Vision
          </Heading>
          <Text mb={4}>
            To be the leading provider of premium, sustainably-sourced green
            bean coffee from Kenya, renowned for our commitment to quality and
            environmental stewardship.
          </Text>
          <Heading
            as="h3"
            fontWeight={"bold"}
            fontFamily={"title"}
            size="lg"
            mb={4}
          >
            Core values
          </Heading>
          <UnorderedList mt={2}>
            <ListItem>
              <Text fontWeight={"bold"} fontFamily={"title"}>
                Quality:
              </Text>{" "}
              We prioritize excellence in every step of our coffee production
              process.
            </ListItem>
            <ListItem>
              <Text fontWeight={"bold"} fontFamily={"title"}>
                Sustainability:
              </Text>{" "}
              We are dedicated to environmentally friendly practices and
              supporting our local farming communities.
            </ListItem>
            <ListItem>
              <Text fontWeight={"bold"} fontFamily={"title"}>
                Integrity:
              </Text>{" "}
              We conduct business with transparency and ethical practices.
            </ListItem>
          </UnorderedList>
        </Box>
      </Flex>
      <Box position="relative" m="10px" p="20px" bg="#0f343f" color="white">
        <Flex
          h="100%"
          textAlign="center"
          backdropFilter="blur(5px)"
          flexDir="column"
          align="center"
          justify="center"
          gap="20px"
        >
          <Heading pb="14px" fontFamily="title" color="white">
            Our Products
          </Heading>
          <Flex
            align="flex-end"
            justify="space-around"
            flexWrap="wrap"
            w="100%"
            gap="20px"
          >
            {coffeeProducts.map((product) => (
              <Box
                key={product.id}
                bg="white"
                maxW="400px"
                h="auto"
                boxShadow="lg"
                borderRadius="md"
                mb={8}
                color="black"
              >
                <Image
                  w="100%"
                  h="200px"
                  objectFit="cover"
                  src={product.imageSrc}
                  alt={product.altText}
                  borderTopRadius={"md"}
                />
                <Heading
                  size="md"
                  mt="4"
                  fontFamily={"title"}
                  letterSpacing={1}
                >
                  {product.name}
                </Heading>
                <Text p={4} pt={1} textAlign={"start"} mt="2">
                  {product.description}
                </Text>
              </Box>
            ))}
          </Flex>
        </Flex>
      </Box>
      <Flex
        direction={{ base: "column-reverse", lg: "row" }}
        align="center"
        justify="space-between"
      >
        {/* Text Content */}
        <Box
          flex="1"
          display={'flex'}
          flexDir={'column'}
          textAlign={{ base: "center", lg: "right" }}
          pr={{ base: "0", md: "30px" }}
          py="20px"
          letterSpacing={1}
          maxW={{base:'100%',lg:'50%'}}
          alignContent={{base:"center"}}
          justifyContent={{base:"center"}}
        >
          <Heading
            as="h1"
            fontSize={{ base: "2xl", md: "48px" }}
            mb="20px"
            fontWeight="bold"
            color="gray.800"
            textTransform={"capitalize"}
            letterSpacing={"2px"}
            // lineHeight={'45px'}
            fontFamily={"title"}
          >
            How aquilafarm <br /> coffee farming contributes <br /> to the UN
            SDGs
          </Heading>
          <Text fontSize="16px" color="gray.600" mb="20px">
            Read more about how our work contributes to the United Nations
            Sustainable Development Goals
          </Text>
          <Button
            fontWeight={"400"}
            letterSpacing={1}
            textAlign="center"
            alignItems="center"
            display="flex"
            justifyContent="space-between"
            w={"auto"}
            bg="#0f343f"
            mt={"20px"}
            outline="none"
            border="1px"
            borderColor={"#fff"}
            color={"#fff"}
            p="25px"
            borderRadius=".2rem"
            fontSize={"md"}
            gap={"20px"}
            alignSelf={{base:'center',lg:'flex-end'}}
          >
            <NavLink>Read more</NavLink>
            <FaArrowCircleRight fontSize={"18px"} />
          </Button>
        </Box>

        {/* Image Content */}
        <Box flex="0.8" p={"10px"} mt={{ base: "30px", md: "0" }}>
          <Image
            src={farmone} // Replace with your image
            alt="Women working in the coffee farm"
            objectFit="cover"
            borderRadius="10px"
            w="100%"
            h="100%"
          />
        </Box>
      </Flex>
      <Footer />
    </div>
  );
}

export default Home;

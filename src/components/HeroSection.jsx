import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import slidethree from "../assets/slide-03.jpg";
import slidefive from "../assets/slide-05.jpg";
import slideseven from "../assets/slide-09.jpg";

import { FaArrowCircleRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const HeroSection = () => {
  function CustomPrevArrow(props) {
    const { onClick } = props;
    return (
      <Box
        position="absolute"
        left="30px"
        top="50%"
        transform="translateY(-50%)"
        zIndex="2"
        bg="rgba(0, 0, 0, 0.5)"
        borderRadius="50%"
        p="10px"
        onClick={onClick}
        color="gray.500"
        _hover={{ color: "gray.200" }}
        display={"none"}
        cursor="pointer"
        className="arrow arrow-prev"
      >
        <FaChevronLeft fontSize={'20px'} />
      </Box>
    );
  }

  // Custom Arrow for Next
  function CustomNextArrow(props) {
    const { onClick } = props;
    return (
      <Box
        position="absolute"
        right="30px"
        top="50%"
        transform="translateY(-50%)"
        zIndex="2"
        bg="rgba(0, 0, 0, 0.5)"
        borderRadius="50%"
        p="10px"
        onClick={onClick}
        color="gray.500"
        _hover={{ color: "gray.200" }}
        cursor="pointer"
        display={"none"}
        className="arrow arrow-next"
      >
        <FaChevronRight fontSize={"20px"} />
      </Box>
    );
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    arrows: true,
    fade:true,
    cssEase: "linear",
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  // Array of slide content
  const slides = [
    {
      heading: (
        <>
          Sourcing the Finest <br /> Coffee Beans
        </>
      ),
      text: (
        <>
          We specialize in exporting premium coffee directly from our farm to
          your cup. Experience the rich flavors of nature.
          <Text display={{ base: "none", md: "inline" }}>
            {" "}
            Our coffee farm is located in the lush, fertile lands where coffee
            grows abundantly.
          </Text>
        </>
      ),
      textAlign: "start",
      img: `${slidefive}`,
      button_text: "Explore more",
    },

    {
      heading: (
        <>
          Sustainable Farming, <br /> Unmatched Flavor
        </>
      ),
      text: (
        <>
          At the heart of our coffee is a commitment to the environment. Our
          sustainable farming methods not only protect the planet but also bring
          out the finest flavors in our beans.
          <Text display={{ base: "none", md: "inline" }}>
            {" "}
            We believe in doing right by nature while delivering an
            extraordinary coffee experience.
          </Text>
        </>
      ),
      textAlign: "start",
      img: `${slidethree}`,
      button_text: "Get quote",
    },
    {
      heading: "Crafting the Perfect Cup of Coffee",
      text: (
        <>
          Our coffee tells a story — a story of craftsmanship, quality, and
          passion. We work with local farmers, ensuring the best practices are
          used{" "}
          <Text display={{ base: "none", md: "inline" }}>
            {" "}
            to bring you coffee that's rich, smooth, and unforgettable. Elevate
            your coffee moments with us.
          </Text>
        </>
      ),
      textAlign: "start",
      img: `${slideseven}`,
      button_text: "About us",
    },
  ];

  return (
    <Box
      position="relative"
      role="group"
      _hover={{
        ".arrow": {
          display: { base: "none", md: "block" },
        },
      }}
      style={{ touchAction: "none" }}
    >
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <Box
            key={index}
            h={{ base: "50vh", md: "92vh" }}
            position="relative"
            bgImage={`url(${slide.img})`}
            bgSize="cover"
            bgPosition="center"
            bgRepeat="no-repeat"
          >
            {/* Backdrop Filter for blur effect */}
            <Flex
              justifyContent="center"
              alignItems="center"
              h="100%"
              p={{ base: "2px", md: "20px" }}
              color="#fff"
              textAlign={slide.textAlign}
              zIndex={2}
            >
              <Box
                w={"100%"}
                h={"100%"}
                top={0}
                left={0}
                pos={"absolute"}
                bg="rgba(0, 0, 0, 0.65)"
                p="20px"
                borderRadius="md"
                display={"flex"}
                flexDir={"column"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Box maxW={{ base: "100%", md: "60%" }} letterSpacing={"1px"}>
                  <Heading
                    as="h2"
                    fontFamily={"cinzel"}
                    fontSize={{ base: "26px", md: "2xl", lg: "48px" }}
                    flex={1}
                    fontWeight={"900"}
                  >
                    {slide.heading}
                  </Heading>
                  <Text maxW={"700px"} mt="4" fontSize="md" flex={1}>
                    {slide.text}
                  </Text>
                  <Button
                    fontWeight={"400"}
                    letterSpacing={1}
                    textAlign="center"
                    alignItems="center"
                    display="flex"
                    justifyContent="space-between"
                    p="2px"
                    w={"auto"}
                    // bg="none"
                    mt={"20px"}
                    outline="none"
                    border="1px"
                    borderColor={"#fff"}
                    borderRadius=".2rem"
                    bg={"#fff"}
                    fontSize={"md"}
                    px={"6px"}
                    gap={"20px"}
                    align={"flex-start"}
                  >
                    <NavLink>{slide.button_text}</NavLink>
                    <FaArrowCircleRight fontSize={"18px"} />
                  </Button>
                </Box>
              </Box>
            </Flex>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default HeroSection;

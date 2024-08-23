import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
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
  }
];

const SdgCards = () => {
  return (
    <Flex wrap="wrap" justifyContent="space-around"  p={8} bg="gray.100">
      <Heading fontFamily={'title'} pt={'40px' }>SDG Impacts <br />coffee farming brings:</Heading>
      {sdgImpacts.map((impact, index) => (
        <Box
          key={index}
          bg="white"
          w="300px"
          h="auto"
          m={4}
          p={4}
          boxShadow="lg"
          borderRadius="md"
        >
          <Heading size="md" fontFamily={'title'} mt="4">
            {impact.title}
          </Heading>
          <Text mt="2">{impact.description}</Text>
        </Box>
      ))}
    </Flex>
  );
};

export default SdgCards;

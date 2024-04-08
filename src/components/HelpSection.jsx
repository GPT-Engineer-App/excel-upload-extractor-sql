import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

const HelpSection = () => {
  return (
    <Box>
      <Heading size="lg" mb={4}>
        Help
      </Heading>
      <Text>Welcome to the ID Card Management System! Here's how to use the system:</Text>
      <Text mt={4}>1. ID Card Data Formatter: Upload a zip file containing XLS and JPG files to format the ID card data.</Text>
      <Text mt={2}>2. Register ID Card: Upload an Excel file to import the ID card data into the SQL database.</Text>
      <Text mt={4}>If you encounter any issues or have questions, please contact our support team.</Text>
    </Box>
  );
};

export default HelpSection;

import React from "react";
import { Box, Button, HStack } from "@chakra-ui/react";

const Navigation = ({ activeSection, setActiveSection }) => {
  return (
    <Box bg="gray.100" py={4}>
      <HStack spacing={4} justifyContent="center">
        <Button onClick={() => setActiveSection("formatter")} variant={activeSection === "formatter" ? "solid" : "ghost"} colorScheme="blue">
          ID Card Data Formatter
        </Button>
        <Button onClick={() => setActiveSection("register")} variant={activeSection === "register" ? "solid" : "ghost"} colorScheme="blue">
          Register ID Card
        </Button>
        <Button onClick={() => setActiveSection("help")} variant={activeSection === "help" ? "solid" : "ghost"} colorScheme="blue">
          Help
        </Button>
      </HStack>
    </Box>
  );
};

export default Navigation;

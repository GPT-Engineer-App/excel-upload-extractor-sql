import React from "react";
import { Box, Button, VStack } from "@chakra-ui/react";

const Navigation = ({ activeSection, setActiveSection }) => {
  return (
    <Box bg="gray.100" p={4} minHeight="100vh">
      <VStack spacing={4} align="stretch">
        <Button onClick={() => setActiveSection("formatter")} variant={activeSection === "formatter" ? "solid" : "ghost"} colorScheme="blue">
          ID Card Data Formatter
        </Button>
        <Button onClick={() => setActiveSection("register")} variant={activeSection === "register" ? "solid" : "ghost"} colorScheme="blue">
          Register ID Card
        </Button>
        <Button onClick={() => setActiveSection("help")} variant={activeSection === "help" ? "solid" : "ghost"} colorScheme="blue">
          Help
        </Button>
      </VStack>
    </Box>
  );
};

export default Navigation;

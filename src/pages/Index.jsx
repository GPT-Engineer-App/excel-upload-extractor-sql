import React, { useState } from "react";
import { Box, Container, Heading, HStack } from "@chakra-ui/react";
import Navigation from "../components/Navigation";
import IDCardFormatter from "../components/IDCardFormatter";
import RegisterIDCard from "../components/RegisterIDCard";
import HelpSection from "../components/HelpSection";

const Index = () => {
  const [activeSection, setActiveSection] = useState("formatter");

  return (
    <Container maxW="container.lg" py={8}>
      <HStack spacing={8} align="stretch">
        <Box flex="0 0 200px">
          <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
        </Box>
        <Box flex="1">
          <Heading size="xl" textAlign="center" mb={8}>
            ID Card Management System
          </Heading>
          {activeSection === "formatter" ? <IDCardFormatter /> : activeSection === "register" ? <RegisterIDCard /> : <HelpSection />}
        </Box>
      </HStack>
    </Container>
  );
};

export default Index;

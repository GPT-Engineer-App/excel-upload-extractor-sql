import React, { useState } from "react";
import { Container, Heading, VStack } from "@chakra-ui/react";
import Navigation from "../components/Navigation";
import IDCardFormatter from "../components/IDCardFormatter";
import RegisterIDCard from "../components/RegisterIDCard";
import HelpSection from "../components/HelpSection";

const Index = () => {
  const [activeSection, setActiveSection] = useState("formatter");

  return (
    <Container maxW="container.lg" py={8}>
      <VStack spacing={8} align="stretch">
        <Heading size="xl" textAlign="center">
          ID Card Management System
        </Heading>
        <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
        {activeSection === "formatter" ? <IDCardFormatter /> : activeSection === "register" ? <RegisterIDCard /> : <HelpSection />}
      </VStack>
    </Container>
  );
};

export default Index;

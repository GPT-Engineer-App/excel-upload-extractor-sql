import React, { useState } from "react";
import { Container, Heading, VStack, Slide } from "@chakra-ui/react";
import Navigation from "../components/Navigation";
import IDCardFormatter from "../components/IDCardFormatter";
import RegisterIDCard from "../components/RegisterIDCard";

const Index = () => {
  const [activeSection, setActiveSection] = useState("formatter");

  return (
    <Container maxW="container.lg" py={8}>
      <VStack spacing={8} align="stretch">
        <Heading size="xl" textAlign="center">
          ID Card Management System
        </Heading>
        <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
        <Slide direction="left" in={activeSection === "formatter"} style={{ zIndex: 1 }}>
          {activeSection === "formatter" && <IDCardFormatter />}
        </Slide>
        <Slide direction="right" in={activeSection === "register"} style={{ zIndex: 1 }}>
          {activeSection === "register" && <RegisterIDCard />}
        </Slide>
      </VStack>
    </Container>
  );
};

export default Index;

import React from "react";
import { Box, IconButton } from "@chakra-ui/react";
import { FaEllipsisV } from "react-icons/fa";

const ThreeDotMenu = ({ isMenuVisible, toggleMenu }) => {
  return (
    <Box position="absolute" top={4} left={4}>
      <IconButton icon={<FaEllipsisV />} variant="ghost" onClick={toggleMenu} aria-label="Toggle Menu" />
    </Box>
  );
};

export default ThreeDotMenu;

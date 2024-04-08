import React, { useState } from "react";
import { Box, Button, FormControl, FormLabel, Input, Text, VStack } from "@chakra-ui/react";
import { FaFileArchive, FaUpload } from "react-icons/fa";

const IDCardFormatter = () => {
  const [zipFile, setZipFile] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleZipFileChange = (e) => {
    setZipFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!zipFile) {
      setErrorMessage("Please select a zip file.");
      return;
    }

    setIsUploading(true);
    setErrorMessage("");

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      setIsSuccess(true);
    } catch (error) {
      setErrorMessage("An error occurred while uploading the file.");
    }

    setIsUploading(false);
  };

  return (
    <VStack spacing={6} align="stretch">
      <FormControl>
        <FormLabel>Select Zip File</FormLabel>
        <Input type="file" accept=".zip" onChange={handleZipFileChange} />
      </FormControl>
      {zipFile && (
        <Box borderWidth={1} borderRadius="md" p={4}>
          <Text>
            Selected File: <strong>{zipFile.name}</strong>
          </Text>
        </Box>
      )}
      {errorMessage && (
        <Text color="red.500" textAlign="center">
          {errorMessage}
        </Text>
      )}
      <Button leftIcon={<FaUpload />} colorScheme="blue" onClick={handleUpload} isLoading={isUploading} loadingText="Uploading...">
        Upload and Process
      </Button>
      {isSuccess && (
        <Box borderWidth={1} borderRadius="md" p={4} bg="green.100">
          <Text color="green.800" textAlign="center">
            <FaFileArchive /> Zip file processed successfully!
          </Text>
        </Box>
      )}
    </VStack>
  );
};

export default IDCardFormatter;

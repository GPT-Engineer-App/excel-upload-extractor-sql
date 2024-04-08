import React, { useState } from "react";
import { Box, Button, Container, FormControl, FormLabel, Heading, Input, Text, VStack } from "@chakra-ui/react";
import { FaFileExcel, FaUpload } from "react-icons/fa";

const Index = () => {
  const [file, setFile] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      setErrorMessage("Please select an Excel file.");
      return;
    }

    setIsUploading(true);
    setErrorMessage("");

    try {
      // Simulating file upload and processing
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Extract data from Excel file
      const data = await extractDataFromExcel(file);

      // Import data into SQL database
      await importDataToDatabase(data);

      setIsSuccess(true);
    } catch (error) {
      setErrorMessage("An error occurred while uploading the file.");
    }

    setIsUploading(false);
  };

  const extractDataFromExcel = async (file) => {
    // Simulating data extraction from Excel file
    return [
      { name: "John Doe", age: 30 },
      { name: "Jane Smith", age: 25 },
      // ...
    ];
  };

  const importDataToDatabase = async (data) => {
    // Simulating data import into SQL database
    console.log("Importing data into SQL database:", data);
    // Perform actual database import logic here
  };

  return (
    <Container maxW="container.sm" py={8}>
      <VStack spacing={6} align="stretch">
        <Heading size="xl" textAlign="center">
          Excel to SQL Importer
        </Heading>
        <FormControl>
          <FormLabel>Select Excel File</FormLabel>
          <Input type="file" accept=".xlsx, .xls" onChange={handleFileChange} />
        </FormControl>
        {file && (
          <Box borderWidth={1} borderRadius="md" p={4}>
            <Text>
              Selected File: <strong>{file.name}</strong>
            </Text>
          </Box>
        )}
        {errorMessage && (
          <Text color="red.500" textAlign="center">
            {errorMessage}
          </Text>
        )}
        <Button leftIcon={<FaUpload />} colorScheme="blue" onClick={handleUpload} isLoading={isUploading} loadingText="Uploading...">
          Upload and Import
        </Button>
        {isSuccess && (
          <Box borderWidth={1} borderRadius="md" p={4} bg="green.100">
            <Text color="green.800" textAlign="center">
              <FaFileExcel /> Data imported successfully!
            </Text>
          </Box>
        )}
      </VStack>
    </Container>
  );
};

export default Index;

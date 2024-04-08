import React, { useState } from "react";
import { Box, Button, FormControl, FormLabel, Input, Text, VStack } from "@chakra-ui/react";
import { FaFileExcel, FaUpload } from "react-icons/fa";

const RegisterIDCard = () => {
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
      await new Promise((resolve) => setTimeout(resolve, 2000));

      const data = await extractDataFromExcel(file);

      await importDataToDatabase(data);

      setIsSuccess(true);
    } catch (error) {
      setErrorMessage("An error occurred while uploading the file.");
    }

    setIsUploading(false);
  };

  const extractDataFromExcel = async (file) => {
    return [
      { name: "John Doe", age: 30 },
      { name: "Jane Smith", age: 25 },
    ];
  };

  const importDataToDatabase = async (data) => {
    console.log("Importing data into SQL database:", data);
  };

  return (
    <VStack spacing={6} align="stretch">
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
  );
};

export default RegisterIDCard;

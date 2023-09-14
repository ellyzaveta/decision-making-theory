import React, { useState } from 'react';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const FileUploader = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleUpload = () => {
    // Handle file upload logic here
    if (selectedFile) {
      console.log('Uploading:', selectedFile);
      // You can send the file to your server or perform any other necessary actions here.
    } else {
      console.error('No file selected.');
    }
  };

  return (
    <div>
      <input
        type="file"
        accept="image/*" // Define the accepted file types
        style={{ display: 'none' }}
        id="file-input"
        onChange={handleFileChange}
      />
      <label htmlFor="file-input">
        <Button
          variant="contained"
          component="span"
          startIcon={<CloudUploadIcon />}
        >
          Upload File
        </Button>
      </label>
      <Button
        variant="contained"
        color="primary"
        onClick={handleUpload}
        disabled={!selectedFile}
      >
        Confirm Upload
      </Button>
    </div>
  );
};

export default FileUploader;
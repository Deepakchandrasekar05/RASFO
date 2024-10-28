// src/pages/MyProjects.jsx
import React from "react";
import { Box, Typography } from "@mui/material";
import BackButton from '../components/BackButton';

const MyProjects = () => {
  return (
    <Box>
      {/* Back button */}
      <BackButton />

      {/* Page content */}
      <Typography variant="h4">My Projects</Typography>
      <Typography variant="body1">This is where your project list will appear.</Typography>
    </Box>
  );
};

export default MyProjects;

import React from "react";
import { Box, Button, Typography, AppBar, Toolbar } from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";

const ResearchPaperPage = () => {
  const { id } = useParams(); // Get the ID from the URL
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // Go back to the previous page
  };

  return (
    <Box sx={{ bgcolor: "#1b1b1b", minHeight: "100vh", color: "#fff", padding: "16px" }}>
      {/* Topbar */}
      <AppBar position="sticky" sx={{ bgcolor: "#2c2c2c", mb: 3 }}>
        <Toolbar>
          <Button onClick={handleBack} sx={{ color: "#fff", mr: 2 }}>
            ← Back
          </Button>
          <Typography variant="h6">Research Paper {id}</Typography>
        </Toolbar>
      </AppBar>

      {/* Paper Content */}
      <Box sx={{ padding: "16px", bgcolor: "#333", borderRadius: "8px", mb: 3 }}>
        <Typography variant="h4" gutterBottom>
          Research Paper {id} Title
        </Typography>
        <Typography variant="body1" gutterBottom>
          This is where the entire research paper content would be displayed.
        </Typography>
        {/* Add a viewer for the research paper content */}
      </Box>
    </Box>
  );
};

export default ResearchPaperPage;

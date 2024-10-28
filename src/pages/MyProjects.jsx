import React from "react";
import { Box, Typography, Button, Grid } from "@mui/material";
import FolderCard from "../components/FolderCard";

const MyProjects = () => {
  return (
    <Box sx={{ mt: 2 }}>
      {/* Title and New Buttons */}
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}>
        <Typography variant="h5" sx={{color: "#fff" }}>Projects</Typography>
        <Box>
          <Button
            variant="contained"
            sx={{
              bgcolor: "#4F4F4F",
              color: "#fff",
              mr: 2,
              transition: "all 0.3s",
              "&:hover": {
                transform: "scale(1.05)",
                boxShadow: "0 6px 15px rgba(0, 0, 0, 0.2)",
              },
            }}
          >
            New Document
          </Button>
          <Button
            variant="contained"
            sx={{
              bgcolor: "#4F4F4F",
              color: "#fff",
              mr: 2,
              transition: "all 0.3s",
              "&:hover": {
                transform: "scale(1.05)",
                boxShadow: "0 6px 15px rgba(0, 0, 0, 0.2)",
              },
            }}
          >
            New Project
          </Button>
          <Button
            variant="contained"
            sx={{
              bgcolor: "#4F4F4F",
              color: "#fff",
              transition: "all 0.3s",
              "&:hover": {
                transform: "scale(1.05)",
                boxShadow: "0 6px 15px rgba(0, 0, 0, 0.2)",
              },
            }}
          >
            New Team
          </Button>
        </Box>
      </Box>

      {/* Project Cards */}
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <FolderCard title="Research Paper 1" images={18} size="10 MB"  previewImage="src/images/rs paper.jpg"/>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <FolderCard title="Research Paper 2" images={20} size="18 MB"  previewImage="src/images/rs paper.jpg" />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <FolderCard title="Research Paper 3" images={6} size="26 MB"  previewImage="src/images/rs paper.jpg"/>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <FolderCard title="Research Paper 4" images={24} size="1.2 MB"  previewImage="src/images/rs paper.jpg"/>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <FolderCard title="Research Paper 5" images={20} size="2 MB"  previewImage="src/images/rs paper.jpg"/>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MyProjects;

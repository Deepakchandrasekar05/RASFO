import React from "react";
import { Box, Typography, Button, Grid } from "@mui/material";
import FolderCard from "../components/FolderCard";

const Favorites = () => {
  return (
    <Box sx={{ mt: 2 }}>
      {/* Title and New Buttons */}
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}>
        <Typography variant="h5" sx={{ color: "#fff" }}>Favorites</Typography>
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

      {/* Folder Cards */}
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <FolderCard title="Favorite Paper 1" images={10} size="5 MB" previewImage="src/images/rs paper.jpg"/>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <FolderCard title="Favorite Paper 2" images={12} size="15 MB" previewImage="src/images/rs paper.jpg"/>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Favorites;

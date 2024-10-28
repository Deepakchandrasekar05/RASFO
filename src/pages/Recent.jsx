// Recent.jsx

import React from "react";
import { Box, Typography, Grid, Card, CardContent, CardMedia } from "@mui/material";

const recentFiles = [
  { id: 1, title: "Research Paper 1", date: "Modified 2 days ago", previewImage: "src/images/rs paper.jpg" },
  { id: 2, title: "Research Paper 2", date: "Modified 4 days ago", previewImage: "src/images/rs paper.jpg" },
  { id: 3, title: "Research Paper 3", date: "Modified 6 days ago", previewImage: "src/images/rs paper.jpg" },
];

const Recent = () => {
  return (
    <Box sx={{ padding: "24px", color: "#fff" }}>
      <Typography variant="h4" sx={{ mb: 4 }}>
        Recent Files
      </Typography>

      <Grid container spacing={4}>
        {recentFiles.map((file) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={file.id}>
            <Card
              sx={{
                backgroundColor: "#2d2d2d",
                color: "#fff",
                borderRadius: "8px",
                transition: "0.3s",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
                },
              }}
            >
              <CardMedia
                component="img"
                height="140"
                image={file.previewImage}
                alt={file.title}
                sx={{ borderTopLeftRadius: "8px", borderTopRightRadius: "8px" }}
              />
              <CardContent>
                <Typography variant="h6" sx={{ mb: 2 }}>
                  {file.title}
                </Typography>
                <Typography variant="body2" color="#fff">
                  {file.date}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Recent;

import React from "react";
import { Card, CardContent, Typography, Box, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";

const FolderCard = ({ title, images, size, previewImage, paperId }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/paper/${paperId}`);
  };

  return (
    <Card
      sx={{
        bgcolor: "#2c2c2c",
        color: "#fff",
        height: "100%",
        borderRadius: "8px",
        transition: "0.3s",
        cursor: "pointer",
        "&:hover": {
          transform: "scale(1.05)",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
        },
      }}
      onClick={handleCardClick} // Navigate to the detailed page on click
    >
      <CardContent>
        {/* Image preview (if available) */}
        {previewImage && (
          <Box
            component="img"
            src={previewImage}
            alt={`${title} preview`}
            sx={{
              width: "100%",
              height: "150px",
              objectFit: "cover",
              borderRadius: "4px",
              mb: 2,
            }}
          />
        )}

        {/* Paper title */}
        <Typography variant="h6" sx={{ mb: 1 }}>
          {title}
        </Typography>

        {/* Paper details */}
        <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
          <Typography variant="body2">{images} images</Typography>
          <Typography variant="body2">{size}</Typography>
          
        </Box>
      </CardContent>
    </Card>
  );
};

export default FolderCard;

import React from "react";
import { Box, Button, Typography, Paper } from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import BackButton from "../components/BackButton";

const DocumentViewer = () => {
  const { id } = useParams();
  const navigate = useNavigate(); // Get the document ID from URL parameters

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        padding: 3,
        bgcolor: "background.default",
        color: "text.primary",
        height: "calc(95vh - 64px)", // Adjust height to fit within available screen space
      }}
    >
      <BackButton />
      {/* Preview Section */}
      <Box
        component={Paper}
        elevation={3}
        sx={{
          flex: 2,
          mr: 3,
          bgcolor: "background.paper",
          borderRadius: 2,
          padding: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          maxHeight: "600vh",
        }}
      >
        <Typography variant="h5" gutterBottom>
          Document Preview
        </Typography>
        {/* Document content preview */}
        <Box
          sx={{
            width: "90%", // Reduces width for compact look
            height: "700px", // Set specific height for compact preview
            bgcolor: "grey.200",
            borderRadius: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "text.secondary",
            mt: 2,
          }}
        >
          <Typography>Preview of Research Paper {id}</Typography>
        </Box>
      </Box>

      {/* Action Buttons Section */}
      <Box
        component={Paper}
        elevation={3}
        sx={{
          flex: 1,
          bgcolor: "background.paper",
          borderRadius: 2,
          padding: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
          justifyContent: "center",
          maxHeight: "600vh",
        }}
      >
        <Button
          variant="contained"
          color="#fff"
          fullWidth
          sx={{
            textTransform: "none",
            padding: 1,
            fontSize: "16px",
            borderRadius: 2,
            bgcolor: "#4F4F4F",
            "&:hover": {
              bgcolor: "#4F4F4F",
              transform: "scale(1.05)",
              boxShadow: "0 6px 15px rgba(0, 0, 0, 0.2)",
            },
          }}
        >
          Edit Document
        </Button>
        <Button
          variant="contained"
          color="#fff"
          fullWidth
          onClick={() => navigate("/latex-editor")}
          sx={{
            textTransform: "none",
            padding: 1,
            fontSize: "16px",
            borderRadius: 2,
            bgcolor: "#4F4F4F",
            "&:hover": {
              bgcolor: "#4F4F4F",
              transform: "scale(1.05)",
              boxShadow: "0 6px 15px rgba(0, 0, 0, 0.2)",
            },
          }}
        >
          Open LaTeX Editor
        </Button>
        <Button
          variant="contained"
          color="#fff"
          fullWidth
          sx={{
            textTransform: "none",
            padding: 1,
            fontSize: "16px",
            borderRadius: 2,
            bgcolor: "#4F4F4F",
            "&:hover": {
              bgcolor: "#4F4F4F",
              transform: "scale(1.05)",
              boxShadow: "0 6px 15px rgba(0, 0, 0, 0.2)",
            },
          }}
        >
          Download as PDF
        </Button>
      </Box>
    </Box>
  );
};

export default DocumentViewer;

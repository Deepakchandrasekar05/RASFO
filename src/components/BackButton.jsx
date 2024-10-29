// src/components/BackButton.jsx
import React from "react";
import { Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1); // Navigate to the previous page
  };

  return (
    <Button
      startIcon={<ArrowBackIcon />}
      onClick={goBack}
      sx={{
        marginBottom: 5,
        color: "#fff",
        bgcolor: "#444",
        textAlign: "left",
        justifyContent: "flex-start",
        "&:hover": { bgcolor: "#555" },
      }}
    >
      Back
    </Button>
  );
};

export default BackButton;

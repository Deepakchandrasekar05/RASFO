import React, { useState } from "react";
import { Box, Typography, Paper, TextField, Button } from "@mui/material";
import Latex from "react-latex-next"; // Ensure you install react-latex-next for LaTeX rendering

const LatexEditor = () => {
  const [latexCode, setLatexCode] = useState(""); // State to store LaTeX code

  const handleCodeChange = (event) => {
    setLatexCode(event.target.value); // Update the LaTeX code on input
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        height: "100vh",
        bgcolor: "background.default",
        color: "text.primary",
      }}
    >
      {/* Directory Explorer Section */}
      <Box
        component={Paper}
        elevation={3}
        sx={{
          flex: 1,
          bgcolor: "background.paper",
          borderRadius: 2,
          padding: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          justifyContent: "start",
          overflowY: "auto",
          maxHeight: "100vh",
        }}
      >
        <Typography variant="h6" sx={{ mb: 2 }}>
          Directory Explorer
        </Typography>
        {/* Add your directory structure or file list here */}
        <Typography variant="body2" sx={{ mt: 1, cursor: "pointer" }}>
          File1.tex
        </Typography>
        <Typography variant="body2" sx={{ mt: 1, cursor: "pointer" }}>
          File2.tex
        </Typography>
        {/* Additional files... */}
      </Box>

      {/* LaTeX Code Editor Section */}
      <Box
        component={Paper}
        elevation={3}
        sx={{
          flex: 2,
          bgcolor: "background.paper",
          borderRadius: 2,
          padding: 2,
          mx: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          overflowY: "auto",
          maxHeight: "100vh",
        }}
      >
        <Typography variant="h6" sx={{ mb: 2 }}>
          LaTeX Code Editor
        </Typography>
        <TextField
          multiline
          fullWidth
          variant="outlined"
          rows={20}
          value={latexCode}
          onChange={handleCodeChange}
          placeholder="Write your LaTeX code here..."
          sx={{
            width: "100%",
            height: "100%",
            bgcolor: "background.paper",
            color: "text.primary",
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "#ccc",
              },
              "&:hover fieldset": {
                borderColor: "#888",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#444",
              },
            },
          }}
        />
      </Box>

      {/* LaTeX Preview Section */}
      <Box
        component={Paper}
        elevation={3}
        sx={{
          flex: 1.5,
          bgcolor: "background.paper",
          borderRadius: 2,
          padding: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          overflowY: "auto",
          maxHeight: "100vh",
        }}
      >
        <Typography variant="h6" sx={{ mb: 2 }}>
          Preview
        </Typography>
        <Box
          sx={{
            width: "100%",
            height: "100%",
            bgcolor: "grey.200",
            padding: 2,
            borderRadius: 1,
            overflowY: "auto",
            color: "text.secondary",
          }}
        >
          <Latex>{latexCode || "Your LaTeX output will appear here..."}</Latex>
        </Box>
      </Box>
    </Box>
  );
};

export default LatexEditor;

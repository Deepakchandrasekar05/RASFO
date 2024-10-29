import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Grid,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import FolderCard from "../components/FolderCard";
import { pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const MyProjects = () => {
  const [open, setOpen] = useState(false); // Controls the upload dialog visibility
  const [projects, setProjects] = useState([
    // Initial static projects
    {
      title: "Research Paper 1",
      images: 18,
      size: "10 MB",
      previewImage: "src/images/rs paper.jpg",
    },
    {
      title: "Research Paper 2",
      images: 20,
      size: "18 MB",
      previewImage: "src/images/rs paper.jpg",
    },
    {
      title: "Research Paper 3",
      images: 6,
      size: "26 MB",
      previewImage: "src/images/rs paper.jpg",
    },
    {
      title: "Research Paper 4",
      images: 24,
      size: "1.2 MB",
      previewImage: "src/images/rs paper.jpg",
    },
    {
      title: "Research Paper 5",
      images: 20,
      size: "2 MB",
      previewImage: "src/images/rs paper.jpg",
    },
  ]);

  const [selectedFile, setSelectedFile] = useState(null); // To store the selected PDF file
  const [previewImage, setPreviewImage] = useState(null); // To store the preview image

  // Open and close the upload dialog
  const handleUploadClick = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setSelectedFile(null); // Reset file selection
    setPreviewImage(null); // Reset preview image
  };

  // Function to handle file selection
  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (file && file.type === "application/pdf") {
      setSelectedFile(file); // Store selected file
      const fileURL = URL.createObjectURL(file);
      const firstPageData = await renderPDFPreview(fileURL); // Generate preview
      setPreviewImage(firstPageData);
    }
  };

  // Function to save the PDF to projects list
  const handleSave = () => {
    if (selectedFile) {
      // Add the new PDF file to the projects list
      setProjects([
        ...projects,
        {
          title: selectedFile.name,
          images: 1,
          size: `${(selectedFile.size / 1024 / 1024).toFixed(2)} MB`,
          previewImage: previewImage,
        },
      ]);

      handleClose(); // Close dialog after saving
    }
  };

  // Function to render the first page of the PDF as a preview image
  const renderPDFPreview = async (fileURL) => {
    const pdf = await pdfjs.getDocument(fileURL).promise;
    const page = await pdf.getPage(1);
    const viewport = page.getViewport({ scale: 1 });
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    canvas.width = viewport.width;
    canvas.height = viewport.height;

    await page.render({ canvasContext: context, viewport }).promise;
    return canvas.toDataURL();
  };

  return (
    <Box sx={{ mt: 2 }}>
      {/* Title and New Buttons */}
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}>
        <Typography variant="h5" sx={{ color: "#fff" }}>
          Projects
        </Typography>
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
            onClick={handleUploadClick} // Open upload dialog
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
        </Box>
      </Box>

      {/* PDF Upload Dialog */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Upload PDF Document</DialogTitle>
        <DialogContent>
          <input
            type="file"
            accept="application/pdf"
            onChange={handleFileChange}
          />
          {previewImage && (
            <Box mt={2}>
              <img
                src={previewImage}
                alt="PDF Preview"
                style={{ width: "100%", height: "auto" }}
              />
            </Box>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleSave} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>

      {/* Project Cards */}
      <Grid container spacing={4}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <FolderCard
              title={project.title}
              images={project.images}
              size={project.size}
              previewImage={project.previewImage}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default MyProjects;

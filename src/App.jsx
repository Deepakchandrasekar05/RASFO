import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  Typography,
  IconButton,
  Drawer,
  Avatar,
  InputBase,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";
import Sidebar from "./components/Sidebar";
import MyProjects from "./pages/MyProjects";
import Recent from "./pages/Recent";
import Favorites from "./pages/Favorites";
import Shared from "./pages/Shared";
import AllFiles from "./pages/AllFiles";
import Settings from "./pages/Settings";
import ThemeProvider from "./ThemeContext";
import DocumentViewer from "./pages/DocumentViewer";
import FolderCard from "./components/FolderCard"; // Import the ThemeProvider
import DiagramPage from "./pages/DiagramPage";
import LatexEditor from "./pages/LatexEditor";
import { EmbedPDF } from "@simplepdf/react-embed-pdf";

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [darkTheme, setDarkTheme] = useState(true); // State to toggle theme

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  return (
    <ThemeProvider theme={darkTheme ? "dark" : "light"}>
      <Router>
        <Box
          sx={{
            display: "flex",
            minHeight: "100vh",
            overflow: "hidden",
            bgcolor: darkTheme ? "#1b1b1b" : "#fff",
          }}
        >
          {/* Sidebar Drawer */}
          <Drawer
            anchor="left"
            open={isSidebarOpen}
            onClose={toggleSidebar}
            sx={{
              "& .MuiDrawer-paper": {
                width: 250,
                bgcolor: darkTheme ? "#333" : "#f0f0f0",
              },
            }}
          >
            <Sidebar toggleSidebar={toggleSidebar} />
          </Drawer>

          {/* Main content */}
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              minHeight: "100vh",
              padding: "16px",
              overflowX: "hidden",
              bgcolor: darkTheme ? "#1b1b1b" : "#fff",
              color: darkTheme ? "#fff" : "#000",
            }}
          >
            {/* Topbar */}
            <AppBar
              position="sticky"
              sx={{
                bgcolor: darkTheme ? "#2c2c2c" : "#f7f7f7",
                color: darkTheme ? "#fff" : "#000",
              }}
            >
              <Toolbar>
                {/* Menu Icon */}
                <IconButton
                  color="inherit"
                  edge="start"
                  onClick={toggleSidebar}
                  sx={{ mr: 2 }}
                >
                  <MenuIcon />
                </IconButton>

                {/* Logo */}
                <img
                  src="/src/images/logo5.png" // Replace with actual path to your logo
                  alt="RASFO Logo"
                  style={{ height: 80, marginRight: 5 }}
                />

                {/* Title */}
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                  RASFO
                </Typography>

                {/* Search Bar */}
                <Box sx={{ display: "flex", alignItems: "center", mr: 2 }}>
                  <InputBase
                    sx={{
                      backgroundColor: darkTheme ? "#333" : "#e0e0e0",
                      borderRadius: 1,
                      padding: "0 10px",
                      color: darkTheme ? "#fff" : "#000",
                      width: "200px",
                      mr: 1,
                    }}
                    placeholder="Search"
                  />
                  <SearchIcon />
                </Box>

                {/* Profile Icon */}
                <IconButton
                  onClick={() => navigate("/diagram-page")}
                  sx={{ ml: 2 }}
                >
                  <Avatar alt="Profile" src="/static/images/avatar/1.jpg" />
                </IconButton>
              </Toolbar>
            </AppBar>

            {/* Routes */}
            <Routes>
              <Route path="/" element={<Navigate to="/my-projects" />} />{" "}
              {/* Redirect Home to My Projects */}
              <Route path="/my-projects" element={<MyProjects />} />
              <Route
                path="/document-viewer/:paperId"
                element={<DocumentViewer />}
              />
              <Route path="/diagram-page" element={<DiagramPage />} />
              <Route path="/recent" element={<Recent />} />
              <Route path="/favorites" element={<Favorites />} />
              <Route path="/shared" element={<Shared />} />
              <Route path="/all-files" element={<AllFiles />} />
              <Route path="/latex-editor" element={<LatexEditor />} />
              <Route
                path="/settings"
                element={<Settings onToggleTheme={toggleTheme} />}
              />
            </Routes>
          </Box>
        </Box>
      </Router>
    </ThemeProvider>
  );
};

export default App;

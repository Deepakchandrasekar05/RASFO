import React, { useState } from "react";
import { AppBar, Toolbar, Box, Button, Grid, Typography, IconButton, Drawer } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import MyProjects from "./pages/MyProjects";
import Recent from "./pages/Recent";
import Favorites from "./pages/Favorites";
import Shared from "./pages/Shared";
import AllFiles from "./pages/AllFiles";
import Settings from "./pages/Settings";
import ThemeProvider from "./ThemeContext";  // Import the ThemeProvider

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <ThemeProvider>
      <Router>
        <Box sx={{ display: "flex", minHeight: "100vh", overflow: "hidden" }}>
          {/* Sidebar Drawer */}
          <Drawer
            anchor="left"
            open={isSidebarOpen}
            onClose={toggleSidebar}
            sx={{
              "& .MuiDrawer-paper": {
                width: 250,
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
            }}
          >
            {/* Topbar */}
            <AppBar position="sticky">
              <Toolbar>
                <IconButton color="inherit" edge="start" onClick={toggleSidebar} sx={{ mr: 2 }}>
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                  RASFO
                </Typography>
                {/* Search Bar */}
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <input
                    type="text"
                    placeholder="Search"
                    style={{
                      padding: "8px",
                      borderRadius: "4px",
                      border: "1px solid #444",
                      marginRight: "10px",
                    }}
                  />
                  <Button variant="outlined">
                    Search
                  </Button>
                </Box>
              </Toolbar>
            </AppBar>

            {/* Routes */}
            <Routes>
              <Route path="/" element={<Navigate to="/my-projects" />} /> {/* Redirect Home to My Projects */}
              <Route path="/my-projects" element={<MyProjects />} />
              <Route path="/recent" element={<Recent />} />
              <Route path="/favorites" element={<Favorites />} />
              <Route path="/shared" element={<Shared />} />
              <Route path="/all-files" element={<AllFiles />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </Box>
        </Box>
      </Router>
    </ThemeProvider>
  );
};

export default App;

import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  InputBase,
  Avatar,
  IconButton,
} from "@mui/material";
import { Search as SearchIcon, Menu as MenuIcon } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const TopBar = () => {
  const navigate = useNavigate();

  // Handle click to navigate to Profile page
  const handleProfileClick = () => {
    navigate("/profile");
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        backgroundColor: "#1f1f1f",
      }}
    >
      <Toolbar>
        {/* Menu Icon */}
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>

        {/* Logo */}
        <img
          src="/src/images/rs paper.jpg" // Replace with actual path to logo
          alt="RASFO Logo"
          style={{ height: 35, marginRight: 10 }}
        />

        {/* Title */}
        <Typography variant="h6" noWrap component="div">
          RASFO1
        </Typography>

        <Box sx={{ flexGrow: 1 }} />

        {/* Search Input */}
        <Box sx={{ display: "flex", alignItems: "center", mr: 2 }}>
          <InputBase
            sx={{
              ml: 1,
              flex: 1,
              backgroundColor: "#333",
              borderRadius: 2,
              padding: "0 10px",
              color: "#fff",
            }}
            placeholder="Search"
          />
          <SearchIcon sx={{ color: "#fff", ml: 1 }} />
        </Box>

        {/* Profile Icon */}
        <IconButton onClick={handleProfileClick} sx={{ ml: 2 }}>
          <Avatar alt="Profile" src="/static/images/avatar/1.jpg" />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;

// Settings.jsx

import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Switch,
  Divider,
  IconButton,
} from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SecurityIcon from "@mui/icons-material/Security";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PaletteIcon from "@mui/icons-material/Palette";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import BackButton from "../components/BackButton";

const Settings = () => {
  return (
    <Box sx={{ padding: "24px", color: "#fff" }}>
      <Typography variant="h4" sx={{ mb: 4, color: "#ffffff" }}>
        Settings
      </Typography>
      <BackButton />

      <Grid container spacing={4}>
        {/* Account Settings */}
        <Grid item xs={12} sm={6}>
          <Card
            sx={{
              backgroundColor: "#2d2d2d",
              color: "#fff",
              borderRadius: "8px",
              transition: "0.3s",
              "&:hover": {
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.4)",
              },
            }}
          >
            <CardContent sx={{ display: "flex", alignItems: "center" }}>
              <AccountCircleIcon sx={{ fontSize: 40, mr: 2, color: "#fff" }} />
              <Box flexGrow={1}>
                <Typography variant="h6">Account</Typography>
                <Typography variant="body2" color="#fff">
                  Manage your account details
                </Typography>
              </Box>
              <IconButton sx={{ color: "#fff" }}>
                <ArrowForwardIosIcon />
              </IconButton>
            </CardContent>
          </Card>
        </Grid>

        {/* Notifications Settings */}
        <Grid item xs={12} sm={6}>
          <Card
            sx={{
              backgroundColor: "#2d2d2d",
              color: "#fff",
              borderRadius: "8px",
              transition: "0.3s",
              "&:hover": {
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.4)",
              },
            }}
          >
            <CardContent sx={{ display: "flex", alignItems: "center" }}>
              <NotificationsIcon sx={{ fontSize: 40, mr: 2, color: "#fff" }} />
              <Box flexGrow={1}>
                <Typography variant="h6">Notifications</Typography>
                <Typography variant="body2" color="#fff">
                  Customize your notifications
                </Typography>
              </Box>
              <Switch defaultChecked sx={{ ml: 2, color: "#fff" }} />
            </CardContent>
          </Card>
        </Grid>

        {/* Security Settings */}
        <Grid item xs={12} sm={6}>
          <Card
            sx={{
              backgroundColor: "#2d2d2d",
              color: "#fff",
              borderRadius: "8px",
              transition: "0.3s",
              "&:hover": {
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.4)",
              },
            }}
          >
            <CardContent sx={{ display: "flex", alignItems: "center" }}>
              <SecurityIcon sx={{ fontSize: 40, mr: 2, color: "#fff" }} />
              <Box flexGrow={1}>
                <Typography variant="h6">Security</Typography>
                <Typography variant="body2" color="#fff">
                  Protect your account
                </Typography>
              </Box>
              <IconButton sx={{ color: "#fff" }}>
                <ArrowForwardIosIcon />
              </IconButton>
            </CardContent>
          </Card>
        </Grid>

        {/* Theme Settings */}
      </Grid>
    </Box>
  );
};

export default Settings;

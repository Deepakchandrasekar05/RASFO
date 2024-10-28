import React from "react";
import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";
import FolderIcon from "@mui/icons-material/Folder";
import StarIcon from "@mui/icons-material/Star";
import ShareIcon from "@mui/icons-material/Share";
import SettingsIcon from "@mui/icons-material/Settings";

const Sidebar = ({ toggleSidebar }) => {
  return (
    <List>
      {/* My Projects */}
      <ListItem button component={Link} to="/my-projects" onClick={toggleSidebar}>
        <ListItemIcon>
          <FolderIcon sx={{ color: "#fff" }} />
        </ListItemIcon>
        <ListItemText primary="My Projects" sx={{ color: "#fff" }} />
      </ListItem>

      {/* Favorites */}
      <ListItem button component={Link} to="/favorites" onClick={toggleSidebar}>
        <ListItemIcon>
          <StarIcon sx={{ color: "#fff" }} />
        </ListItemIcon>
        <ListItemText primary="Favorites" sx={{ color: "#fff" }} />
      </ListItem>

      {/* Shared */}
      <ListItem button component={Link} to="/shared" onClick={toggleSidebar}>
        <ListItemIcon>
          <ShareIcon sx={{ color: "#fff" }} />
        </ListItemIcon>
        <ListItemText primary="Shared" sx={{ color: "#fff" }} />
      </ListItem>

      {/* Settings */}
      <ListItem button component={Link} to="/settings" onClick={toggleSidebar}>
        <ListItemIcon>
          <SettingsIcon sx={{ color: "#fff" }} />
        </ListItemIcon>
        <ListItemText primary="Settings" sx={{ color: "#fff" }} />
      </ListItem>
    </List>
  );
};

export default Sidebar;

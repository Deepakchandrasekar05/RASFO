import React from "react";
import { AppBar, Toolbar, Typography, Box, InputBase, Avatar } from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";

const TopBar = () => {
  return (
    <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, backgroundColor: '#1f1f1f' }}>
      <Toolbar>
        <Typography variant="h6" noWrap>
          RASFO
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <InputBase
            sx={{ ml: 1, flex: 1, backgroundColor: '#333', borderRadius: 2, padding: '0 10px', color: '#fff' }}
            placeholder="Search"
          />
          <SearchIcon sx={{ color: '#fff', ml: 1 }} />
          <Avatar alt="Profile" src="/static/images/avatar/1.jpg" sx={{ ml: 2 }} />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;

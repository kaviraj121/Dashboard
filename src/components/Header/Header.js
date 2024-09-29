import React, { useContext } from 'react';
import { AppBar, Toolbar, IconButton, Box, Typography, InputBase } from '@mui/material';
import { ThemeContext } from '../../context/ThemeContext';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import SearchIcon from '@mui/icons-material/Search'; // Import Search icon
import AvTimerIcon from '@mui/icons-material/AvTimer'; // Import AvTimer icon
import NotificationsIcon from '@mui/icons-material/Notifications'; // Import Notifications icon
import ViewSidebarIcon from '@mui/icons-material/ViewSidebar'; // Import ViewSidebar icon
import { useTheme } from '@mui/material/styles';

const Header = () => {
  const { toggleTheme, isLightMode } = useContext(ThemeContext);
  const theme = useTheme();

  return (
    <AppBar 
      position="static" 
      sx={{ 
        width: '948px', 
        height: '68px', 
        left: '212px', 
        backgroundColor: theme.palette.mode === 'dark' ? 'black' : 'white',
        opacity: 1, 
        borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
        borderLeft: (theme) => `1px solid ${theme.palette.divider}`,
        boxShadow: 'none',
      }}
    >
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', height: '100%' }}>
        {/* Container for the new layout */}
        <Box 
          sx={{ 
            width: '256px', 
            height: '28px', 
            display: 'flex', 
            alignItems: 'center', 
            gap: '8px', 
            opacity: 1
          }}
        >
          {/* View Sidebar Button */}
          <IconButton 
            sx={{ 
              width: 'var(--Size20)', 
              height: 'var(--Size20)', 
              gap: '0px', 
              opacity: 1,
              color: theme.palette.mode === 'dark' ? 'white' : 'black',
            }}
          >
            <ViewSidebarIcon />
          </IconButton>

          {/* Star Button */}
          <IconButton 
            sx={{ 
              width: 'var(--Size20)', 
              height: 'var(--Size20)', 
              gap: '0px', 
              opacity: 1,
              color: theme.palette.mode === 'dark' ? 'white' : 'black',
            }}
          >
            <StarBorderIcon />
          </IconButton>

          {/* Dashboard Text */}
          <Typography 
            sx={{ 
              fontFamily: 'Inter', 
              fontSize: '14px', 
              fontWeight: 400, 
              lineHeight: '20px', 
              textAlign: 'center', 
              color: theme.palette.mode === 'dark' ? 'white' : 'black' 
            }}
          >
            Dashboards / Default
          </Typography>
        </Box>

        {/* Search Box Layout */}
        <Box 
          sx={{ 
            width: '316px', 
            height: 'auto', 
            display: 'flex', 
            alignItems: 'center', 
            gap: 'var(--20)', 
            opacity: 1,
          }}
        >
          {/* Inner Box for Search Input */}
          <Box 
            sx={{ 
              width: '160px', 
              height: 'auto', 
              padding: '4px 8px', 
              gap: 'var(--8)', 
              borderRadius: 'var(--8)', 
              bgcolor: '#1C1C1C0D',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            {/* Search Icon */}
            <IconButton sx={{ padding: 0 }}>
              <SearchIcon />
            </IconButton>

            {/* Search Input */}
            <InputBase 
              placeholder="Search"
              sx={{ 
                width: '116px', 
                height: 'auto', 
                borderRadius: 'var(--8)', 
                fontFamily: 'Inter',
                fontSize: '14px',
                fontWeight: 400,
              }}
            />
            <Typography 
              sx={{ 
                fontFamily: 'Inter', 
                fontSize: '14px', 
                fontWeight: 400, 
                lineHeight: '20px', 
                textAlign: 'left',
                color: '#1C1C1C33'
              }}
            >
              ⌘/
            </Typography>
          </Box>

          {/* Theme Toggle Button */}
          <IconButton onClick={toggleTheme} sx={{ color: theme.palette.mode === 'dark' ? 'white' : 'black' }}>
            {theme.palette.mode ? <LightModeIcon /> : <DarkModeIcon />}
          </IconButton>

          {/* AvTimer Button */}
          <IconButton sx={{ color: theme.palette.mode === 'dark' ? 'white' : 'black' }}>
            <AvTimerIcon />
          </IconButton>

          {/* Notifications Button */}
          <IconButton sx={{ color: theme.palette.mode === 'dark' ? 'white' : 'black' }}>
            <NotificationsIcon />
          </IconButton>

          {/* View Sidebar Button */}
          <IconButton sx={{ color: theme.palette.mode === 'dark' ? 'white' : 'black' }}>
            <ViewSidebarIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

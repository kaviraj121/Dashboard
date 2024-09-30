import React, { useContext } from 'react';
import { AppBar, Toolbar, IconButton, Box, Typography, InputBase } from '@mui/material';
import { ThemeContext } from '../../context/ThemeContext';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import SearchIcon from '@mui/icons-material/Search';
import AvTimerIcon from '@mui/icons-material/AvTimer';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ViewSidebarIcon from '@mui/icons-material/ViewSidebar';
import { useTheme } from '@mui/material/styles';

const HeaderList = () => {
  const { toggleTheme, isLightMode } = useContext(ThemeContext);
  const theme = useTheme();

  return (
    <AppBar 
      position="static" 
      sx={{ 
        width: '1228px', 
        height: '68px', 
        left: '212px', 
        padding: 'var(--20) var(--28) var(--20) var(--28)', 
        gap: '0px', 
        borderBottom: (theme) => `1px solid ${theme.palette.divider}`, 
        borderLeft: (theme) => `1px solid ${theme.palette.divider}`, 
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? 'black' : 'white',
        boxShadow: 'none',
      }}
    >
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', height: '100%' }}>
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
            <IconButton sx={{ padding: 0 }}>
              <SearchIcon />
            </IconButton>

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

          <IconButton onClick={toggleTheme} sx={{ color: theme.palette.mode === 'dark' ? 'white' : 'black' }}>
            {isLightMode ? <LightModeIcon /> : <DarkModeIcon />}
          </IconButton>

          <IconButton sx={{ color: theme.palette.mode === 'dark' ? 'white' : 'black' }}>
            <AvTimerIcon />
          </IconButton>

          <IconButton sx={{ color: theme.palette.mode === 'dark' ? 'white' : 'black' }}>
            <NotificationsIcon />
          </IconButton>
          
          <IconButton sx={{ color: theme.palette.mode === 'dark' ? 'white' : 'black' }}>
            <ViewSidebarIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default HeaderList;

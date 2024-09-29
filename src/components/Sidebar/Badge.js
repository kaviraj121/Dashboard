import React from 'react';
import { Box, useTheme } from '@mui/material';

const Badge = () => {
  const theme = useTheme(); // Get the current theme

  return (
    <Box
      sx={{
        width: '180px', 
        height: '32px', 
        padding: '4px', 
        gap: 'var(--8)', 
        borderRadius: 'var(--8)', 
        opacity: 1, 
        display: 'flex', 
        alignItems: 'center',
        justifyContent: 'flex-start', 
        backgroundColor: theme.palette.background.default, // Set background based on theme
        color: theme.palette.text.primary, // Set text color based on theme
      }}
    >
      <img
        src="./Image/IconSet.png" 
        alt="Badge Icon"
        style={{
          width: '24px', 
          height: '24px', 
          borderRadius: 'var(--Radius8)', 
          opacity: 1, 
          marginRight: '8px', 
        }}
      />
      ByeWind
    </Box>
  );
};

export default Badge;

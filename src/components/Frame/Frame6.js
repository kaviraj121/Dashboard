import React from 'react';
import { Box, Typography } from '@mui/material';

const Frame6 = () => {
  return (
    <Box
      sx={{
        width: '100%', // Fill width
        height: '252px', // Fixed height for Frame 6
        padding: '24px',
        borderRadius: '16px',
        bgcolor: '#FF5722', // Background color for Frame 6
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Typography
        sx={{
          fontFamily: 'Inter',
          fontSize: '24px',
          fontWeight: 600,
          lineHeight: '36px',
          textAlign: 'center',
          color: '#FFFFFF', // Text color for contrast
        }}
      >
        Frame 6 Content
      </Typography>
    </Box>
  );
};

export default Frame6;

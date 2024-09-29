import React from 'react';
import { Box } from '@mui/material';

const Badge = () => {
  return (
    <Box
      sx={{
        width: '180px', // Fill width as specified
        height: '32px', // Hug height as specified
        padding: '4px', // Padding set to 4
        gap: 'var(--8)', // Gap as per Figma
        borderRadius: 'var(--8)', // Border radius as per Figma
        opacity: 1, // Opacity set to 1 to make it visible
        backgroundColor: '#ffff', // Example background color
        display: 'flex', // Use flexbox for layout
        alignItems: 'center', // Center items vertically
        justifyContent: 'flex-start', // Align items to the start
      }}
    >
      <img
        src="./Image/IconSet.png" // Replace with your image path
        alt="Badge Icon"
        style={{
          width: '24px', // Hug width as specified
          height: '24px', // Hug height as specified
          borderRadius: 'var(--Radius8)', // Border radius as per Figma
          opacity: 1, // Set opacity to 1 to make it visible
          marginRight: '8px', // Add space between the image and text
        }}
      />
      ByeWind
    </Box>
  );
};

export default Badge;

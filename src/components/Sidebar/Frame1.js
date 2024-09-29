import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';

const Frame1 = () => {
  const theme = useTheme(); // Access the theme

  return (
    <Box
      sx={{
        width: '180px', // Fill (180px)
        height: '104px', // Hug (104px)
        padding: '0px 0px var(--12) 0px', // Padding
        gap: 'var(--4)', // Gap
        opacity: 1, // Set opacity to 1 for visibility
        marginTop: '16px', // Add top gap to Frame1
      }}
    >
      {/* First Row with 2 "Text" Buttons */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between', // Align items side by side
          alignItems: 'center', // Align items vertically center
          width: '180px', // Fill (180px)
          height: '28px', // Set to appropriate height for visibility
          gap: 'var(--8)', // Gap between items
          marginBottom: '8px', // Optional: space between rows
          paddingLeft: '12px', // Add left padding for first row
        }}
      >
        {/* "Favourite" Text */}
        <Typography
          sx={{
            cursor: 'pointer', // Indicate clickable text
            color: theme.palette.mode === 'light' ? 'black' : 'white', // Text color based on theme mode
            '&:hover': {
              textDecoration: 'none', // Underline on hover
              color: theme.palette.mode === 'light' ? '#555' : '#bbb', // Darken color on hover
            },
          }}
          onClick={() => console.log('Favourite clicked')} // Handle click event
        >
          Favourite
        </Typography>

        {/* "Recent" Text */}
        <Typography
          sx={{
            cursor: 'pointer', // Indicate clickable text
            color: theme.palette.mode === 'light' ? 'black' : 'white', // Text color based on theme mode
            '&:hover': {
              textDecoration: 'none', // Underline on hover
              color: theme.palette.mode === 'light' ? '#555' : '#bbb', // Darken color on hover
            },
          }}
          onClick={() => console.log('Recent clicked')} // Handle click event
        >
          Recent
        </Typography>
      </Box>

      {/* Second Row with bullet points */}
      <Box
        sx={{
          width: '180px', // Fill (180px)
          height: '28px', // Hug (28px)
          gap: 'var(--8)', // Gap
          opacity: 1, // Set opacity to 1 for visibility
          marginBottom: '8px', // Optional: space between rows
          paddingLeft: '12px', // Add left padding for second row
        }}
      >
        <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center' }}>
          <span style={{ marginRight: '8px', fontSize: '16px' }}>•</span> Second row text
        </Typography>
      </Box>

      {/* Third Row with bullet points */}
      <Box
        sx={{
          width: '180px', // Fill (180px)
          height: '28px', // Hug (28px)
          gap: 'var(--8)', // Gap
          opacity: 1, // Set opacity to 1 for visibility
          paddingLeft: '12px', // Add left padding for third row
        }}
      >
        <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center' }}>
          <span style={{ marginRight: '8px', fontSize: '16px' }}>•</span> Third row text
        </Typography>
      </Box>
    </Box>
  );
};

export default Frame1;

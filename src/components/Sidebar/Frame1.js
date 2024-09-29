import React from 'react';
import { Box, Button, Typography } from '@mui/material';

const Frame1 = () => {
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
      {/* First Row with 2 Buttons */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between', // Align buttons side by side
          alignItems: 'center', // Align items vertically center
          width: '180px', // Fill (180px)
          height: '28px', // Set to appropriate height for visibility
          gap: 'var(--8)', // Gap between buttons
          borderRadius: 'var(--8)', // Border-radius
          opacity: 1, // Set opacity to 1 for visibility
          marginBottom: '8px', // Optional: space between rows
          paddingLeft: '12px', // Add left padding for first row
        }}
      >
        {/* "Favourite" Button */}
        <Button
          variant="contained"
          sx={{
            backgroundColor: 'var(--black-40, #1C1C1C66)', // Set the background color
            color: 'white', // Text color
            borderRadius: '16px', // Make corners more round
            padding: '4px 8px', // Reduce padding to make buttons smaller
            textTransform: 'none', // Disable uppercase text
            fontFamily: 'Inter', // Set the font family
            fontSize: '14px', // Set font size
            fontWeight: 400, // Set font weight
            lineHeight: '20px', // Set line height
            textAlign: 'center', // Center the text
          }}
        >
          Favourite
        </Button>

        {/* "Recent" Button */}
        <Button
          variant="contained"
          sx={{
            backgroundColor: 'var(--black-40, #1C1C1C66)', // Set the background color
            color: 'white', // Text color
            borderRadius: '16px', // Make corners more round
            padding: '4px 8px', // Reduce padding to make buttons smaller
            textTransform: 'none', // Disable uppercase text
            fontFamily: 'Inter', // Set the font family
            fontSize: '14px', // Set font size
            fontWeight: 400, // Set font weight
            lineHeight: '20px', // Set line height
            textAlign: 'center', // Center the text
            marginLeft: '-16px', // Move the "Recent" button slightly to the left
          }}
        >
          Recent
        </Button>
      </Box>

      {/* Second Row with bullet points */}
      <Box
        sx={{
          width: '180px', // Fill (180px)
          height: '28px', // Hug (28px)
          gap: 'var(--8)', // Gap
          borderRadius: 'var(--8)', // Border-radius
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
          borderRadius: 'var(--8)', // Border-radius
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

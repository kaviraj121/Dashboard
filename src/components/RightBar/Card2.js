import React from 'react';
import { Box, Typography, Card, useTheme } from '@mui/material';

// Define image paths
const imagesMap = {
  2: './Image/3D05.png',  // Replace with actual image path
  3: './Image/3D08.png',  // Replace with actual image path
  4: './Image/Female05.png',  // Replace with actual image path
  5: './Image/Male07.png',  // Replace with actual image path
  6: './Image/Male11.png',
};

// Define names instead of text
const notifications = [
  { name: "You have a bug that needs..", timestamp: "Just now" },
  { name: "Released a new version", timestamp: "59 minutes ago" },
  { name: "Submitted a bug", timestamp: "12 hours ago" },
  { name: "Modified A data in Page X", timestamp: "Today, 11:59 AM" },
  { name: "Deleted a page in Project X", timestamp: "Feb 2, 2023" }
];

function Card2() {
  const theme = useTheme(); // Get the current theme

  return (
    <Card
      sx={{
        width: '240px',
        minHeight: '252px',
        gap: 'var(--8)',
        display: 'flex',
        flexDirection: 'column',
        padding: '16px',
        bgcolor: theme.palette.mode === 'dark' ? 'black' : theme.palette.background.paper, // Set bgcolor to black for dark mode
        boxShadow: 'none',
      }}
    >
      <Box
        sx={{
          width: '240px',
          height: '36px',
          padding: 'var(--8) var(--4)',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Typography
          sx={{
            fontFamily: 'Inter',
            fontSize: '14px',
            fontWeight: 600,
            lineHeight: '20px',
            textAlign: 'left',
            color: theme.palette.text.primary, // Adapt text color to theme
          }}
        >
          Activities
        </Typography>
      </Box>

      {[0, 1, 2, 3, 4].map((rowIndex) => (
        <Box
          key={rowIndex + 2}
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            width: '100%',
            padding: 'var(--8) var(--4)',
            borderRadius: 'var(--Radius8)',
          }}
        >
          <Box
            sx={{
              width: '24px',
              height: '24px',
              borderRadius: '50%',
              overflow: 'hidden', // Ensure the image is circular
            }}
          >
            <img
              src={imagesMap[rowIndex + 2]} // Use the appropriate image
              alt={`User ${rowIndex + 2}`}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography
              sx={{
                fontFamily: 'Inter',
                fontSize: '14px',
                fontWeight: 400,
                lineHeight: '20px',
                textAlign: 'left',
                color: theme.palette.text.primary, // Adapt text color to theme
              }}
            >
              {notifications[rowIndex].name}
            </Typography>
            <Typography
              sx={{
                fontFamily: 'Inter',
                fontSize: '12px',
                fontWeight: 400,
                lineHeight: '18px',
                textAlign: 'left',
                color: theme.palette.text.secondary, // Adapt timestamp color to theme
                marginTop: '4px',
              }}
            >
              {notifications[rowIndex].timestamp}
            </Typography>
          </Box>
        </Box>
      ))}
    </Card>
  );
}

export default Card2;

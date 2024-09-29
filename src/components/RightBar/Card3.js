import React from 'react';
import { Box, Typography, Card, useTheme } from '@mui/material';

// Define image paths
const imagesMap = {
  2: './Image/Female15.png',  // Replace with actual image path
  3: './Image/Male08.png',     // Replace with actual image path
  4: './Image/Male06.png',     // Replace with actual image path
  5: './Image/Female08.png',   // Replace with actual image path
  6: './Image/Female09.png',
  7: './Image/3D03.png',
};

// Define names instead of text
const notifications = [
  { name: "Natali Craig" },
  { name: "Drew Cano" },
  { name: "Orlando Diggs" },
  { name: "Andi Lane" },
  { name: "Kate Morrison" },
  { name: "Koray Okumus" }
];

function Card3() {
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
        opacity: theme.palette.mode === 'dark' ? 0.9 : 1, // Adjust opacity for dark mode
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
          Contact
        </Typography>
      </Box>

      {notifications.map((notification, rowIndex) => (
        <Box
          key={rowIndex + 2}
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            width: '100%',
            padding: 'var(--8) var(--4)',
            borderRadius: 'var(--Radius8)',
            marginBottom: '8px', // Added space between rows
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
              {notification.name}
            </Typography>
          </Box>
        </Box>
      ))}
    </Card>
  );
}

export default Card3;

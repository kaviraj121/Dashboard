import React from 'react';
import { Box, Typography, Card, useTheme } from '@mui/material';
import PestControlIcon from '@mui/icons-material/PestControl';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import CellTowerIcon from '@mui/icons-material/CellTower';

const iconsMap = {
  2: <PestControlIcon sx={{ fontSize: '16px' }} />,
  3: <PermIdentityIcon sx={{ fontSize: '16px' }} />,
  4: <PestControlIcon sx={{ fontSize: '16px' }} />,
  5: <CellTowerIcon sx={{ fontSize: '16px' }} />,
};

const notifications = [
  { text: "You have a bug that needs...", timestamp: "Just now" },
  { text: "New user registered", timestamp: "59 minutes ago" },
  { text: "You have a bug that needs...", timestamp: "12 hours ago" },
  { text: "Andi Lane subscribed to you", timestamp: "Today, 11:59 AM" },
];

function Card1() {
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
        bgcolor: theme.palette.mode === 'dark' ? 'black' : theme.palette.background.paper, // Set black background for dark mode
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
          Notifications
        </Typography>
      </Box>

      {[0, 1, 2, 3].map((rowIndex) => (
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
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              bgcolor: (rowIndex === 1 || rowIndex === 3) ? theme.palette.grey[200] : '#E3F5FF', // Use theme colors
              width: '24px',
              height: '24px',
              borderRadius: '50%',
            }}
          >
            {/* Adjust icon colors based on background */}
            {React.cloneElement(iconsMap[rowIndex + 2], {
              sx: {
                fontSize: '16px',
                color: theme.palette.mode === 'dark' ? '#1C1C1C' : '#1C1C1C', // Keep the icon color consistent
              },
            })}
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
              {notifications[rowIndex].text}
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

export default Card1;

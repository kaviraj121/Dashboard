import React from 'react';
import { Grid, Box, Typography } from '@mui/material';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import Frame1and2 from './Frame1and2';
import Frame3and4 from './Frame3and4';
import Frame5and6 from './Frame5and6';

const Frame = () => {
  return (
    <Box
      sx={{
        width: '892px', // Fixed width for the outer frame
        height: '970px', // Fixed height
        position: 'absolute', // Absolute positioning
        top: '140px', // Top position
        left: '240px', // Left position
        gap: '28px', // Gap for internal spacing
        opacity: 1, // Set opacity
        bgcolor: 'background.default', // Background color
        padding: '20px', // Padding for outer box
        display: 'flex',
        flexDirection: 'column', // Flex direction column for better stacking
      }}
    >
      {/* First Row: Frame 1 */}
     <Frame1and2 />

      {/* Second Row: Frame 3 and Frame 4 */}
      <Frame3and4 />

      {/* Third Row: Frame 5 */}
      <Frame5and6 />
    </Box>
  );
};

export default Frame;

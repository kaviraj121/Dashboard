import React from 'react';
import { Drawer, Box } from '@mui/material';
import Badge from './Badge';
import Frame1 from './Frame1';
import Frame2 from './Fraame2';
import Frame3 from './Frame3';

const Sidebar = () => {
  return (
    <Box
      sx={{
        width: '212px',  // Fixed width
        height: '1206px',  // Fixed height
        padding: '20px 16px', // Padding
        borderRight: (theme) => `1px solid ${theme.palette.divider}`, // Border for visibility
        opacity: 1, // Set to 1 for visibility
      }}
    >
      <Badge /> {/* Assuming Badge is your only component */}
      <Frame1 />
      <Frame2 />
      <Frame3 />
    </Box>
  );
};

export default Sidebar;

import React from 'react';
import Card1 from './Card1';
import { Box } from '@mui/material';
import Card2 from './Card2';
import Card3 from './Card3';

const RightBar = () => {
  return (
    <Box
      sx={{
        width: '280px',
        height: '1206px',
        position: 'absolute',
        left: '1160px',
        padding: '20px',
        gap: '24px',
        borderLeft: (theme) => `1px solid ${theme.palette.divider}`, // Use theme divider color
        display: { xs: 'none', md: 'block' },
        bgcolor: 'transparent', // Make the background transparent
        boxShadow: 'none', // Remove box shadow if necessary
      }}
    >
      <Card1 />
      <Card2 />
      <Card3 />
    </Box>
  );
};

export default RightBar;

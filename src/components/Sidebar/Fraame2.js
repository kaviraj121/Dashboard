import React, { useState } from 'react';
import { Box, Typography, Button } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'; // Use arrow down icon for dropdowns
import { styled } from '@mui/material/styles'; // Import styled for consistent styling
import PieChartIcon from '@mui/icons-material/PieChart';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import FolderIcon from '@mui/icons-material/Folder';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';

const CustomBox = styled(Box)(({ theme }) => ({
  width: '180px',
  height: '28px',
  padding: 'var(--4) var(--12)',
  borderRadius: 'var(--8)',
  opacity: 1,
  backgroundColor: 'transparent',
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer', // Add cursor pointer for dropdown click
}));

const StyledButton = styled(Button)(({ theme }) => ({
  paddingLeft: 'var(--16)',
  width: '180px',
  height: '28px',
  display: 'flex',
  justifyContent: 'flex-start',
  textTransform: 'none', // Prevent uppercase transformation of text
  backgroundColor: 'transparent',
  color: theme.palette.text.primary,
}));

const Frame2 = () => {
  // State to manage the open/closed state for the dropdowns in rows 3, 4, and 5
  const [isDropdownOpenRow3, setIsDropdownOpenRow3] = useState(false);
  const [isDropdownOpenRow4, setIsDropdownOpenRow4] = useState(false);
  const [isDropdownOpenRow5, setIsDropdownOpenRow5] = useState(false);

  const handleDropdownToggle = (row) => {
    if (row === 3) setIsDropdownOpenRow3(!isDropdownOpenRow3);
    if (row === 4) setIsDropdownOpenRow4(!isDropdownOpenRow4);
    if (row === 5) setIsDropdownOpenRow5(!isDropdownOpenRow5);
  };

  return (
    <Box
      sx={{
        width: '180px',
        height: '168px',
        padding: '0px 0px var(--12) 0px',
        gap: 'var(--4)',
        opacity: 1,
      }}
    >
      {/* First Row (No dropdown) */}
      <CustomBox>
        <Typography variant="body2">Dashboard</Typography>
      </CustomBox>

      {/* Second Row (Now a Button) */}
      <StyledButton startIcon={<PieChartIcon style={{ width: '16px', height: '16px', marginLeft: '25px' }} />}>
        <Typography variant="body2">Default</Typography>
      </StyledButton>

      {/* Third Row (Dropdown) */}
      <CustomBox onClick={() => handleDropdownToggle(3)}>
        <KeyboardArrowDownIcon
          sx={{
            width: '16.25px',
            height: '16.25px',
            marginRight: '8px',
            transform: isDropdownOpenRow3 ? 'rotate(0deg)' : 'rotate(-90deg)',
            transition: 'transform 0.3s ease',
          }}
        />
        <ShoppingBagIcon style={{ width: '16px', height: '16px', marginRight: '8px' }} />
        <Typography variant="body2">eCommerce</Typography>
      </CustomBox>

      {/* Fourth Row (Dropdown) */}
      <CustomBox onClick={() => handleDropdownToggle(4)}>
        <KeyboardArrowDownIcon
          sx={{
            width: '16.25px',
            height: '16.25px',
            marginRight: '8px',
            transform: isDropdownOpenRow4 ? 'rotate(0deg)' : 'rotate(-90deg)',
            transition: 'transform 0.3s ease',
          }}
        />
        <FolderIcon style={{ width: '16px', height: '16px', marginRight: '8px' }} />
        <Typography variant="body2">Projects</Typography>
      </CustomBox>

      {/* Fifth Row (Dropdown) */}
      <CustomBox onClick={() => handleDropdownToggle(5)}>
        <KeyboardArrowDownIcon
          sx={{
            width: '16.25px',
            height: '16.25px',
            marginRight: '8px',
            position: 'relative',
            zIndex: 2,
            transform: isDropdownOpenRow5 ? 'rotate(0deg)' : 'rotate(-90deg)',
            transition: 'transform 0.3s ease',
          }}
        />
        <ImportContactsIcon style={{ width: '16px', height: '16px', marginRight: '8px' }} />
        <Typography variant="body2">Online Courses</Typography>
      </CustomBox>
    </Box>
  );
};

export default Frame2;

import React, { useState } from 'react';
import { Box, Typography, Button, useTheme } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import RecentActorsIcon from '@mui/icons-material/RecentActors';
import GroupsIcon from '@mui/icons-material/Groups';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import ForumIcon from '@mui/icons-material/Forum';

const Frame3 = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(true); // Row 2 dropdown is open by default
  const [isDropdownOpenRow8, setIsDropdownOpenRow8] = useState(false);
  const [isDropdownOpenRow9, setIsDropdownOpenRow9] = useState(false);
  const [isDropdownOpenRow10, setIsDropdownOpenRow10] = useState(false);
  const [isDropdownOpenRow11, setIsDropdownOpenRow11] = useState(false);

  const theme = useTheme(); // Access the current theme
  const isDarkMode = theme.palette.mode === 'dark'; // Check if it's dark mode

  const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);
  const toggleDropdownRow8 = () => setIsDropdownOpenRow8((prev) => !prev);
  const toggleDropdownRow9 = () => setIsDropdownOpenRow9((prev) => !prev);
  const toggleDropdownRow10 = () => setIsDropdownOpenRow10((prev) => !prev);
  const toggleDropdownRow11 = () => setIsDropdownOpenRow11((prev) => !prev);

  const buttonTextColor = isDarkMode ? 'white' : 'black'; // Set text color based on theme

  return (
    <Box
      sx={{
        width: '180px',
        height: '360px',
        padding: '0px 0px var(--12) 0px',
        gap: 'var(--4)',
        opacity: 1,
      }}
    >
      {/* Row 1: Pages */}
      <Box
        sx={{
          width: '180px',
          height: '28px',
          padding: 'var(--4) var(--12)',
          borderRadius: 'var(--8)',
          opacity: 1,
        }}
      >
        <Typography variant="body2">Pages</Typography>
      </Box>

      {/* Row 2: Dropdown Toggle + Image + Text (User Profile) */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          width: '180px',
          height: '28px',
          padding: 'var(--4) var(--12)',
          borderRadius: 'var(--8)',
          opacity: 1,
          cursor: 'pointer',
          position: 'relative',
          zIndex: 1,
        }}
        onClick={toggleDropdown}
      >
        <KeyboardArrowDownIcon
          sx={{
            width: '16.25px',
            height: '16.25px',
            opacity: 1,
            marginRight: '8px',
            transform: isDropdownOpen ? 'rotate(0deg)' : 'rotate(-90deg)',
            transition: 'transform 0.3s ease',
          }}
        />
        <AccountBoxIcon
          style={{
            width: '16.25px',
            height: '16.25px',
            marginRight: '8px',
          }}
        />
        <Typography variant="body2" sx={{ color: buttonTextColor }}>
          User Profile
        </Typography>
      </Box>

      {isDropdownOpen && (
        <>
          {/* Row 3: Overview */}
          <Button
            sx={{
              display: 'flex',
              justifyContent: 'flex-start',
              width: '180px',
              height: '28px',
              padding: 'var(--4) var(--12)',
              borderRadius: 'var(--8)',
              opacity: 1,
              textTransform: 'none',
              marginLeft: '32px',
              color: buttonTextColor,
            }}
          >
            <Typography variant="body2" sx={{ color: buttonTextColor }}>
              Overview
            </Typography>
          </Button>

          {/* Row 4: Projects */}
          <Button
            sx={{
              display: 'flex',
              justifyContent: 'flex-start',
              width: '180px',
              height: '28px',
              padding: 'var(--4) var(--12)',
              borderRadius: 'var(--8)',
              opacity: 1,
              textTransform: 'none',
              marginLeft: '32px',
              color: buttonTextColor,
            }}
          >
            <Typography variant="body2" sx={{ color: buttonTextColor }}>
              Projects
            </Typography>
          </Button>

          {/* Row 5: Campaign */}
          <Button
            sx={{
              display: 'flex',
              justifyContent: 'flex-start',
              width: '180px',
              height: '28px',
              padding: 'var(--4) var(--12)',
              borderRadius: 'var(--8)',
              opacity: 1,
              textTransform: 'none',
              marginLeft: '32px',
              color: buttonTextColor,
            }}
          >
            <Typography variant="body2" sx={{ color: buttonTextColor }}>
              Campaign
            </Typography>
          </Button>

          {/* Row 6: Documents */}
          <Button
            sx={{
              display: 'flex',
              justifyContent: 'flex-start',
              width: '180px',
              height: '28px',
              padding: 'var(--4) var(--12)',
              borderRadius: 'var(--8)',
              opacity: 1,
              textTransform: 'none',
              marginLeft: '32px',
              color: buttonTextColor,
            }}
          >
            <Typography variant="body2" sx={{ color: buttonTextColor }}>
              Documents
            </Typography>
          </Button>

          {/* Row 7: Followers */}
          <Button
            sx={{
              display: 'flex',
              justifyContent: 'flex-start',
              width: '180px',
              height: '28px',
              padding: 'var(--4) var(--12)',
              borderRadius: 'var(--8)',
              opacity: 1,
              textTransform: 'none',
              marginLeft: '32px',
              color: buttonTextColor,
            }}
          >
            <Typography variant="body2" sx={{ color: buttonTextColor }}>
              Followers
            </Typography>
          </Button>
        </>
      )}

      {/* Other rows remain unchanged */}
      {/* Row 8: Dropdown (Account) */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          width: '180px',
          height: '28px',
          padding: 'var(--4) var(--12)',
          borderRadius: 'var(--8)',
          opacity: 1,
          cursor: 'pointer',
        }}
        onClick={toggleDropdownRow8}
      >
        <KeyboardArrowDownIcon
          sx={{
            width: '16.25px',
            height: '16.25px',
            opacity: 1,
            marginRight: '8px',
            transform: isDropdownOpenRow8 ? 'rotate(0deg)' : 'rotate(-90deg)',
            transition: 'transform 0.3s ease',
          }}
        />
        <RecentActorsIcon
          style={{
            width: '16.25px',
            height: '16.25px',
            marginRight: '8px',
          }}
        />
        <Typography variant="body2" sx={{ color: buttonTextColor }}>
          Account
        </Typography>
      </Box>

      {/* Row 9: Dropdown (Corporate) */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          width: '180px',
          height: '28px',
          padding: 'var(--4) var(--12)',
          borderRadius: 'var(--8)',
          opacity: 1,
          cursor: 'pointer',
        }}
        onClick={toggleDropdownRow9}
      >
        <KeyboardArrowDownIcon
          sx={{
            width: '16.25px',
            height: '16.25px',
            opacity: 1,
            marginRight: '8px',
            transform: isDropdownOpenRow9 ? 'rotate(0deg)' : 'rotate(-90deg)',
            transition: 'transform 0.3s ease',
          }}
        />
        <GroupsIcon
          style={{
            width: '16.25px',
            height: '16.25px',
            marginRight: '8px',
          }}
        />
        <Typography variant="body2" sx={{ color: buttonTextColor }}>
          Corporate
        </Typography>
      </Box>

      {/* Row 10: Dropdown (Blog) */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          width: '180px',
          height: '28px',
          padding: 'var(--4) var(--12)',
          borderRadius: 'var(--8)',
          opacity: 1,
          cursor: 'pointer',
        }}
        onClick={toggleDropdownRow10}
      >
        <KeyboardArrowDownIcon
          sx={{
            width: '16.25px',
            height: '16.25px',
            opacity: 1,
            marginRight: '8px',
            transform: isDropdownOpenRow10 ? 'rotate(0deg)' : 'rotate(-90deg)',
            transition: 'transform 0.3s ease',
          }}
        />
        <LibraryBooksIcon
          style={{
            width: '16.25px',
            height: '16.25px',
            marginRight: '8px',
          }}
        />
        <Typography variant="body2" sx={{ color: buttonTextColor }}>
          Blog
        </Typography>
      </Box>

      {/* Row 11: Dropdown (Social) */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          width: '180px',
          height: '28px',
          padding: 'var(--4) var(--12)',
          borderRadius: 'var(--8)',
          opacity: 1,
          cursor: 'pointer',
        }}
        onClick={toggleDropdownRow11}
      >
        <KeyboardArrowDownIcon
          sx={{
            width: '16.25px',
            height: '16.25px',
            opacity: 1,
            marginRight: '8px',
            transform: isDropdownOpenRow11 ? 'rotate(0deg)' : 'rotate(-90deg)',
            transition: 'transform 0.3s ease',
          }}
        />
        <ForumIcon
          style={{
            width: '16.25px',
            height: '16.25px',
            marginRight: '8px',
          }}
        />
        <Typography variant="body2" sx={{ color: buttonTextColor }}>
          Social
        </Typography>
      </Box>
    </Box>
  );
};

export default Frame3;

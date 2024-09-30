import React, { useState } from 'react';
import {
  Box,
  IconButton,
  Typography,
  InputBase,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  useTheme,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import FilterListIcon from '@mui/icons-material/FilterList';
import SwapVertIcon from '@mui/icons-material/SwapVert';
import SearchIcon from '@mui/icons-material/Search';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

// Sample data for the columns
const orderData = [
  { id: '#CM9801', user: 'Natali Craig', project: 'Landing Page', address: 'Meadow Lane Oakland', date: 'Just now', status: { text: 'In Progress', color: '#8A8CD9' } },
  { id: '#CM9802', user: 'Kate Morrison', project: 'CRM Admin pages', address: 'Larry San Francisco', date: 'A minute ago', status: { text: 'Complete', color: '#4AA785' } },
  { id: '#CM9803', user: 'Drew Cano', project: 'Client Project', address: 'Bagwell Avenue Ocala', date: '1 hour ago', status: { text: 'Pending', color: '#59A8D4' } },
  { id: '#CM9804', user: 'Orlando Diggs', project: 'Admin Dashboard', address: 'Washburn Baton Rouge', date: 'Yesterday', status: { text: 'Approved', color: '#FFC555' } },
  { id: '#CM9805', user: 'Andi Lane', project: 'App Landing Page', address: 'Nest Lane Olivette', date: '23 Feb 2023', status: { text: 'Rejected', color: '#1C1C1C66' } },
  { id: '#CM9801', user: 'Natali Craig', project: 'Landing Page', address: 'Meadow Lane Oakland', date: 'Just now', status: { text: 'In Progress', color: '#8A8CD9' } },
  { id: '#CM9802', user: 'Kate Morrison', project: 'CRM Admin pages', address: 'Larry San Francisco', date: 'A minute ago', status: { text: 'Complete', color: '#4AA785' } },
  { id: '#CM9803', user: 'Drew Cano', project: 'Client Project', address: 'Bagwell Avenue Ocala', date: '1 hour ago', status: { text: 'Pending', color: '#59A8D4' } },
  { id: '#CM9804', user: 'Orlando Diggs', project: 'Admin Dashboard', address: 'Washburn Baton Rouge', date: 'Yesterday', status: { text: 'Approved', color: '#FFC555' } },
  { id: '#CM9805', user: 'Andi Lane', project: 'App Landing Page', address: 'Nest Lane Olivette', date: '23 Feb 2023', status: { text: 'Rejected', color: '#1C1C1C66' } },
];

const users = [
  'https://via.placeholder.com/20', // Placeholder image
  'https://via.placeholder.com/20',
  'https://via.placeholder.com/20',
  'https://via.placeholder.com/20',
  'https://via.placeholder.com/20',
  'https://via.placeholder.com/20',
  'https://via.placeholder.com/20',
  'https://via.placeholder.com/20',
  'https://via.placeholder.com/20',
  'https://via.placeholder.com/20',
];

function OrderList() {
  const theme = useTheme();
  const [selectedRows, setSelectedRows] = useState(Array(orderData.length).fill(false));
  const [selectedAll, setSelectedAll] = useState(false);

  const handleRowSelect = (index) => {
    const newSelectedRows = [...selectedRows];
    newSelectedRows[index] = !newSelectedRows[index];
    setSelectedRows(newSelectedRows);
  };

  const handleSelectAll = () => {
    const newSelectedAll = !selectedAll;
    setSelectedAll(newSelectedAll);
    setSelectedRows(Array(orderData.length).fill(newSelectedAll));
  };

  return (
    <Box
      sx={{
        width: '1172px',
        height: '536px',
        position: 'absolute',
        top: '140px',
        left: '240px',
        gap: 'var(--12)',
        opacity: 1,
        
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box
        sx={{
          width: '100%',
          height: '44px',
          padding: 'var(--8)',
          gap: 'var(--16)',
          borderRadius: 'var(--8)',
          opacity: 1,
          bgcolor: theme.palette.mode === 'dark' ? '#303030' : '#F7F9FB',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <IconButton
          sx={{
            width: 'var(--Size20)',
            height: 'var(--Size20)',
            gap: 'var(--4)',
            borderRadius: 'var(--Radius8)',
            opacity: 1,
            bgcolor: 'transparent',
            color: theme.palette.mode === 'dark' ? '#fff' : '#000',
          }}
        >
          <AddIcon fontSize="small" />
        </IconButton>

        <IconButton
          sx={{
            width: 'var(--Size20)',
            height: 'var(--Size20)',
            gap: 'var(--4)',
            borderRadius: 'var(--Radius8)',
            opacity: 1,
            bgcolor: 'transparent',
            color: theme.palette.mode === 'dark' ? '#fff' : '#000',
          }}
        >
          <FilterListIcon fontSize="small" />
        </IconButton>

        <IconButton
          sx={{
            width: 'var(--Size20)',
            height: 'var(--Size20)',
            gap: 'var(--4)',
            borderRadius: 'var(--Radius8)',
            opacity: 1,
            bgcolor: 'transparent',
            color: theme.palette.mode === 'dark' ? '#fff' : '#000',
          }}
        >
          <SwapVertIcon fontSize="small" />
        </IconButton>

        <Box
          sx={{
            width: '160px',
            height: '28px',
            display: 'flex',
            alignItems: 'center',
            gap: 'var(--20)',
            opacity: 1,
          }}
        >
          <Box
            sx={{
              width: '160px',
              height: 'auto',
              padding: '4px 8px',
              gap: 'var(--8)',
              borderRadius: 'var(--8)',
              bgcolor: '#1C1C1C0D',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <IconButton sx={{ padding: 0 }}>
              <SearchIcon />
            </IconButton>

            <InputBase
              placeholder="Search"
              sx={{
                width: '116px',
                height: 'auto',
                borderRadius: 'var(--8)',
                fontFamily: 'Inter',
                fontSize: '14px',
                fontWeight: 400,
              }}
            />
            <Typography
              sx={{
                fontFamily: 'Inter',
                fontSize: '14px',
                fontWeight: 400,
                lineHeight: '20px',
                textAlign: 'left',
                color: '#1C1C1C33',
              }}
            >
              ⌘/
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* New Box for Table */}
      <Box
        sx={{
          width: '1172px',
          height: '440px',
          gap: 0,
          opacity: 1,
          overflow: 'auto',
        }}
      >
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={selectedAll}
                    onChange={handleSelectAll}
                    sx={{ width: '14px', height: '14px' }}
                  />
                </TableCell>
                <TableCell>Order ID</TableCell>
                <TableCell>User</TableCell>
                <TableCell>Project</TableCell>
                <TableCell>Address</TableCell>
                <TableCell>Date</TableCell> {/* New header for Date */}
                <TableCell>Status</TableCell> {/* New header for Status */}
                {/* Additional headers */}
                
              </TableRow>
            </TableHead>
            <TableBody>
              {orderData.map((order, index) => (
                <TableRow key={index}>
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={selectedRows[index]}
                      onChange={() => handleRowSelect(index)}
                      sx={{ width: '14px', height: '14px' }}
                    />
                  </TableCell>
                  <TableCell>{order.id}</TableCell>
                  <TableCell>
                    <Box display="flex" alignItems="center">
                      <img
                        src={users[index]}
                        alt="User Icon"
                        style={{ borderRadius: '50%', width: '24px', height: '24px', marginRight: '8px' }}
                      />
                      <Typography variant="body2">{order.user}</Typography>
                    </Box>
                  </TableCell>
                  <TableCell>{order.project}</TableCell>
                  <TableCell>{order.address}</TableCell>
                  <TableCell>
                    <Box display="flex" alignItems="center">
                      <CalendarTodayIcon fontSize="small" />
                      <Typography
                        sx={{
                          marginLeft: '4px',
                          fontFamily: 'Inter',
                          fontSize: '12px',
                          fontWeight: 400,
                          lineHeight: '18px',
                          textAlign: 'left',
                        }}
                      >
                        {order.date}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Box display="flex" alignItems="center">
                      <span
                        style={{
                          display: 'inline-block',
                          width: '8px',
                          height: '8px',
                          borderRadius: '50%',
                          backgroundColor: order.status.color,
                          marginRight: '4px',
                        }}
                      />
                      <Typography
                        sx={{
                          color: order.status.color,
                          fontFamily: 'Inter',
                          fontSize: '12px',
                          fontWeight: 400,
                          lineHeight: '18px',
                          textAlign: 'left',
                        }}
                      >
                        {order.status.text}
                      </Typography>
                    </Box>
                  </TableCell>
                  {/* Additional cells */}
                  
                  <TableCell>
                    <IconButton>
                      {/* Replace this with a three-dotted vertical menu */}
                      <Typography variant="body2">⋮</Typography>
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
}

export default OrderList;

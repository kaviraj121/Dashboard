import React from 'react';
import {
  Grid,
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  useTheme
} from '@mui/material';
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';

const Frame5and6 = () => {
  const theme = useTheme();
  const data = [
    { name: 'Direct', value: 300.56, color: '#1C1C1C' },
    { name: 'Affiliate', value: 135.18, color: '#BAEDBD' },
    { name: 'Sponsored', value: 154.02, color: '#95A4FC' },
    { name: 'E-mail', value: 48.96, color: '#B1E3FF' },
  ];

  const tableData = [
    { name: 'ASOS Ridley High Waist', price: '$79.49', quantity: '82', amount: '$6,518.18' },
    { name: 'Marco Lightweight Shirt', price: '$128.50', quantity: '37', amount: '$4,754.50' },
    { name: 'Half Sleeve Shirt', price: '$39.99', quantity: '64', amount: '$2,559.36' },
    { name: 'Lightweight Jacket', price: '$20.00', quantity: '184', amount: '$3,680.00' },
    { name: 'Marco Shoes', price: '$79.49', quantity: '64', amount: '$1,965.81' },
  ];

  return (
    <Grid container spacing={2}>
      <Grid item xs={8}>
        <Box
          sx={{
            width: '100%',
            height: '336px',
            padding: '20px',
            borderRadius: '16px',
            bgcolor: theme.palette.mode === 'dark' ? 'black' : '#F7F9FB',
            display: 'flex',
            flexDirection: 'column',
            gap: '0px',
          }}
        >
          {/* Heading */}
          <Typography
            sx={{
              fontFamily: 'Inter',
              fontSize: '14px',
              fontWeight: 600,
              lineHeight: '20px',
              textAlign: 'left',
              color: theme.palette.text.primary, // Use theme text color
            }}
          >
            Top Selling Products
          </Typography>

          {/* Table */}
          <TableContainer
            sx={{
              width: '520px',
              height: '370px',
              gap: '0px',
              opacity: '1',
            }}
          >
            <Table>
              <TableBody>
                {/* Header Row */}
                <TableRow
                  sx={{
                    borderBottom: `1px solid ${theme.palette.text.secondary}`, // Use theme for border color
                  }}
                >
                  <TableCell
                    sx={{
                      width: '160px',
                      height: '12px',
                      fontFamily: 'Inter',
                      fontSize: '12px',
                      fontWeight: 600,
                      lineHeight: '13px',
                      textAlign: 'left',
                      color: theme.palette.text.primary, // Use theme text color
                      border: 'none',
                    }}
                  >
                    Name
                  </TableCell>
                  <TableCell
                    sx={{
                      width: '70px',
                      height: '12px',
                      fontFamily: 'Inter',
                      fontSize: '12px',
                      fontWeight: 600,
                      lineHeight: '13px',
                      textAlign: 'left',
                      color: theme.palette.text.primary, // Use theme text color
                      border: 'none',
                    }}
                  >
                    Price
                  </TableCell>
                  <TableCell
                    sx={{
                      width: '70px',
                      height: '12px',
                      fontFamily: 'Inter',
                      fontSize: '12px',
                      fontWeight: 600,
                      lineHeight: '13px',
                      textAlign: 'left',
                      color: theme.palette.text.primary, // Use theme text color
                      border: 'none',
                    }}
                  >
                    Quantity
                  </TableCell>
                  <TableCell
                    sx={{
                      width: '70px',
                      height: '12px',
                      fontFamily: 'Inter',
                      fontSize: '12px',
                      fontWeight: 600,
                      lineHeight: '13px',
                      textAlign: 'left',
                      color: theme.palette.text.primary, // Use theme text color
                      border: 'none',
                    }}
                  >
                    Amount
                  </TableCell>
                </TableRow>

                {/* Data Rows */}
                {tableData.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell
                      sx={{
                        width: '160px',
                        height: '12px',
                        fontFamily: 'Inter',
                        fontSize: '12px',
                        fontWeight: 400,
                        lineHeight: '13px',
                        textAlign: 'left',
                        color: theme.palette.text.primary, // Use theme text color
                        border: 'none',
                      }}
                    >
                      {row.name}
                    </TableCell>
                    <TableCell
                      sx={{
                        width: '70px',
                        height: '12px',
                        fontFamily: 'Inter',
                        fontSize: '12px',
                        fontWeight: 400,
                        lineHeight: '13px',
                        textAlign: 'left',
                        color: theme.palette.text.primary, // Use theme text color
                        border: 'none',
                      }}
                    >
                      {row.price}
                    </TableCell>
                    <TableCell
                      sx={{
                        width: '70px',
                        height: '12px',
                        fontFamily: 'Inter',
                        fontSize: '12px',
                        fontWeight: 400,
                        lineHeight: '13px',
                        textAlign: 'left',
                        color: theme.palette.text.primary, // Use theme text color
                        border: 'none',
                      }}
                    >
                      {row.quantity}
                    </TableCell>
                    <TableCell
                      sx={{
                        width: '70px',
                        height: '12px',
                        fontFamily: 'Inter',
                        fontSize: '12px',
                        fontWeight: 400,
                        lineHeight: '13px',
                        textAlign: 'left',
                        color: theme.palette.text.primary, // Use theme text color
                        border: 'none',
                      }}
                    >
                      {row.amount}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Grid>
      <Grid item xs={4}>
        {/* Frame 6 Content */}
        <Box
          sx={{
            width: '100%',
            height: '336px',
            padding: '24px',
            borderRadius: '16px',
            bgcolor: theme.palette.mode === 'dark' ? 'black' : '#F7F9FB',
            display: 'flex',
            flexDirection: 'column',
            gap: '0px',
            alignItems: 'center',
          }}
        >
          {/* Heading for Total Sales */}
          <Typography
            sx={{
              width: '154px',
              height: '20px',
              gap: '0px',
              opacity: 1,
              fontFamily: 'Inter',
              fontSize: '14px',
              fontWeight: 600,
              lineHeight: '20px',
              textAlign: 'left',
              color: theme.palette.text.primary, // Use theme text color
            }}
          >
            Total Sales
          </Typography>
          {/* Donut Pie Chart */}
          <Box sx={{ width: '120px', height: '120px', opacity: 1 }}>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Tooltip />
                <Pie
                  data={data}
                  dataKey="value"
                  cx="50%"
                  cy="50%"
                  innerRadius={30}
                  outerRadius={50}
                  paddingAngle={5}
                  activeShape={null} // Disable the rectangle on click
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </Box>
          {/* Data Below Pie Chart */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              width: '154px',
              height: 'auto',
              gap: 'var(--12)',
              borderRadius: 'var(--16)',
              opacity: 1,
              bgcolor: theme.palette.background.paper, // Use theme background
              padding: '16px',
            }}
          >
            {/* Card Rows */}
            {data.map((entry, index) => (
              <Box
                key={index}
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  width: '154px',
                  height: '22px',
                  gap: 'var(--48)',
                  borderRadius: 'var(--8)',
                  opacity: 1,
                }}
              >
                {/* Color Dot */}
                <Box
                  sx={{
                    width: '12px',
                    height: '12px',
                    backgroundColor: entry.color,
                    borderRadius: '50%',
                  }}
                />
                {/* Label and Value */}
                <Typography
                  sx={{
                    width: '120px',
                    height: '16px',
                    opacity: 1,
                    fontFamily: 'Inter',
                    fontSize: '12px',
                    fontWeight: 400,
                    lineHeight: '16px',
                    textAlign: 'left',
                    color: theme.palette.text.secondary, // Use theme text color
                  }}
                >
                  {entry.name}: {entry.value}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Frame5and6;

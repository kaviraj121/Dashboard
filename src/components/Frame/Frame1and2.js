import React from 'react';
import { Box, Grid, Typography, Button, useTheme } from '@mui/material';
import { Bar } from 'react-chartjs-2';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { useNavigate } from 'react-router-dom';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Frame1and2 = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  // Bar chart data
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Projections vs Actuals',
        data: [21, 27, 23, 28, 18, 25],
        backgroundColor: '#A8C5DA',
        barThickness: 16,
      },
    ],
  };

  // Bar chart options
  const options = {
    responsive: true,
    scales: {
      x: {
        grid: {
          display: false,
          color: theme.palette.mode === 'dark' ? '#FFFFFF66' : 'rgba(0, 0, 0, 0.1)',
          display: true,
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          callback: (value) => `${value}M`,
          stepSize: 10,
          color: theme.palette.mode === 'dark' ? 'white' : 'black',
        },
        grid: {
          color: theme.palette.mode === 'dark' ? '#FFFFFF66' : 'rgba(0, 0, 0, 0.1)',
        },
        max: 30,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
    elements: {
      bar: {
        borderColor: theme.palette.mode === 'dark' ? 'white' : 'black',
      },
    },
  };

  return (
    <Grid container spacing={2} sx={{ marginBottom: '20px' }}>
      {/* Frame 1 */}
      <Grid item xs={6}>
        <Box
          sx={{
            width: '100%',
            height: '252px',
            opacity: 1,
            borderRadius: '16px',
            display: 'flex',
            flexDirection: 'column',
            bgcolor: theme.palette.mode === 'dark' ? theme.palette.background.paper : theme.palette.background.paper,
          }}
        >
          <Grid container spacing={2}>
            {/* Cards 1 and 2 on the left */}
            <Grid item xs={6}>
              <Button
                sx={{
                  width: '100%',
                  height: '112px',
                  padding: '24px',
                  gap: '8px',
                  borderRadius: '16px',
                  bgcolor: '#E3F5FF',
                  boxShadow: theme.palette.mode === 'dark' ? 'none' : '0px 4px 8px rgba(0, 0, 0, 0.1)',
                  opacity: 1,
                  textAlign: 'left',
                  display: 'flex',
                  flexDirection: 'column',
                }}
                onClick={() => console.log('Card 1 clicked')} // Add your click handler here
              >
                <Typography
                  sx={{
                    fontFamily: 'Inter',
                    fontSize: '14px',
                    fontWeight: 600,
                    lineHeight: '20px',
                    color: 'black',
                    textTransform: 'none', // Prevent text from being capitalized
                  }}
                >
                  Customer
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '25px' }}>
                  <Typography
                    sx={{
                      fontFamily: 'Inter',
                      fontSize: '24px',
                      fontWeight: 600,
                      lineHeight: '36px',
                      color: 'black',
                    }}
                  >
                    3,781
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Typography
                      sx={{
                        fontFamily: 'Inter',
                        fontSize: '12px',
                        fontWeight: 400,
                        lineHeight: '18px',
                        color: 'black',
                      }}
                    >
                      +11.01%
                    </Typography>
                    <TrendingUpIcon sx={{ width: '16px', height: '16px', color: 'black' }} />
                  </Box>
                </Box>
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button
                sx={{
                  width: '100%',
                  height: '112px',
                  padding: '24px',
                  gap: '8px',
                  borderRadius: '16px',
                  bgcolor: theme.palette.mode === 'dark' ? theme.palette.background.paper : '#F7F9FB',
                  boxShadow: theme.palette.mode === 'dark' ? 'none' : '0px 4px 8px rgba(0, 0, 0, 0.1)',
                  opacity: 1,
                  textAlign: 'left',
                  display: 'flex',
                  flexDirection: 'column',
                }}
                onClick={() => navigate('/list')} // Add your click handler here
              >
                <Typography
                  sx={{
                    fontFamily: 'Inter',
                    fontSize: '14px',
                    fontWeight: 600,
                    lineHeight: '20px',
                    color: theme.palette.mode === 'dark' ? 'white' : 'black',
                    textTransform: 'none', // Prevent text from being capitalized
                  }}
                >
                  Order
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '25px' }}>
                  <Typography
                    sx={{
                      fontFamily: 'Inter',
                      fontSize: '24px',
                      fontWeight: 600,
                      lineHeight: '36px',
                      color: theme.palette.mode === 'dark' ? 'white' : 'black',
                    }}
                  >
                    1219
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Typography
                      sx={{
                        fontFamily: 'Inter',
                        fontSize: '12px',
                        fontWeight: 400,
                        lineHeight: '18px',
                        color: theme.palette.mode === 'dark' ? 'white' : 'black',
                      }}
                    >
                      -0.03%
                    </Typography>
                    <TrendingDownIcon sx={{ width: '16px', height: '16px' }} />
                  </Box>
                </Box>
              </Button>
            </Grid>
          </Grid>
          <Grid container spacing={2} sx={{ marginTop: '16px' }}>
            {/* Cards 3 and 4 below Cards 1 and 2 */}
            <Grid item xs={6}>
              <Button
                sx={{
                  width: '100%',
                  height: '112px',
                  
                  gap: '8px',
                  borderRadius: '16px',
                  bgcolor: theme.palette.mode === 'dark' ? theme.palette.background.paper : '#F7F9FB',
                  boxShadow: theme.palette.mode === 'dark' ? 'none' : '0px 4px 8px rgba(0, 0, 0, 0.1)',
                  opacity: 1,
                  textAlign: 'left',
                  display: 'flex',
                  flexDirection: 'column',
                }}
                onClick={() => console.log('Card 3 clicked')} // Add your click handler here
              >
                <Typography
                  sx={{
                    fontFamily: 'Inter',
                    fontSize: '14px',
                    fontWeight: 600,
                    lineHeight: '20px',
                    color: theme.palette.mode === 'dark' ? 'white' : 'black',
                    textTransform: 'none', // Prevent text from being capitalized
                    textAlign: 'left'
                  }}
                >
                  Revenue
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'left', gap: '25px' }}>
                  <Typography
                    sx={{
                      fontFamily: 'Inter',
                      fontSize: '24px',
                      fontWeight: 600,
                      lineHeight: '36px',
                      color: theme.palette.mode === 'dark' ? 'white' : 'black',
                    }}
                  >
                    $695
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Typography
                      sx={{
                        fontFamily: 'Inter',
                        fontSize: '12px',
                        fontWeight: 400,
                        lineHeight: '18px',
                        color: theme.palette.mode === 'dark' ? 'white' : 'black',
                      }}
                    >
                      +0.02%
                    </Typography>
                    <TrendingUpIcon sx={{ width: '16px', height: '16px' }} />
                  </Box>
                </Box>
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button
                sx={{
                  width: '100%',
                  height: '112px',
                  padding: '24px',
                  gap: '8px',
                  borderRadius: '16px',
                  bgcolor: theme.palette.mode === 'dark' ? theme.palette.background.paper : '#F7F9FB',
                  boxShadow: theme.palette.mode === 'dark' ? 'none' : '0px 4px 8px rgba(0, 0, 0, 0.1)',
                  opacity: 1,
                 
                  display: 'flex',
                  flexDirection: 'column',
                  textAlign: 'left'
                }}
                onClick={() => console.log('Card 4 clicked')} // Add your click handler here
              >
                <Typography
                  sx={{
                    fontFamily: 'Inter',
                    fontSize: '14px',
                    fontWeight: 600,
                    lineHeight: '20px',
                    color: theme.palette.mode === 'dark' ? 'white' : 'black',
                    textTransform: 'none', // Prevent text from being capitalized
                    left:'25px'
                  }}
                >
                  Profit
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '25px' }}>
                  <Typography
                    sx={{
                      fontFamily: 'Inter',
                      fontSize: '24px',
                      fontWeight: 600,
                      lineHeight: '36px',
                      color: theme.palette.mode === 'dark' ? 'white' : 'black',
                    }}
                  >
                    $286
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Typography
                      sx={{
                        fontFamily: 'Inter',
                        fontSize: '12px',
                        fontWeight: 400,
                        lineHeight: '18px',
                        color: theme.palette.mode === 'dark' ? 'white' : 'black',
                      }}
                    >
                      +0.03%
                    </Typography>
                    <TrendingUpIcon sx={{ width: '16px', height: '16px' }} />
                  </Box>
                </Box>
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Grid>
      {/* Frame 2 */}
      <Grid item xs={6}>
        <Box
          sx={{
            width: '100%',
            height: '252px',
            opacity: 1,
            borderRadius: '16px',
            display: 'flex',
            flexDirection: 'column',
            bgcolor: theme.palette.mode === 'dark' ? theme.palette.background.paper : theme.palette.background.paper,
          }}
        >
          <Typography
            sx={{
              fontFamily: 'Inter',
              fontSize: '18px',
              fontWeight: 600,
              lineHeight: '24px',
              textAlign: 'left',
              padding: '24px',
              color: theme.palette.mode === 'dark' ? 'white' : 'black',
            }}
          >
            Bar Chart
          </Typography>
          <Bar data={data} options={options} />
        </Box>
      </Grid>
    </Grid>
  );
};

export default Frame1and2;

import React from 'react';
import { Box, Grid, Typography, useTheme } from '@mui/material';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from 'chart.js';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for marker icons not displaying
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

// Progress Line Component
const LocationProgress = ({ name, value, max }) => {
  const percentage = (value / max) * 100;

  return (
    <Box sx={{ marginBottom: '16px', width: '100%' }}>
      {/* Name and Value above the line bar */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '4px',
        }}
      >
        <Typography sx={{ fontFamily: 'Inter', fontSize: '14px', fontWeight: '600', lineHeight: '20px' }}>
          {name}
        </Typography>

        <Typography sx={{ fontFamily: 'Inter', fontSize: '14px', fontWeight: '600', lineHeight: '20px' }}>
          {value}K
        </Typography>
      </Box>

      {/* Progress Line */}
      <Box
        sx={{
          width: '210px',
          height: '2px',
          backgroundColor: '#FFFFFF',
          borderRadius: '80px',
          position: 'relative',
        }}
      >
        <Box
          sx={{
            width: `${percentage}%`,
            height: '2px',
            backgroundColor: '#A8C5DA',
            borderRadius: '80px',
          }}
        />
      </Box>
    </Box>
  );
};

const Frame3and4 = () => {
  const theme = useTheme();
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Current Week $58,211',
        data: [0, 10, 20, 30, 20, 10],
        borderColor: theme.palette.mode === 'dark' ? '#FFFFFF' : '#1C1C1C', // Change color for dark mode
        borderWidth: 2,
        fill: false,
        pointStyle: 'circle',
        pointRadius: 5,
      },
      {
        label: 'Previous Week $68,768',
        data: [10, 20, 30, 20, 10, 0],
        borderColor: '#A8C5DA',
        borderWidth: 2,
        fill: false,
        pointStyle: 'circle',
        pointRadius: 5,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 10,
          callback: function (value) {
            return value + 'M';
          },
        },
      },
    },
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
    },
  };

  // Define your locations
  const locations = [
    { position: [40.712776, -74.005974], title: 'New York' },
    { position: [37.774929, -122.419418], title: 'San Francisco' },
    { position: [-33.868819, 151.209295], title: 'Sydney' },
    { position: [1.352083, 103.819836], title: 'Singapore' },
  ];

  // Location values for the progression line
  const locationValues = [
    { name: 'New York', value: 72 },
    { name: 'San Francisco', value: 39 },
    { name: 'Sydney', value: 25 },
    { name: 'Singapore', value: 61 },
  ];

  const maxValue = 100; // The maximum value for the progression line

  return (
    <Grid container spacing={2} sx={{ marginBottom: '20px' }}>
      <Grid item xs={8}>
        <Box
          sx={{
            width: '100%',
            height: '318px',
            padding: '24px',
            borderRadius: '16px',
            bgcolor: theme.palette.mode === 'dark' ? 'black' : '#F7F9FB',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '10px',
            }}
          >
            <Typography
              sx={{
                width: '59px',
                height: '20px',
                fontFamily: 'Inter',
                fontSize: '14px',
                fontWeight: '600',
                lineHeight: '20px',
                textAlign: 'left',
                marginRight: '10px',
              }}
            >
              Revenue
            </Typography>
            <Box
              sx={{
                height: '12px',
                width: '1px',
                backgroundColor: 'grey',
                margin: '0 10px',
              }}
            />
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Box
                sx={{
                  backgroundColor: '#1C1C1C',
                  width: '10px',
                  height: '10px',
                  borderRadius: '50%',
                  marginRight: '5px',
                }}
              />
              <Typography
                sx={{
                  fontFamily: 'Inter',
                  fontSize: '14px',
                  fontWeight: '400',
                  lineHeight: '20px',
                  textAlign: 'left',
                  marginRight: '10px',
                }}
              >
                Current Week $58,211
              </Typography>
              <Box
                sx={{
                  backgroundColor: '#A8C5DA',
                  width: '10px',
                  height: '10px',
                  borderRadius: '50%',
                  marginRight: '5px',
                }}
              />
              <Typography
                sx={{
                  fontFamily: 'Inter',
                  fontSize: '14px',
                  fontWeight: '400',
                  lineHeight: '20px',
                  textAlign: 'left',
                }}
              >
                Previous Week $68,768
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              width: '100%',
              height: '232px',
            }}
          >
            <Line data={data} options={options} />
          </Box>
        </Box>
      </Grid>

      <Grid item xs={4}>
        <Box
          sx={{
            width: '100%',
            height: '318px',
            padding: '24px',
            borderRadius: '16px',
            bgcolor: theme.palette.mode === 'dark' ? 'black' : '#F7F9FB',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Typography
            sx={{
              width: '154px',
              height: '20px',
              gap: '0px',
              opacity: 1,
              fontFamily: 'Inter',
              fontSize: '14px',
              fontWeight: '600',
              lineHeight: '20px',
              textAlign: 'center',
              marginBottom: '10px',
            }}
          >
            Revenue by Location
          </Typography>
          {/* Map Container */}
          <MapContainer center={[20, 0]} zoom={2} style={{ height: '200px', width: '100%' }}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            {locations.map((location, index) => (
              <Marker key={index} position={location.position}>
                <Popup>{location.title}</Popup>
              </Marker>
            ))}
          </MapContainer>

          <Box sx={{ marginTop: '16px' }} />

          {/* Render the location progress bars */}
          {locationValues.map((location, index) => (
            <LocationProgress
              key={index}
              name={location.name}
              value={location.value}
              max={maxValue}
            />
          ))}
        </Box>
      </Grid>
    </Grid>
  );
};

export default Frame3and4;

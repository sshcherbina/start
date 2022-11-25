import React from 'react';
import { Box, Typography } from '@mui/material';
import cellular from '../assets/cellular.svg';
import battery from '../assets/battery.svg';
import wifi from '../assets/wifi.svg';

const StatusBar = () => {
  return (
    <Box
      sx={{
        display: { xs: 'flex', sm: 'none' },
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '3rem',
      }}
    >
      <Typography sx={{ ml: 2, fontWeight: 500 }}>9:41</Typography>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '4.5rem',
        }}
      >
        <img src={cellular} alt='cellular' />
        <img src={wifi} alt='wifi' />
        <img src={battery} alt='batteryr' />
      </Box>
    </Box>
  );
};

export default StatusBar;

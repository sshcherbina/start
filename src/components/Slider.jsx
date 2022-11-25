import React from 'react';
import { Box, Typography } from '@mui/material';

const Slider = ({ activeStep, steps, changeActiveStep, mob }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        color: 'white',
        mt: 2,
        mb: { xs: 3, lg: 6 },
        overflowX: 'auto',
      }}
    >
      {steps.slice(mob).map((step, i) => (
        <Box
          key={i + step.content}
          sx={{
            mr: { xs: 2, md: 4 },
            minWidth: 304,
            height: 80,
            background:
              mob === 0
                ? `rgba(255, 255, 255, ${activeStep === i ? 0.32 : 0.16})`
                : `rgba(255, 255, 255, ${i === 0 ? 0.32 : 0.16})`,
            boxShadow: `0px 6px 16px rgba(0, 0, 0, 0.16)`,
            borderRadius: '12px',
            maxWidth: 304,
            cursor: 'pointer',
          }}
          onClick={() => changeActiveStep(mob, i)}
        >
          <Box
            sx={{
              p: 1,
              mt: -0.5,
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <img src={step.image} />
            <Box>
              <span className='crop three'>{step.content}</span>
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default Slider;

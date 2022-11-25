import '../index.css';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import {
  Box,
  IconButton,
  Typography,
  MobileStepper,
  Stack,
} from '@mui/material';
import React, { useState } from 'react';
import one from '../assets/img-one.jpg';
import smOne from '../assets/img-sm1.jpg';
import smTwo from '../assets/img-sm2.jpg';
import smThree from '../assets/img-sm3.jpg';
import smFour from '../assets/img-sm4.jpg';
import { useTheme } from '@mui/material/styles';
import Slider from './Slider';
import { sidePaddings } from '../App';

const steps = [
  {
    image: smOne,
    content: `Андрій Єрмак: «В нас інші прізвища, ніж у творців Мінських угод.
      Людей, які б таке допускали, в нашій команді немає»`,
  },
  {
    image: smTwo,
    content: `Оприлюднено супутникові знімки аеродрому біля Новофедорівки:
      видно місця ураження`,
  },
  {
    image: smThree,
    content: `Вибухи на білоруському аеродромі "Зябрівка":
      оприлюднені причини вибухів, супутникові знімки аеродрому`,
  },
  {
    image: smFour,
    content: `Сейм Латвії визнав рф країною-спонсором тероризму.`,
  },
  {
    image: smTwo,
    content: `Вибухи на білоруському аеродромі "Зябрівка":
      супутникові знімки аеродрому, оприлюднені причини вибухів`,
  },
];
const maxSteps = steps.length;

const StartImg = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <>
      <Stack
        direction='column-reverse'
        sx={{
          p: sidePaddings,
          height: { xs: '30.5rem', sm: '34rem', md: '41rem' },
          background: `linear-gradient(180deg, rgba(21, 35, 56, 0.5) 0%, rgba(17, 29, 46, 0.24) 21.74%,
          rgba(17, 29, 46, 0.4) 62.16%, rgba(24, 40, 64, 0.9) 100%), url(${one}) no-repeat space`,
          backgroundPositionX: {
            xs: '-31rem',
            sm: '-20rem',
            md: '-16rem',
            lg: 0,
          },
          backgroundPositionY: { xs: '-4rem', sm: 0 },
          backgroundSize: 'cover',
          zIndex: 1,
        }}
      >
        <Box sx={{ display: { xs: 'flex', sm: 'none' } }}>
          <Slider
            activeStep={activeStep}
            steps={steps}
            mob={0}
            changeActiveStep={(mob, i) => setActiveStep(mob + i)}
          />
        </Box>
        <Box
          sx={{ display: { xs: 'none', sm: 'flex' }, flexDirection: 'column' }}
        >
          <MobileStepper
            sx={{
              background: 'transparent',
              width: 150,
              color: 'white',
              mt: 3,
            }}
            variant='text'
            steps={maxSteps}
            position='static'
            activeStep={activeStep}
            nextButton={
              <IconButton
                size='small'
                sx={{
                  color: 'white',
                  border:
                    activeStep === maxSteps - 1
                      ? '1px solid #404040'
                      : '1px solid white',
                }}
                onClick={handleNext}
                disabled={activeStep === maxSteps - 1}
              >
                {theme.direction === 'rtl' ? (
                  <KeyboardArrowLeft />
                ) : (
                  <KeyboardArrowRight />
                )}
              </IconButton>
            }
            backButton={
              <IconButton
                size='small'
                sx={{
                  color: 'white',
                  border:
                    activeStep === 0 ? '1px solid #404040' : '1px solid white',
                }}
                onClick={handleBack}
                disabled={activeStep === 0}
              >
                {theme.direction === 'rtl' ? (
                  <KeyboardArrowRight />
                ) : (
                  <KeyboardArrowLeft />
                )}
              </IconButton>
            }
          />
          <Slider
            activeStep={activeStep}
            maxSteps={maxSteps}
            steps={steps}
            mob={activeStep}
            changeActiveStep={(active, num) => setActiveStep(active + num)}
          />
        </Box>

        <Box
          sx={{
            width: { sm: '42vw', md: '55vw', lg: '54vw' },
            fontWeight: 700,
            fontSize: { xs: 20, md: 40 },
            color: 'white',
          }}
        >
          <span className='crop four'>{steps[activeStep].content}</span>
        </Box>
        {/* <Box
          sx={{ display: { xs: 'flex', sm: 'none' }, flexDirection: 'column' }}
        >
          <Slider
            activeStep={activeStep}
            steps={steps}
            mob={0}
            changeActiveStep={(mob, i) => setActiveStep(mob + i)}
          />
        </Box> */}
        {/* <Box
          sx={{ display: { xs: 'none', sm: 'flex' }, flexDirection: 'column' }}
        >
          <MobileStepper
            sx={{
              background: 'transparent',
              width: 150,
              color: 'white',
              mt: 3,
            }}
            variant='text'
            steps={maxSteps}
            position='static'
            activeStep={activeStep}
            nextButton={
              <IconButton
                size='small'
                sx={{
                  color: 'white',
                  border:
                    activeStep === maxSteps - 1
                      ? '1px solid #404040'
                      : '1px solid white',
                }}
                onClick={handleNext}
                disabled={activeStep === maxSteps - 1}
              >
                {theme.direction === 'rtl' ? (
                  <KeyboardArrowLeft />
                ) : (
                  <KeyboardArrowRight />
                )}
              </IconButton>
            }
            backButton={
              <IconButton
                size='small'
                sx={{
                  color: 'white',
                  border:
                    activeStep === 0 ? '1px solid #404040' : '1px solid white',
                }}
                onClick={handleBack}
                disabled={activeStep === 0}
              >
                {theme.direction === 'rtl' ? (
                  <KeyboardArrowRight />
                ) : (
                  <KeyboardArrowLeft />
                )}
              </IconButton>
            }
          />
          <Slider
            activeStep={activeStep}
            maxSteps={maxSteps}
            steps={steps}
            mob={activeStep}
            changeActiveStep={(active, num) => setActiveStep(active + num)}
          />
        </Box> */}
      </Stack>
      <Box
        sx={{
          display: { xs: 'flex', sm: 'none' },
          height: '4rem',
          mt: '-4rem',
          background: `rgba(24, 40, 64, 0.9)`,
        }}
      ></Box>
    </>
  );
};

export default StartImg;

import React, { useState } from 'react';
import '../index.css';
import { Box, Grid, IconButton, Stack, Typography } from '@mui/material';
import usyk from '../assets/usyk.jpg';
import mmm from '../assets/mmm.jpg';
import bavovnaCrimea from '../assets/bavovna-Crimea.jpg';
import bavovna_moscow from '../assets/bavovna-moscow.jpg';
import sbu from '../assets/sbu.png';
import moreVideo from '../assets/more-video.svg';
import play from '../assets/play.svg';
import playSm from '../assets/play-sm.svg';
import SectionTitle from './helpers/SectionTitle';
import uuid from 'react-uuid';

const videos = [
  {
    image: usyk,
    date: `${'05 СЕРПНЯ 11:00'}`,
    text: `"Це не Джошуа": Усик розповів, кого
     вважає своїм головним суперником`,
  },
  {
    image: mmm,
    date: `${'05 СЕРПНЯ 11:00'}`,
    text: `${`Селезньов розповів, навіщо росіяни спустошують склади
    боєприпасів у Білорусі.`}`,
  },
  {
    image: bavovnaCrimea,
    date: `${'05 СЕРПНЯ 11:00'}`,
    text: `${`У "Слузі" пояснили, чому в росії знову
    заговорили про переговори з Україною.`}`,
  },
  {
    image: bavovna_moscow,
    date: `${'05 СЕРПНЯ 11:00'}`,
    text: `${`ТРЦ Ocean Plaza після чуток про закриття
    оголосив про відновлення роботи.`}`,
  },
  {
    image: sbu,
    date: `${'05 СЕРПНЯ 11:00'}`,
    text: `${`Селезньов розповів, навіщо росіяни спустошують склади
    боєприпасів у Білорусі.`}`,
  },
];

const Videos = () => {
  const [orderVideo, setOrderVideo] = useState(videos);
  return (
    <Stack
      sx={{
        height: { sm: 600, md: 630, lg: 700 },
        background: {
          xs: ' #182840',
          md: `linear-gradient(180deg, rgba(21, 35, 56, 0.5) 0%,
        rgba(24, 40, 64, 0.95) 100%), url(${orderVideo[0].image}) no-repeat`,
        },
        backgroundSize: { md: 'cover' },
        backgroundPositionX: { md: '-2rem', lg: 0 },
        p: '0 4%',
        pt: { xs: 3, md: 6 },
        pb: { xs: 3 },
      }}
    >
      <SectionTitle
        title={'Відео'}
        colorTitle={'#FFFFFF'}
        buttonText={'Більше відео'}
        colorButtonText={{ xs: '#FF7534', md: '#FFFFFF' }}
        icon={moreVideo}
      />
      <Grid container spacing={{ xs: 2, md: 3 }}>
        <Grid item xs={12} sm={8} md={6} sx={{ mt: { xs: 3, mt: 4 } }}>
          <Stack>
            <img src={orderVideo[0].image} />
            <Box
              sx={{
                mt: '-4rem',
                ml: '0.5rem',
                display: { xs: 'none', md: 'flex' },
              }}
            >
              <IconButton variant='large'>
                <img src={play} />
              </IconButton>
            </Box>
            <Box
              sx={{
                mt: '-2.5rem',
                ml: '0.2rem',
                display: { xs: 'flex', md: 'none' },
              }}
            >
              <IconButton>
                <img src={playSm} />
              </IconButton>
            </Box>
            <Typography sx={{ fontSize: 12, color: '#FFFFFF', mt: 3 }}>
              {orderVideo[0].date}
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: 22, md: 32 },
                fontWeight: 600,
                color: '#FFFFFF',
                mt: 2,
              }}
            >
              {orderVideo[0].text}
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={4} md={6} sx={{ mt: { xs: 3, mt: 4 } }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            sx={{ overflow: 'auto', height: { sm: 450, md: 550, lg: 600 } }}
          >
            {orderVideo.slice(1).map((video, i) => (
              <Grid key={uuid()} item xs={12} md={6}>
                <Stack
                  sx={{ cursor: 'pointer' }}
                  onClick={() =>
                    setOrderVideo(
                      orderVideo.slice(i + 1).concat(orderVideo.slice(0, i + 1))
                    )
                  }
                >
                  <img src={video.image} />
                  <Box
                    sx={{
                      mt: '-2.5rem',
                      ml: '0.2rem',
                    }}
                  >
                    <IconButton onClick={(e) => e.stopPropagation()}>
                      <img src={playSm} />
                    </IconButton>
                  </Box>
                  <Typography sx={{ fontSize: 12, color: '#FFFFFF', mt: 2 }}>
                    {video.date}
                  </Typography>
                  <Typography
                    sx={{
                      color: '#FFFFFF',
                      mt: 1,
                      ml: -2,
                      display: { xs: 'none', sm: 'flex' },
                    }}
                  >
                    <span className='crop two'>{video.text}</span>
                  </Typography>
                  <Typography
                    sx={{
                      color: '#FFFFFF',
                      mt: 1,
                      display: { xs: 'flex', sm: 'none' },
                    }}
                  >
                    {video.text}
                  </Typography>
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Stack>
  );
};

export default Videos;

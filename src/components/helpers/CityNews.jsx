import React from 'react';
import { Stack, Typography } from '@mui/material';
import NewsTimeList from './NewsTimeList';
import MoreNewsButton from './MoreNewsButton';
import uuid from 'react-uuid';

const CityNews = ({ city, cityNewsList }) => {
  return (
    <Stack
      sx={{
        p: 2,
        bgcolor: '#FFFFFF',
        maxWidth: { xs: 600, md: 272 },
      }}
    >
      <Typography sx={{ fontWeight: 600, fontSize: 24, color: '#2D2D2D' }}>
        {city}
      </Typography>
      <Stack
        sx={{ maxHeight: { sm: 614, md: 720 }, mt: 1.5, overflow: 'auto' }}
      >
        {cityNewsList.map((cityNews) => (
          <Stack key={uuid()}>
            <Typography sx={{ color: '#F3560C', fontSize: 12, mt: 2 }}>
              {cityNews.date.toUpperCase()}
            </Typography>
            <NewsTimeList list={cityNews.news} />
          </Stack>
        ))}
      </Stack>
      <MoreNewsButton />
    </Stack>
  );
};

export default CityNews;

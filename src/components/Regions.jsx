import React from 'react';
import { Grid, Stack } from '@mui/material';
import SectionTitle from './helpers/SectionTitle';
import { cities } from './NavBar';
import CityNews from './helpers/CityNews';
import Tabs from './helpers/Tabs';
import { newsList } from './NewsFeed';

const cityNewsList = [
  {
    date: '05 серпня',
    news: newsList,
  },
  {
    date: '04 серпня',
    news: newsList,
  },
];

const citiesView = cities.map((city) => (
  <CityNews city={city} cityNewsList={cityNewsList} />
));

const Regions = () => {
  return (
    <Stack sx={{ mt: 2 }}>
      <SectionTitle title={'Регіони'} />
      <Grid
        container
        spacing={{ sm: 1, md: 2 }}
        sx={{
          pl: 3,
          display: { xs: 'none', md: 'flex' },
        }}
      >
        {cities.map((city, i) => (
          <Grid key={city} item xs={12} md={4} sx={{ mt: 2 }}>
            {citiesView[i]}
          </Grid>
        ))}
      </Grid>
      <Stack sx={{ display: { xs: 'flex', md: 'none' } }}>
        <Tabs titles={cities} tabs={citiesView} />
      </Stack>
    </Stack>
  );
};

export default Regions;

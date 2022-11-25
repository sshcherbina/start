import React from 'react';
import { Box, Stack, Typography, Grid, ListItemButton } from '@mui/material';
import UploadButton from './helpers/UploadButton';
import NewsTimeList from './helpers/NewsTimeList';
import Tabs from './helpers/Tabs';
import SectionTitle from './helpers/SectionTitle';

export const newsList = [
  {
    text: `"Відбудова України — завдання усього світу":
      промова Зеленського на конференції в Лугано`,
    item: 'Статті',
    time: '14:59',
  },
  {
    text: `До Європи за захистом. Що означає позов Ахметова
      до Європейського суду з прав людини`,
    item: 'Новини',
    time: '14:59',
    category: 'photo',
  },
  {
    text: `Прем'єрка Швеції відвідала потрощені росіянами
      Бучу й Бородянку: реакція на побачене`,
    item: 'Новини',
    time: '14:59',
  },
  {
    text: `До Європи за захистом. Що означає позов Ахметова
      до Європейського суду з прав людини`,
    item: 'Статті',
    time: '14:59',
    category: 'hot',
  },
  {
    text: `Стало відомо, коли ЄС може узгодити
      сьомий пакет санкцій проти рф`,
    item: 'Новини',
    time: '14:59',
  },
  {
    text: `До Європи за захистом. Що означає позов Ахметова
      до Європейського суду з прав людини`,
    time: '14:59',
    item: 'Новини',
    category: 'online',
  },
  {
    text: `Дружина Зеленського чесно зізналася, чи боїться смерті`,
    item: 'Статті',
    time: '14:59',
  },
  {
    text: `"Відбудова України — завдання усього світу":
      промова Зеленського на конференції в Лугано`,
    item: 'Новини',
    time: '14:59',
    category: 'video',
  },
  {
    text: `"Бийся на світлій стороні": як спортсмени,
      меценати й волонетри рятують життя українців`,
    item: 'Статті',
    time: '14:59',
  },
  {
    text: `"Відбудова України — завдання усього світу":
      промова Зеленського на конференції в Лугано`,
    item: 'Статті',
    time: '14:59',
  },
  {
    text: `До Європи за захистом. Що означає позов Ахметова
      до Європейського суду з прав людини`,
    item: 'Статті',
    time: '14:59',
    category: 'exclusive',
  },
];

const NewsFeed = () => {
  const newsListNews = newsList.filter((news) => news.item === 'Новини');
  const newsListArticle = newsList.filter((news) => news.item === 'Статті');
  const tabs = [newsList, newsListNews, newsListArticle].map((newsItem) => (
    <Stack sx={{ overflow: 'auto', maxHeight: 1400, mt: 1.5 }}>
      <NewsTimeList list={newsItem} />
    </Stack>
  ));

  return (
    <Grid item xs={12} sm={6} md={3}>
      <Stack
        sx={{
          p: 2,
          bgcolor: '#FFFFFF',
          maxWidth: { xs: 600, md: 272 },
        }}
      >
        <SectionTitle
          title={'Всі новини'}
          titleSize={24}
          titleWeight={600}
          buttonText={'Архів'}
          colorButtonText={'#182840'}
          borBom={'1px solid #182840'}
        />
        <Tabs titles={['Всі', 'Новини', 'Статті']} tabs={tabs} />
        <UploadButton />
      </Stack>
    </Grid>
  );
};

export default NewsFeed;

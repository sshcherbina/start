import { Divider, Stack, Typography } from '@mui/material';
import React from 'react';
import NewsCategory from './NewsCategory';

const NewsTimeList = ({ list }) => {
  return (
    <>
      {list.map((news, i) => (
        <Stack key={i + news.text.slice(0, 20)}>
          {news.category && <NewsCategory category={news.category} />}
          <Typography sx={{ mt: 2, mb: 2, cursor: 'pointer' }}>
            <span
              style={{
                color: '#707070',
                width: 36,
                height: 20,
                fontSize: 14,
              }}
            >
              {news.time}
            </span>
            <span style={{ color: '', marginLeft: 10 }}>{news.text}</span>
          </Typography>
          <Divider sx={{ mb: 2 }} />
        </Stack>
      ))}
    </>
  );
};

export default NewsTimeList;

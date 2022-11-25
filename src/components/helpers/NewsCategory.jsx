import React from 'react';
import { Box, Typography } from '@mui/material';
import camera from '../../assets/camera.svg';
import exclusive from '../../assets/exclusive.svg';
import hot from '../../assets/hot.svg';
import video from '../../assets/video.svg';
import online from '../../assets/online.svg';
import interview from '../../assets/interview.svg';
import promo from '../../assets/promo.svg';

const categories = [
  { category: 'photo', img: camera, color: '#979EA9', text: 'Новина з фото' },
  { category: 'video', img: video, color: '#979EA9', text: 'Новина з відео' },
  { category: 'hot', img: hot, color: '#FF7534', text: 'Гаряча новина' },
  { category: 'online', img: online, color: '#FF7534', text: 'Онлайн' },
  { category: 'interview', img: interview, color: '#979EA9', text: `Інтерв'ю` },
  { category: 'promo', img: promo, color: '#979EA9', text: 'Промо' },
  {
    category: 'exclusive',
    img: exclusive,
    color: '#FF7534',
    text: 'Ексклюзив',
  },
];

const NewsCategory = ({ category }) => {
  const newsCategory = categories.find((ctgr) => ctgr.category === category);
  return (
    <Box sx={{ display: 'flex' }}>
      <img src={newsCategory.img} />
      <Typography
        sx={{
          fontSize: 14,
          fontWeight: newsCategory.category === 'exclusive' ? 600 : 400,
          color: newsCategory.color,
          ml: 1.5,
          mt: newsCategory.category === 'photo' ? 0.5 : 0,
        }}
      >
        {newsCategory.text}
      </Typography>
    </Box>
  );
};

export default NewsCategory;

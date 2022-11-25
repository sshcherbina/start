import React from 'react';
import { ListItemButton, Typography } from '@mui/material';
import moreNews from '../../assets/more-news.svg';

const MoreNewsButton = ({ short = false }) => {
  return (
    <ListItemButton
      sx={{
        mt: 1,
        borderRadius: 1,
        display: 'flex',
        alignSelf: 'start',
      }}
    >
      <Typography sx={{ mr: 2, color: '#182840' }} noWrap>
        {short ? 'Більше' : 'Більше новин'}
      </Typography>
      <img src={moreNews} />
    </ListItemButton>
  );
};

export default MoreNewsButton;

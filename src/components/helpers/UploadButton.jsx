import React from 'react';
import refresh from '../../assets/refresh.svg';
import { ListItemButton, Typography } from '@mui/material';

const UploadButton = () => {
  return (
    <ListItemButton
      sx={{
        mt: 2,
        border: '1px solid #979EA9',
        borderRadius: 1,
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <img src={refresh} />
      <Typography sx={{ ml: 1, color: '#182840' }} noWrap>
        Завантажити ще
      </Typography>
    </ListItemButton>
  );
};

export default UploadButton;

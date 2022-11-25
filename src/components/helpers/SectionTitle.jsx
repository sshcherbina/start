import { Box, ListItemButton, Typography } from '@mui/material';
import React from 'react';
import '../../index.css'

const SectionTitle = ({
  title,
  titleSize = 32,
  titleWeight = 700,
  colorTitle = '#2D2D2D',
  buttonText = 'Всі новини розділу',
  colorButtonText = '#FF7534',
  sm = 'flex',
  icon,
  borBom,
}) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Typography
        sx={{ fontWeight: titleWeight, color: colorTitle, fontSize: titleSize , fontFamily: 'TT Severs'}}
        // noWrap
      >
        {title}
      </Typography>
      <Box sx={{ display: { xs: sm, md: 'flex' } }}>
        <ListItemButton sx={{ color: colorButtonText }}>
          <Typography
            sx={{ fontSize: 14, fontWeight: 600, borderBottom: borBom }}
            noWrap
          >
            {buttonText}
          </Typography>
          {icon && (
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <img src={icon} style={{ marginLeft: 16 }} />
            </Box>
          )}
        </ListItemButton>
      </Box>
    </Box>
  );
};

export default SectionTitle;

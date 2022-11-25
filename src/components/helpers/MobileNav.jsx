import React, { useState } from 'react';
import { Box, IconButton, ListItemButton, Menu, MenuItem } from '@mui/material';
import searchMobile from '../../assets/search-mobile.svg';
import caretDown from '../../assets/caret-down.svg';
import { VisibilityOff } from '@mui/icons-material';
import Input from './Input';

const MobileNav = ({
  inputValue,
  changeValue,
  clearInput,
  lang,
  changeUA,
  changeRU,
  // showMenu,
  stateMenu
}) => {
  const [showInput, setShowInput] = useState('none');
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  return (
    <Box
      sx={{
        display: { xs: 'flex', sm: 'none' },
        alignItems: 'center',
      }}
    >
      <Input
        value={inputValue}
        changeValue={changeValue}
        showInput={showInput}
        changeInput={() => {
          setShowInput('none');
          clearInput();
          stateMenu();
        }}
      />
      <IconButton
        sx={{ display: showInput === 'flex' ? 'none' : 'flex' }}
        onClick={() => {setShowInput('flex'); stateMenu()}}
      >
        <img src={searchMobile} alt='search' />
      </IconButton>
      <IconButton
        sx={{ display: showInput === 'flex' ? 'flex' : 'none' }}
        onClick={() => {setShowInput('none'); stateMenu()}}
      >
        <VisibilityOff />
      </IconButton>
      <ListItemButton
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup='true'
        aria-expanded={open ? 'true' : undefined}
        onClick={(e) => setAnchorEl(e.currentTarget)}
      >
        <Box sx={{ fontSize: 14, fontWeight: 500, color: '#2D2D2D', mr: 0.5 }}>
          {lang}
        </Box>
        <img src={caretDown} alt='caret down' />
      </ListItemButton>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={() => setAnchorEl(null)}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem
          onClick={() => {
            changeUA();
            setAnchorEl(null);
          }}
        >
          UA
        </MenuItem>
        <MenuItem
          onClick={() => {
            changeRU();
            setAnchorEl(null);
          }}
        >
          RU
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default MobileNav;

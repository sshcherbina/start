import {
  Box,
  Divider,
  IconButton,
  List,
  ListItemButton,
  Stack,
} from '@mui/material';
import { useState } from 'react';
import shortText from '../assets/short-text.svg';
import telegram from '../assets/telegram.svg';
import facebook from '../assets/facebook.svg';
import instagram from '../assets/instagram.svg';
import youTube from '../assets/you-tube.svg';
import { sidePaddings } from '../App';
import uuid from 'react-uuid';
import StatusBar from './StatusBar';
import Input from './helpers/Input';
import MobileNav from './helpers/MobileNav';
import BottomNav from './BottomNav';

export const cities = ['Київ', 'Одеса', 'Харків'];

const NavBar = () => {
  const [menu, setMenu] = useState('');
  const [selectCity, setSelectCity] = useState('');
  const [selectMedia, setSelectMedia] = useState('');
  const [lang, setLang] = useState('RU');
  const [inputValue, setInputValue] = useState('');
  const [showMenu, setShowMenu] = useState(true);

  return (
    <Stack sx={{ p: sidePaddings }}>
      <StatusBar />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          height: '5.2rem',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            width: { md: '21rem' },
          }}
        >
          <ListItemButton
            onClick={() => setMenu('#F6F6F6')}
            onBlur={() => setMenu('')}
            sx={{ bgcolor: menu, display: {xs: showMenu ? 'flex' : 'none'}, sm: 'flex' }}
          >
            <img src={shortText} alt='shortText' />
            <Box sx={{ ml: 2, fontWeight: 500 }}>Меню</Box>
          </ListItemButton>
          <List
            sx={{
              display: { xs: 'none', sm: 'flex' },
              maxWidth: { sm: '6rem', md: '16rem' },
              overflow: 'auto',
            }}
          >
            {cities.map((city) => (
              <ListItemButton
                key={uuid()}
                sx={{
                  minWidth: '3rem',
                  display: 'flex',
                  justifyContent: 'center',
                  bgcolor: selectCity === city ? '#F6F6F6' : '',
                }}
                onClick={() => setSelectCity(city)}
                onBlur={() => setSelectCity('')}
              >
                <Box sx={{ fontSize: 14, fontWeight: 600 }}>{city}</Box>
              </ListItemButton>
            ))}
          </List>
        </Box>
        <Box
          sx={{
            display: { xs: 'none', sm: 'flex' },
            justifyContent: 'space-between',
            alignItems: 'center',
            width: { md: '40rem' },
          }}
        >
          <Input
            value={inputValue}
            changeValue={(e) => setInputValue(e.target.value)}
            changeInput={() => setInputValue('')}
          />
          {[telegram, facebook, instagram, youTube].map((socialMedia, i) => (
            <IconButton
              key={uuid()}
              size='small'
              onClick={() => setSelectMedia(i)}
              onBlur={() => setSelectMedia('')}
              sx={{ bgcolor: selectMedia === i ? '#F0F0F0' : '' }}
            >
              <img src={socialMedia} />
            </IconButton>
          ))}
          <Box sx={{ color: '#8A8A8A' }}>|</Box>
          <IconButton
            size='small'
            sx={{ opacity: lang === 'RU' ? 1 : 0.5 }}
            onClick={() => setLang('RU')}
          >
            <Box sx={{ fontSize: 14, fontWeight: 500 }}>RU</Box>
          </IconButton>
          <IconButton
            size='small'
            sx={{ opacity: lang === 'UA' ? 1 : 0.5 }}
            onClick={() => setLang('UA')}
          >
            <Box sx={{ fontSize: 14, fontWeight: 500 }}>UA</Box>
          </IconButton>
        </Box>
        <MobileNav
          lang={lang}
          changeUA={() => setLang('UA')}
          changeRU={() => setLang('RU')}
          inputValue={inputValue}
          changeValue={(e) => setInputValue(e.target.value)}
          clearInput={() => setInputValue('')}
          showMenu={showMenu}
          stateMenu={() => setShowMenu(!showMenu)}
        />
      </Box>
      <Divider />
      <BottomNav />
    </Stack>
  );
};

export default NavBar;

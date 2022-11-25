import { Box } from '@mui/material';
import orc from '../assets/good-orc.svg';
import tank from '../assets/tank.svg';
import gun from '../assets/gun.svg';
import aircraft from '../assets/aircraft.svg';
import missile from '../assets/missile.svg';
import helicopter from '../assets/helicopter.svg';
import armoredCar from '../assets/armored-car.svg';
import { sidePaddings } from '../App';
import uuid from 'react-uuid';

const day = 131;
const statistic = [
  {
    name: `особовий${'\u00A0'}склад`,
    stat: 36200,
    icon: orc,
  },
  { name: 'танки', stat: 1589, icon: tank },
  { name: 'артсистеми', stat: 657, icon: gun },
  { name: 'РСЗВ', stat: 246, icon: missile },
  { name: 'літаки', stat: 220, icon: aircraft },
  { name: 'гелікоптери', stat: 190, icon: helicopter },
  { name: 'ББМ', stat: 4578, icon: armoredCar },
];

const Statistic = () => {
  return (
    <Box
      sx={{
        p: sidePaddings,
        bgcolor: '#121B30',
        maxHeight: '2rem',
        display: 'flex',
        alignItems: 'center',
        color: 'white',
        fontSize: 14,
      }}
    >
      <Box sx={{ minWidth: '7.5rem' }}>{`${day} день війни:`}</Box>
      <Box
        sx={{
          display: 'flex',
          overflowX: 'auto',
          alignItems: 'center',
        }}
      >
        {statistic.map((item) => (
          <Box
            key={uuid()}
            sx={{ display: 'flex', alignItems: 'center', ml: 5 }}
          >
            <img src={item.icon} alt='icon' />
            <Box sx={{ ml: 2 }}>{item.name}</Box>
            <Box sx={{ ml: 1.5, color: '#FF7534' }}>{item.stat}</Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
export default Statistic;

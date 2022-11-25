import { Box, Grid, Stack, Typography } from '@mui/material';
import editorImage from '../assets/editor-image.jpg';
import borschImage from '../assets/borsch-image.jpg';
import UploadButton from './helpers/UploadButton';
import SectionTitle from './helpers/SectionTitle';
import NewsCategory from './helpers/NewsCategory';
import uuid from 'react-uuid';

const Editor = () => {
  return (
    <Stack>
      <SectionTitle title={'Вибір редакції'} sm={'none'} />
      <Grid
        container
        columnSpacing={{ sm: 1, md: 4 }}
        sx={{
          overflow: 'auto',
          // pl: 2,
          pr: { xs: 2, sm: 2, md: 0 },
          maxHeight: 600,
        }}
      >
        {[
          {
            image: editorImage,
            date: `${'05 СЕРПНЯ 11:00'}`,
            text: `${`Селезньов розповів, навіщо росіяни спустошують склади
                  боєприпасів у Білорусі.`}`,
          },
          {
            image: borschImage,
            date: `${'05 СЕРПНЯ 11:00'}`,
            category: 'exclusive',
            text: `${`Білорусь несподівано вирішила провести військові
                  навчання з Казахстаном: що відомо.`}`,
          },
          {
            image: editorImage,
            date: `${'05 СЕРПНЯ 11:00'}`,
            text: `${`Генерал Романенко оцінив бойовий потенціал
                  і спроможності ворога на півдні України.`}`,
          },
          {
            image: editorImage,
            date: `${'05 СЕРПНЯ 11:00'}`,
            text: `${`У "Слузі" пояснили, чому в росії знову
                  заговорили про переговори з Україною.`}`,
          },
          {
            image: editorImage,
            date: `${'05 СЕРПНЯ 11:00'}`,
            text: `${`ТРЦ Ocean Plaza після чуток про закриття
                  оголосив про відновлення роботи.`}`,
          },
          {
            image: editorImage,
            date: `${'05 СЕРПНЯ 11:00'}`,
            text: `${`Селезньов розповів, навіщо росіяни спустошують склади
                  боєприпасів у Білорусі.`}`,
          },
          {
            image: editorImage,
            date: `${'05 СЕРПНЯ 11:00'}`,
            text: `${`У "Слузі" пояснили, чому в росії знову
                  заговорили про переговори з Україною.`}`,
          },
          {
            image: editorImage,
            date: `${'05 СЕРПНЯ 11:00'}`,
            text: `${`ТРЦ Ocean Plaza після чуток про закриття
                  оголосив про відновлення роботи.`}`,
          },
          {
            image: editorImage,
            date: `${'05 СЕРПНЯ 11:00'}`,
            text: `${`Селезньов розповів, навіщо росіяни спустошують склади
                  боєприпасів у Білорусі.`}`,
          },
        ].map((news) => (
          <Grid key={uuid()} item xs={12} md={4}>
            <Stack sx={{ mt: 3, cursor: 'pointer' }}>
              <img src={news.image} />
              <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
                <Typography sx={{ fontSize: 12, color: '#707070', mr: 2 }}>
                  {news.date}
                </Typography>
                {news.category && <NewsCategory category={news.category} />}
              </Box>
              <Typography sx={{ color: '#182840', mt: 1 }}>
                {news.text}
              </Typography>
            </Stack>
          </Grid>
        ))}
      </Grid>
      <Box
        sx={{
          mt: 2,
          pr: 2,
          display: { xs: 'flex', md: 'none' },
        }}
      >
        <UploadButton />
      </Box>
    </Stack>
  );
};

export default Editor;

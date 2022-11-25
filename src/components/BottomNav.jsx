import React, { useState } from 'react';
import { Box, List } from '@mui/material';
import TopicButton from './helpers/TopicButton';
import fire from '../assets/fire.svg';
import live from '../assets/live.svg';
import uuid from 'react-uuid';

const topics = [
  { text: 'Війна', icon: fire },
  { text: 'Новини' },
  { text: 'Політика' },
  { text: 'Економіка' },
  { text: 'Суспільство' },
  { text: 'Погляди' },
  { text: 'Світ' },
  { text: 'Live', icon: live },
];

const BottomNav = () => {
  const [topicState, setTopicState] = useState('Війна');
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        height: '3rem',
        overflowX: 'auto',
      }}
    >
      <List
        sx={{
          display: 'flex',
        }}
      >
        {topics.slice(0, -1).map((topic) => (
          <TopicButton
            key={uuid()}
            topic={topic}
            topicState={topicState}
            changeTopic={() => setTopicState(topic.text)}
          />
        ))}
      </List>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <TopicButton
          topic={topics[topics.length - 1]}
          topicState={topicState}
          changeTopic={() => setTopicState(topics[topics.length - 1].text)}
        />
      </Box>
    </Box>
  );
};

export default BottomNav;

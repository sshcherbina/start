import { Box, ListItemButton } from '@mui/material';
import React from 'react';

const TopicButton = ({ topic, topicState, changeTopic }) => {
  return (
    <ListItemButton
      sx={{
        color: topic.text === topicState ? '#FF7534' : '#182840',
      }}
      onClick={changeTopic}
    >
      {topic.icon && <img src={topic.icon} alt='icon' />}
      <Box
        sx={{
          ml: topic.icon ? 1 : 0,
          mt: 0.4,
          fontSize: 14,
          fontWeight: 600,
        }}
      >
        {topic.text.toUpperCase()}
      </Box>
    </ListItemButton>
  );
};

export default TopicButton;

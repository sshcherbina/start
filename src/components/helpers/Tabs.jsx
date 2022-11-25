import React, { useState } from 'react';
import { Typography } from '@mui/material';
import {
  TabPanelUnstyled,
  TabsListUnstyled,
  TabsUnstyled,
  TabUnstyled,
} from '@mui/base';
import uuid from 'react-uuid';
import '../../index.css';

const Tabs = ({ titles, tabs }) => {
  const [tabValue, setTabValue] = useState(titles[0]);
  const back = titles[0] === 'Всі' ? '#FFFFFF' : '#F6F6F6';
  return (
    <TabsUnstyled defaultValue={0}>
      <TabsListUnstyled>
        {titles.map((title) => (
          <TabUnstyled
            key={title}
            style={{
              border: 'none',
              background: tabValue === title ? '#FFEAE0' : back,
              color: tabValue === title ? '#FF7534' : '#919191',
              cursor: 'pointer',
              marginLeft: title !== titles[0] ? 16 : 0,
              padding: 5,
              margin: '12px 0',
            }}
            onClick={() => setTabValue(title)}
          >
            <Typography>{title}</Typography>
          </TabUnstyled>
        ))}
      </TabsListUnstyled>
      {tabs.map((tab, i) => (
        <TabPanelUnstyled key={uuid()} value={i}>
          {tab}
        </TabPanelUnstyled>
      ))}
    </TabsUnstyled>
  );
};

export default Tabs;

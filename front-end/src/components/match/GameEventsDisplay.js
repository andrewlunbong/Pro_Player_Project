import React from 'react';
import { ClockCircleOutlined } from '@ant-design/icons';
import { Timeline } from 'antd';

const GameEventsDisplay = ({gameEvents}) => {

  console.log({gameEvents})
    return(
  <Timeline
    mode="alternate"
    items={gameEvents}
  />
  )
};
export default GameEventsDisplay;
import React from 'react';
import { Calendar } from 'antd';

const CalendarPage = () => {
  const onPanelChange = (value, mode) => {
    console.log(value.format('YYYY-MM-DD'), mode);
  };

  return (
    <div>
      <h1>Calendar Page</h1>
      <Calendar onPanelChange={onPanelChange} />
    </div>
  );
};

export default CalendarPage
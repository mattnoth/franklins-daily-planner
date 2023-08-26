import React from 'react';
import TimeRange from '../components/generic/TimeRangeComponent/TimeRange';
import { Input } from '../components/generic/Input/Input';
import { mockDailyAgenda } from '@/Data/DailyAgendaMocks';

const DailyAgendaView = () => {
  const handleStartTimeChange = (value: string) => {
    // Implement your start time change logic here
  };

  const handleEndTimeChange = (value: string) => {
    // Implement your end time change logic here
  };

  const handleReflectionChange = (value: string | number) => {
    // Implement your reflection change logic here
  };

  return (
    <div className="container">
      <h1>Daily Agenda</h1>
      <ul>
        {mockDailyAgenda.map((item) => (
          <li key={item.id}>
            <TimeRange 
              startTime={item.startTime} 
              endTime={item.endTime}
              onStartTimeChange={handleStartTimeChange}
              onEndTimeChange={handleEndTimeChange}
              additionalClasses="some-class"
            />
            <Input 
              type="text" 
              value={item.reflection} 
              onValueChange={handleReflectionChange}
              additionalClasses="some-input-class"
            />
            <button onClick={() => {/* Edit functionality */}}>Edit</button>
            <button onClick={() => {/* Delete functionality */}}>Delete</button>
          </li>
        ))}
      </ul>
      <button onClick={() => {/* Add functionality */}}>Add Activity</button>
    </div>
  );
};

export default DailyAgendaView;

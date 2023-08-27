import React from 'react';

import TimeRange from '../../components/generic/TimeRangeComponent/TimeRange';
import { Input } from '../../components/generic/Input/Input';
import { mockDailyAgenda } from '@/Data/DailyAgendaMocks';
import { Button } from '@/app/components/generic/Button/Button';

import ClientStoreProvider from '@/app/stores/ClientStoreProvider';


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
            <Button label='Placeholder Button' onClick={() => {/* Edit functionality */}}>Edit</Button>
            <Button label='Placeholder Button' onClick={() => {/* Delete functionality */}}>Delete</Button>
          </li>
        ))}
      </ul>
      <Button label='Placeholder Button' onClick={() => {/* Add functionality */}}>Add Activity</Button>
     
    </div>
  );
};

export default DailyAgendaView;

interface TimeComponentProps { 
    initialTime: string //HH:MM 
    onTimeUpdate: (newTime: string) => void; 
}

import React, { useState } from 'react';

const TimeComponent: React.FC<TimeComponentProps> = ({ initialTime, onTimeUpdate }) => {
  const [time, setTime] = useState(initialTime);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTime(event.target.value);
  };

  const handleBlur = () => {
    onTimeUpdate(time);
  };

  return (
    <input 
      type="time" 
      value={time}
      onChange={handleInputChange}
      onBlur={handleBlur}
    />
  );
};

export default TimeComponent;
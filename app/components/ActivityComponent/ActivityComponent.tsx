interface ActivityComponentProps {
  initialActivity: string;
  onUpdate: (newActivity: string) => void;  // Function to update the global state
}

import React, { useState } from 'react';

const ActivityComponent: React.FC<ActivityComponentProps> = ({ initialActivity, onUpdate }) => {
  const [activity, setActivity] = useState(initialActivity);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setActivity(event.target.value);
  };

  const handleBlur = () => {
    onUpdate(activity);
  };

  return (
    <input 
      type="text" 
      value={activity} 
      onChange={handleInputChange} 
      onBlur={handleBlur}
      maxLength={100}
      placeholder="Describe your activity"
    />
  );
};

export default ActivityComponent;

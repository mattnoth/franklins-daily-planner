import React from 'react';

interface AgendaItemProps {
  id: string;
  startTime: string;
  endTime: string;
  reflection: string;
}

const AgendaItem: React.FC<AgendaItemProps> = ({ id, startTime, endTime, reflection }) => {
  return (
    <div className="agenda-item bg-gray-100 p-4 rounded-md my-2 shadow-md">
      <div className="time-range text-gray-500 font-semibold mb-1">
        <span className="mr-2">{startTime}</span>
        <span>-</span>
        <span className="ml-2">{endTime}</span>
      </div>
      <p className="reflection text-gray-800 font-medium">{reflection}</p>
    </div>
  );
}

export default AgendaItem;

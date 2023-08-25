import React from 'react';
import AgendaItem from './AgendaItem';

interface DailyAgendaProps {
  date: string;
  items: Array<{
    id: string;
    startTime: string;
    endTime: string;
    reflection: string;
  }>;
}

const DailyAgenda: React.FC<DailyAgendaProps> = ({ date, items }) => {
  return (
    <section className="daily-agenda bg-white p-6 rounded-lg shadow-lg">
      <h2 className="date-title text-2xl font-bold text-gray-700 mb-4">{date}</h2>
      <div className="agenda-items-list space-y-4">
        {items.map(item => (
          <AgendaItem
            key={item.id}
            id={item.id}
            startTime={item.startTime}
            endTime={item.endTime}
            reflection={item.reflection}
          />
        ))}
      </div>
    </section>
  );
}

export default DailyAgenda;

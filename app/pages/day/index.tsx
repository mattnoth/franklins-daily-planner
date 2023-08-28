import ClientStoreProvider from '@/app/stores/ClientStoreProvider'; // Adjust the path
import { mockDailyAgenda } from '../../../Data/DailyAgendaMocks' // Import your mock data

import SpecializedInput from '@/app/components/special/SpecializedInput';

const YourPage = () => {
  const initialMobXState = {
    activityStore: {
      activities: mockDailyAgenda.map(item => ({
        id: item.id,
        name: item.reflection,
        timeRange: {
          startTime: item.startTime,
          endTime: item.endTime
        }
      }))
    }
  };

  return (
    <div>
      {/* other components */}
      <ClientStoreProvider initialMobXState={initialMobXState}>
        <SpecializedInput />
      </ClientStoreProvider>
      {/* other components */}
    </div>
  );
};

export default YourPage;

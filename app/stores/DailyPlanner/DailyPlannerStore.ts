import { types, Instance } from "mobx-state-tree";
import { IActivityStore, ActivityStore } from '../Activity/ActivityStore';

const DailyPlannerStore = types
  .model({
    dailyActivities: types.map(ActivityStore),
  })
  .views(self => ({
    get totalDays() {
      return self.dailyActivities.size;
    }
  }))
  .actions(self => ({
    addDay(date: string) {
      self.dailyActivities.set(date, ActivityStore.create({ activities: [] }));
    },
    removeDay(date: string) {
      self.dailyActivities.delete(date);
    },
    // ... other actions for manipulating the daily activities
  }));

// Initial instance
const dailyPlannerStore = DailyPlannerStore.create({ dailyActivities: {} });

export { dailyPlannerStore, DailyPlannerStore };

// If you want to use types elsewhere
export type IDailyPlannerStore = Instance<typeof DailyPlannerStore>;

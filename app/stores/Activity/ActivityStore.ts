import { types, Instance } from "mobx-state-tree";
import Activity, { ActivitySnapshot } from '../../models/ActivityModel';
import { TimeRangeSnapshot } from '../../models/TimeRangeModel';

// Define ActivityStore model
const ActivityStore = types.model({
  activities: types.array(Activity)
})
.views(self => ({
  get totalActivities() {
    return self.activities.length;
  }
}))
.actions(self => ({
  addActivity(name: string, timeRange: TimeRangeSnapshot) {
    const id = self.activities.length + 1;
    self.activities.push({ id, name, timeRange });
  },
  removeActivity(id: number) {
    const index = self.activities.findIndex(activity => activity.id === id);
    if (index !== -1) {
      self.activities.splice(index, 1);
    }
  },
  modifyActivity(id: number, name?: string, timeRange?: TimeRangeSnapshot) {
    const activity = self.activities.find(activity => activity.id === id);
    if (activity) {
      activity.modify(name, timeRange);
    }
  }
}));

// Initial instance
const activityStore = ActivityStore.create({ activities: [] });

export { activityStore, ActivityStore };

// If you want to use types elsewhere
export type IActivityStore = Instance<typeof ActivityStore>;

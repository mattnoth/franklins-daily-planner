import { types, Instance, SnapshotOut } from "mobx-state-tree";

// Define TimeRange model
const TimeRange = types.model({
  start: types.string,
  end: types.string
});

// Snapshot types
export type TimeRangeSnapshot = SnapshotOut<typeof TimeRange>;

// Define Activity model
const Activity = types.model({
  id: types.number,
  name: types.string,
  timeRange: TimeRange
})
.actions(self => ({
  modify(name?: string, timeRange?: TimeRangeSnapshot) {
    if (name) self.name = name;
    if (timeRange) {
      self.timeRange.start = timeRange.start;
      self.timeRange.end = timeRange.end;
    }
  }
}));

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

export { activityStore, ActivityStore, Activity, TimeRange };

// If you want to use types elsewhere
export type IActivityStore = Instance<typeof ActivityStore>;
export type IActivity = Instance<typeof Activity>;
export type ITimeRange = Instance<typeof TimeRange>;

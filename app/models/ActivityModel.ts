import { types, SnapshotOut } from "mobx-state-tree";
import TimeRange, { TimeRangeSnapshot } from './TimeRangeModel'

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

export type ActivitySnapshot = SnapshotOut<typeof Activity>;

export default Activity;

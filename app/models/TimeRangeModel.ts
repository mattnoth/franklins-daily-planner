import { types, SnapshotOut } from "mobx-state-tree";

// Define TimeRange model
const TimeRange = types.model({
  start: types.string,
  end: types.string
});

// Snapshot types
export type TimeRangeSnapshot = SnapshotOut<typeof TimeRange>;

export default TimeRange;

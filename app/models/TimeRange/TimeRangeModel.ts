import { types } from "mobx-state-tree";
import { ITimeRange } from "./ITimeRangeModel";  // Using named import here

export const TimeRangeModel = types.model("TimeRange", {
  start: types.string,
  end: types.string,
})
.views(() => ({
  // Add views/computed properties if needed
}))
.actions(() => ({
  // Empty actions for now. Add action methods here later if needed.
}));

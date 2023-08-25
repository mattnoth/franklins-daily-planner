import { types } from "mobx-state-tree";
import { TimeRangeModel } from "../TimeRange/TimeRangeModel";  // Importing the TimeRangeModel

// Define the Activity model using mobx-state-tree
export const ActivityModel = types.model("Activity", {
  id: types.number,
  name: types.string,
  timeRange: TimeRangeModel  // Linking the TimeRangeModel
});

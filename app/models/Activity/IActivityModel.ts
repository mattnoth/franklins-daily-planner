import { ITimeRange } from "../TimeRange/ITimeRangeModel";

export interface IActivity {
  id: number;
  name: string;
  timeRange: ITimeRange;
}

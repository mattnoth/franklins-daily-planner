import { types } from "mobx-state-tree";

const TimeSlot = types.model("TimeSlot", {
  start: types.string,  // "HH:MM"
  end: types.string,   // "HH:MM"
  activity: types.string
})
.actions(self => ({
  updateStartTime(newTime: string) {
    self.start = newTime;
  },
  updateEndTime(newTime: string) {
    self.end = newTime;
  },
  updateActivity(newActivity: string) {
    self.activity = newActivity;
  }
}));

export const DayPlannerStore = types.model("DayPlannerStore", {
  timeSlots: types.array(TimeSlot)
})
.actions(self => ({
  addTimeSlot() {
    self.timeSlots.push({
      start: "00:00", // default start time
      end: "01:00",  // default end time
      activity: ""   // default activity
    });
  }
}));

export default DayPlannerStore;

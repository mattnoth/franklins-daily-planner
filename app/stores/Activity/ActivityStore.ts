import { makeAutoObservable } from "mobx";

// Placeholder for TimeRange
interface TimeRangePlaceholder {
  start: string;  // Representing start time, e.g., "08:00 AM"
  end: string;    // Representing end time, e.g., "09:00 AM"
}

class Activity {
  id: number;
  name: string;
  timeRange: TimeRangePlaceholder;

  constructor(id: number, name: string, timeRange: TimeRangePlaceholder) {
    this.id = id;
    this.name = name;
    this.timeRange = timeRange;
  }
}


class ActivityStore {

// Activities array is observable, meaning any changes to this array will trigger reactions in the parts of the UI that use it. 
  activities: Activity[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  // Action to add a new activity
  addActivity(name:string, timeRange: TimeRangePlaceholder) {
    const id = this.activities.length + 1; 
    const activity = new Activity(id, name, timeRange)
    this.activities.push(activity);
  }

  // Action to remove an activity by its ID
  removeActivity(id: number) {
    this.activities = this.activities.filter(activity => activity.id !== id);
  }

// Action to modify an existing activity
  modifyActivity(id: number, name?: string, timeRange?: TimeRangePlaceholder) {
    const activity = this.activities.find(activity => activity.id === id);
    if (activity) {
      if (name) activity.name = name;
      if (timeRange) activity.timeRange = timeRange;
    }
  }

  // Computed property to get the total number of activities
  // showcase on  how computed values work in MobX. This value will automatically recompute whenever the activities array changes.
  get totalActivities() {
    return this.activities.length;
  }
}

export const activityStore = new ActivityStore(); 

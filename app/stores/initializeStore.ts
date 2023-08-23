import { applySnapshot, Instance } from 'mobx-state-tree';
import DayPlannerStore from './DayPlannerStore';

let store: Instance<typeof DayPlannerStore> | null = null;

export function initializeStore(snapshot = null) {
  // If there's a store instance, and no snapshot is provided, just return the existing store
  if (store && !snapshot) return store;

  // If there's a snapshot, apply it to the current store or create a new store with the snapshot
  if (snapshot) {
    if (store) {
      applySnapshot(store, snapshot);
      return store;
    }
    store = DayPlannerStore.create(snapshot);
  } else {
    // If no snapshot is provided, and no store exists, create a new store
    store = DayPlannerStore.create({ timeSlots: [] });
  }

  return store;
}

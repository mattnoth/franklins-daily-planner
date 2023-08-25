import { ActivityStore } from './Activity/ActivityStore';  // Ensure correct path
import { Instance } from 'mobx-state-tree';

let store: {
  activityStore?: Instance<typeof ActivityStore>
} = {};

export function initializeStore(initialData: any = {}) {
  // If it's on the server-side, always create a new store
  if (typeof window === 'undefined') {
    return {
      activityStore: ActivityStore.create(initialData.activityStore)
    };
  }

  // On the client-side, reuse store if it's already there
  if (!store.activityStore) {
    store.activityStore = ActivityStore.create(initialData.activityStore);
  }

  return store;
}

import { createContext } from 'react';
import { ActivityStore } from './Activity/ActivityStore';  // Ensure correct path
import { Instance } from 'mobx-state-tree';

// Define the type for your store
export type StoreType = {
  activityStore: Instance<typeof ActivityStore>;
};

let store: StoreType | undefined;

export const StoreContext = createContext<StoreType | null>(null);

export function initializeStore(initialData: any = {}): StoreType {
  // If it's on the server-side, always create a new store
  if (typeof window === 'undefined') {
    store = {
      activityStore: ActivityStore.create(initialData.activityStore || {})
    };
  }

  // On the client-side, reuse store if it's already there
  if (!store) {
    store = {
      activityStore: ActivityStore.create(initialData.activityStore || {})
    };
  }

  return store;
}

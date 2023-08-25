import { Instance } from 'mobx-state-tree';
import { ActivityStore } from './ActivityStore';

export type StoreType = {
  activityStore: Instance<typeof ActivityStore>;
};

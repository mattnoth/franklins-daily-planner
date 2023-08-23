import { useContext, createContext } from 'react';
import { initializeStore } from './initializeStore';
import { DayPlannerStore } from './DayPlannerStore';

// const StoreContext = createContext<null | DayPlannerStore>(null);

const StoreContext = createContext<null | ReturnType<typeof initializeStore>>(null)


type StoreProviderProps = {
  children: React.ReactNode;
  initialData?: any;
};

export const StoreProvider = ({ children, initialData }: StoreProviderProps) => {
  const store = initializeStore(initialData);
  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>;
}

export const useStore = () => {
  const store = useContext(StoreContext);
  if (!store) {
    // This is especially useful in TypeScript, if the store is not accessible for some reason, 
    // we throw an error.
    throw new Error('useStore must be used within a StoreProvider.');
  }
  return store;
}

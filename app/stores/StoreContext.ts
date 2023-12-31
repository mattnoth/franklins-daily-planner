import { createContext, useContext } from 'react';
import { StoreType } from './initializeStore';

// Create the MobX store context with an initial value of null.
// This assumes that you'll always use the `StoreContext.Provider` to provide an actual store.
export const StoreContext = createContext<StoreType | null>(null);

// A custom hook for components to easily access the store.
export const useStore = () => {
  const store = useContext(StoreContext);
  if (!store) {
    // Throw an error if no store is provided to ensure that this hook is used correctly.
    throw new Error('useStore must be used within a StoreContext.Provider');
  }
  return store;
}

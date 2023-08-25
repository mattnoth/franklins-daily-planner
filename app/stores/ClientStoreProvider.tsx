import { StoreContext, useStore } from './StoreContext';
import { initializeStore } from './initializeStore';
import { ReactNode } from 'react';

type ClientStoreProviderProps = {
  children: ReactNode;
  initialMobXState?: any;  // Consider replacing `any` with a more specific type if possible.
};

export default function ClientStoreProvider({ children, initialMobXState }: ClientStoreProviderProps) {
  const store = initializeStore(initialMobXState);

  return (
    <StoreContext.Provider value={store}>
      {children}
    </StoreContext.Provider>
  );
}

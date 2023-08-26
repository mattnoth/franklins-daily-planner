# Stores Directory Overview

The `/stores` directory serves as the core of state management in the application, utilizing MobX for reactive updates. 

- **ActivityStore.ts**: Specifically manages the list of activities, supporting operations like adding, removing, and modifying items. 
- **ClientStoreProvider.tsx**: The React context provider, initializing and providing the MobX stores to the entire component tree. 
- **StoreContext.tsx**: Defines the context and offers a custom `useStore` hook for easy access to the store in functional components. 
- **initializeStore.ts**: Sets up the stores, either rehydrating pre-existing client-side state or creating new instances.


## ActivityStore (`Activity/ActivityStore.ts`)

### Methods:

#### `addActivity(name: string, timeRange: TimeRangeSnapshot)`

Adds a new activity to the `activities` array.

- **Parameters:**
  - `name`: The name of the activity.
  - `timeRange`: The time range object for the activity.

#### `removeActivity(id: number)`

Removes an activity from the `activities` array based on its `id`.

- **Parameters:**
  - `id`: The identifier of the activity to be removed.

#### `modifyActivity(id: number, name?: string, timeRange?: TimeRangeSnapshot)`

Modifies an existing activity.

- **Parameters:**
  - `id`: The identifier of the activity to be modified.
  - `name`: (Optional) The new name of the activity.
  - `timeRange`: (Optional) The new time range for the activity.

### Views:

- **totalActivities**: Returns the total number of activities in the store.

---

## ClientStoreProvider (`ClientStoreProvider.tsx`)

Serves as the root MobX state tree provider.

### Props:

- **children**: The child components that will have access to the MobX store.
- **initialMobXState**: (Optional) Initial data to hydrate the MobX state tree.

---

## StoreContext (`StoreContext.tsx`)

Defines the MobX store context and provides a custom hook, `useStore`, to access the store in function components.

### Hooks:

- **useStore()**: Returns the current MobX store. Throws an error if used outside of a `StoreContext.Provider`.

---

## InitializeStore (`initializeStore.ts`)

Handles the initialization of all MobX stores.

### Methods:

#### `initializeStore(initialData: any = {}): StoreType`

Initializes the MobX stores.

- **Parameters:**
  - `initialData`: (Optional) Initial data to hydrate the stores. Defaults to an empty object.

### Types:

- **StoreType**: Type definition for the store, which currently includes `activityStore`.

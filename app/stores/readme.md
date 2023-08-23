# State Management 

This app uses MobX State tree to handle the hydration of each component. 

## initializeStore.ts

The primary goal of initializeStore.ts is to create a single instance of the MobX State Tree store that persists across the entire life of the application in a client-side setting. It plays an essential role in managing the state and hydration of the store, especially for frameworks like Next.js which utilize server-side rendering (SSR).

#### Singleton Store: 
To ensure that only one instance of the store is created and used in client-side navigation.

#### SSR Hydration
When using server-side rendering, the store's state can be captured and passed down to the client. This function helps in "hydrating" the client's store state using the snapshot from the server.

#### Store Initialization 
It provides a function to create (or reuse) the store, which can be used in React components.

## StoreContext.ts 



### Provide Store to Components 
It wraps the store instance in a React context, allowing any child component to access and react to the store's state and actions.

### Handle Server Side Rendering 
Due to the way SSR works, you need to ensure that every request initializes a fresh store to avoid shared state between requests. The context will help manage this.

### Ensure Single Instance on the Client
On the client side, you want to reuse the store instance across re-renders to maintain state.
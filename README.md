# Benji Daily Planner 

Nextjs app for creating a quick and easy daily planner similar to Benjamin's Franklin's famous daily planner. 

## Component Readme located in component directory 

## Current next steps August 24th: 
Work on Activity Store - 
Integrate with Next.js for SSR: Once the basic structure of the store is set up, we can focus on making it compatible with Next.js server-side rendering. This involves ensuring the store's state is hydrated appropriately when the app starts.

Connect the Store to your React Components: This is where you'll use the MobX Provider to pass down the store to your components and the inject function (or hooks, if you're using MobX-react-lite) to access the store within components.

Create Actions and Reactions: As you build out the functionality of your app, you'll be setting up actions (i.e., functions that modify state) and reactions (functions that run in response to state changes).
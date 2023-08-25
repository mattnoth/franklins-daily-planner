# Benji Daily Planner 

Nextjs app for creating a quick and easy daily planner similar to Benjamin's Franklin's famous daily planner. 

Global Readme: Ben Franklin App Overview

Ben Franklin App: A Productivity Tool Inspired by Time
Overview:

The Ben Franklin App is inspired by the age-old principles of time management and productivity, brought to life with a modern tech stack. This application is designed to help users structure their day, prioritize tasks, and make the most of their time, just as Benjamin Franklin did.
Core Features & Technologies:

    Next.js: The powerhouse behind our server-rendered React application. It provides a great developer experience with features like hot-code reloading, automatic routing, and static exporting.

    MobX State Tree (MST): For reactive state management. MST enables efficient and intuitive state updates and ensures data consistency across components.

    Tailwind CSS: A utility-first CSS framework, which allows for rapid UI development and ensures a responsive and consistent design across the app.

    Modular Structure: The codebase is organized into key areas:
        Components: Divided into generic and specialized directories, these React components are the visual building blocks of our UI.
        Models: Define the shape and structure of our data entities, ensuring type safety and logical consistency.
        Stores: Central hubs for managing application state and business logic, linking the UI to the underlying data.

Getting Started:

    Installation: Clone the repository and follow the setup guidelines to run the app locally.

    Exploring the Codebase: Navigate through the directories to understand the flow and integration of components, models, and stores. Each significant module is documented for clarity.

    Feedback & Contributions: We're always open to feedback and contributions. Help us refine the app, fix bugs, or introduce new features.

We're excited to have you explore the Ben Franklin App. Harnessing the principles of one of history's greatest polymaths, combined with today's cutting-edge technologies, we hope to provide a tool that truly aids productivity and time management. Enjoy!
=======
Benjamin Franklin is often cited for his structured daily routine, which was outlined in specific time blocks with accompanying activities or intentions. For instance:

    5:00 AM – 8:00 AM: "Rise, wash, and address Powerful Goodness; contrive day's business and take the resolution of the day; prosecute the present study; and breakfast."
    8:00 AM – 12:00 PM: "Work."
    12:00 PM – 2:00 PM: "Read or look over my accounts, and dine."
    ... and so on.

Such a planner emphasizes not just tasks, but the allocation of specific time blocks to those tasks. The idea is to use this concept for a web app (and eventually a mobile app), as it combines task management with time management.

## Stack 
The proof of concept will be mostly front-end with scaffolding for a backend connection, and use Next.js, Typescript, and tailwind-css. Design will be mobile centeric, as there are future plans for a mobile app. MobX State Tree is how the state will be managed, which will work with Next's serverside react functionality to prep for a backend connection to MongoDB or supabase. Possibly GraphQL with Apollo Client. 

## Core Features
- Time slot creation and modification (HH:MM)
- Add/Edit activity for a time slot (200~ max characters)
- Viewing the day's plan
- Navigation between days (previous, next, jump to specific date)

## Components 
- Timeslot Component
- Activity Component (using an input)
- Navigation Controls, add slot controls, update, delete.

## State Management 
- As stated above, this app will be using MST. See readme in the store namespace /  directory. 


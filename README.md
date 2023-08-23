# Benji Daily Planner 

Nextjs app for creating a quick and easy daily planner similar to Benjamin's Franklin's famous daily planner. 

Benjamin Franklin is often cited for his structured daily routine, which was outlined in specific time blocks with accompanying activities or intentions. For instance:

    5:00 AM – 8:00 AM: "Rise, wash, and address Powerful Goodness; contrive day's business and take the resolution of the day; prosecute the present study; and breakfast."
    8:00 AM – 12:00 PM: "Work."
    12:00 PM – 2:00 PM: "Read or look over my accounts, and dine."
    ... and so on.

Such a planner emphasizes not just tasks, but the allocation of specific time blocks to those tasks. It's a great idea to use this concept for a web app, as it combines task management with time management.

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

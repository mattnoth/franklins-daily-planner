# Notes from gpt while making this 

## MOBX Utilzing hydration to components 

ClientStoreProvider will use the StoreContext to provide the MobX store to child components that need it.

In the ClientStoreProvider component, you use StoreContext.Provider to provide the store. So, child components that want to consume the store will utilize the useContext(StoreContext) pattern to access it.

The main point is that you're not providing the store globally (e.g., in the Layout), but rather only in specific parts of the application where it's needed. This helps optimize SSR because you're only hydrating components that absolutely need client-side state management.

To be clear:

    ClientStoreProvider provides the store using StoreContext.Provider.
    Components that want to access the store consume it using useContext(StoreContext).

The useStore hook you've defined in StoreContext.ts is essentially a shorthand for useContext(StoreContext). Using this hook in components makes it easier and more intuitive to access the store.


    Server-side Initialization of the Store: When fetching data on the server (for example in getServerSideProps), you should use the initializeStore function to create a new store instance. This instance can then be populated with any necessary data and passed to the page component.

    Client-side Hydration: On the client side, you can again use initializeStore to create/reuse the global store instance, but this time you'll pass in the initial state that was sent from the server. This pattern ensures that the store is SSR-friendly.

    Modifying the Context: Since createContext is causing the issue, we need to ensure that components utilizing it are not considered server components. For this, you can wrap the components using the context in a separate component that uses use client.

## Extensions for type script notes 

Switching from a .ts to a .tsx extension is required when the file contains JSX syntax, as the .tsx extension signals to TypeScript that the file can include JSX. If you try to use JSX in a .ts file, TypeScript will not recognize the JSX syntax and will throw an error.

Let's break down the reasons:

    JSX Syntax: In both your ClientStoreProvider and StoreContext (if it had JSX, which ClientStoreProvider definitely does), you're using JSX syntax. JSX is the XML-like syntax extension to ECMAScript without any defined semantics. It's used by React and similar libraries to define component structures.

    TypeScript File Extensions:
        .ts: This is for standard TypeScript files. If you use JSX in a .ts file, TypeScript will give a syntax error.
        .tsx: This is for TypeScript files that contain JSX.

    TypeScript Configuration: The jsx option in the tsconfig.json file dictates how JSX should be transformed. Valid options are:
        "preserve": Outputs .jsx files and leaves JSX intact.
        "react": Outputs .js files and transforms JSX into equivalent JavaScript that uses React.createElement(...).
        Other options like "react-native": Outputs .js files and leaves JSX intact. Meant for tools which will transform the JSX further (like React Native).

By default, if you don't specify a jsx option in your tsconfig.json, TypeScript assumes "preserve". If your build system doesn't further transpile .jsx files (like if you're not using Babel), this could lead to runtime errors.

In summary, anytime you use JSX in a TypeScript file, ensure the file has a .tsx extension to avoid syntax errors.

## Tailwind vs. JS-CSS

Tailwind itself doesn't inherently have problems with Server-Side Rendering (SSR). However, the challenges arise when you try to dynamically generate styles or when you try to purge unused styles for production.

Here are some issues you might encounter:

    Dynamic Styles: If you're generating styles on-the-fly based on user actions or data (e.g., theme changes), you may encounter a mismatch between server-rendered styles and client-rendered styles. This can lead to a "flash" of unstyled or incorrectly styled content (often referred to as FOUC - Flash Of Unstyled Content) as the client takes over rendering.

    PurgeCSS and SSR: Tailwind uses PurgeCSS to remove unused styles for production. This works by looking through your code files and determining which classes are used. In SSR environments, if not set up correctly, there might be instances where PurgeCSS removes classes that are actually used, leading to missing styles in the rendered content.

    CSS Variables: As you pointed out, Tailwind's utility-first approach doesn't natively support CSS Custom Properties (variables) as values, which can make theming more challenging. When doing SSR, it's crucial to ensure that the correct theme's styles are delivered to the client to prevent re-rendering or flashing between themes.

    Additional Payload: If you're not careful with purging or if you're adding many custom styles on top of Tailwind's utilities, the size of the CSS file can grow significantly. This might not be an SSR-specific problem, but delivering a large CSS file in an SSR context can slow down the perceived page load time.

To solve these issues:

    Dynamic Styles: Ensure that any dynamically generated styles are computed and included in the server-rendered output. This might require additional logic or tooling, depending on your setup.

    PurgeCSS: Make sure you're configuring PurgeCSS correctly. You need to specify all the paths where your classes are used to ensure no necessary styles are removed.

    CSS Variables for Theming: One approach to making theming work smoothly with SSR and Tailwind is to define themes using CSS custom properties in a global stylesheet. Then, switching themes would involve toggling a class on a top-level element (like body), which would change the values of those custom properties.

Remember, any styling solution you choose will come with its pros and cons. The key is understanding those trade-offs and making informed decisions based on your application's requirements and the development experience you're aiming for.
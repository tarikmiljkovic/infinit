// import { useState } from "react";
import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Pricing from "./components/Pricing";
// import Contact from "./pages/Contact";

// import { QueryClient } from "@tanstack/react-query";
// import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
// import { createSyncStoragePersister } from "@tanstack/query-sync-storage-persister";

// import {
//   Outlet,
//   RouterProvider,
//   Link,
//   Route,
//   ErrorComponent,
//   Router,
//   RootRoute,
//   ParseRoute,
//   RegisteredRouter,
//   useRouter,
//   useRouterState,
// } from "@tanstack/react-router";

import Text from "./components/Text";

// const rootRoute = new RootRoute({
//   component: () => {
//     return (
//       <>
//         <Navbar />
//       </>
//     );
//   },
// });

// const indexRoute = new Route({
//   getParentRoute: () => rootRoute,
//   path: "/",
//   component: () => {
//     return <Home />;
//   },
// });

// const contactRoute = new Route({
//   getParentRoute: () => rootRoute,
//   path: "kontakt",
//   component: () => {
//     return <Contact />;
//   },
// });

// const routeTree = rootRoute.addChildren([indexRoute, contactRoute]);

// console.log(routeTree);

// // Set up a Router instance
// const router = new Router({
//   routeTree,
//   defaultPreload: "intent",
// });

// console.log(router);

// declare module "@tanstack/react-router" {
//   interface Register {
//     router: typeof router;
//   }
// }

function App() {
  return (
    // <RouterProvider router={router}>
    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
      {/* <Navbar /> */}
      <Home />
      <Pricing />
      <Text />
      <Footer />
    </div>
    // </RouterProvider>
  );
}

export default App;

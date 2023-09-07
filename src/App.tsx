import "./App.css";
import Home from "./components/Home";

import Footer from "./components/Footer";
import Pricing from "./components/Pricing";
import Text from "./components/Text";

import Webdesign from "./pages/Webdesign.tsx";
import Webshop from "./pages/Webshops.tsx";
import Contact from "./pages/Contact.tsx";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Web Design", href: "/webdesign" },
  { name: "Web Shops", href: "/webshops" },
  { name: "Portfolio", href: "/#" },
  { name: "Kontakt", href: "/kontakt" },
];

import {
  RouterProvider,
  Outlet,
  Link,
  Route,
  ErrorComponent,
  Router,
  RootRoute,
  ParseRoute,
  RegisteredRouter,
  useRouter,
  useRouterState,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

const rootRoute = new RootRoute({
  component: () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
      <>
        {/* <div className="p-2 flex gap-2 text-lg">
          <Link
            to="/"
            activeProps={{
              className: 'font-bold',
            }}
            activeOptions={{ exact: true }}
          >
            Home
          </Link>{' '}
          <Link
            to={'/posts'}
            activeProps={{
              className: 'font-bold',
            }}
          >
            Posts
          </Link>
        </div>
        
        <hr /> */}

        <header className="absolute inset-x-0 top-0 z-50">
          <nav
            className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
            aria-label="Global"
          >
            <div className="flex lg:flex-1">
              <a href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Webstark Wien</span>
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=blue&shade=600"
                  alt=""
                />
              </a>
            </div>
            <div className="flex lg:hidden">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center  p-2.5 text-black"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="hidden lg:flex lg:gap-x-12">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  {item.name}
                </Link>
              ))}
            </div>
            {/* <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a
              href="#"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Log in <span aria-hidden="true">&rarr;</span>
            </a>
          </div> */}
          </nav>
          <Dialog
            as="div"
            className="lg:hidden"
            open={mobileMenuOpen}
            onClose={setMobileMenuOpen}
          >
            <div className="fixed inset-0 z-50" />
            <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                <a href="/" className="-m-1.5 p-1.5">
                  <span className="sr-only">Miljkovic</span>
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=blue&shade=600"
                    alt=""
                  />
                </a>
                <button
                  type="button"
                  className="-m-2.5  p-2.5 text-black"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        onClick={() => setMobileMenuOpen(false)}
                        to={item.href}
                        activeProps={{
                          className: "font-bold",
                        }}
                        activeOptions={{ exact: true }}
                        className="-mx-3 block  px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                  {/* <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block  px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </a>
                </div> */}
                </div>
              </div>
            </Dialog.Panel>
          </Dialog>
        </header>

        <Outlet />
        {/* Start rendering router matches */}
        <TanStackRouterDevtools position="bottom-right" />
      </>
    );
  },
});

const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/",
  component: () => {
    return <Home />;
  },
});

const webDesignRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/webdesign",
  component: () => {
    return <Webdesign />;
  },
});

const webShopRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/webshop",
  component: () => {
    return <Webshop />;
  },
});

const contactRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/kontakt",
  component: () => {
    return <Contact />;
  },
});

const routeTree = rootRoute.addChildren([
  // postsRoute.addChildren([postRoute, postsIndexRoute]),
  indexRoute,
  webDesignRoute,
  webShopRoute,
  contactRoute,
]);

// Set up a Router instance
const router = new Router({
  routeTree,
  defaultPreload: "intent",
});

// Register things for typesafety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

function App() {
  return (
    <RouterProvider router={router}>
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <Home />
        <Pricing />
        <Text />
        <Footer />
      </div>
    </RouterProvider>
  );
}

export default App;

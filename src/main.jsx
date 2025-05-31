import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./scss/main.scss";
import Welcome from "./pages/Welcome/Welcome";
import Navigation from "./components/Navigation/Navigation";

import Footer from "./components/Footer/Footer";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  redirect,
} from "react-router";
import Contacts from "./pages/Contacts/Contacts";
import OrganizationalAdministrative from "./pages/Documents/OrganizationalAdministrative/OrganizationalAdministrative";
import Administrative from "./pages/Documents/Administrative/Administrative";
import OrganizationalLegal from "./pages/Documents/OrganizationalLegal/OrganizationalLegal";
import News from "./pages/News/News";
import Team from "./pages/Team/Team";
const Layout = () => {
  return (
    <>
      <Navigation />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        loader: () => redirect("/welcome"),
      },
      {
        path: "/welcome",
        element: <Welcome />,
      },
      {
        path: "/contacts",
        element: <Contacts />,
      },
      {
        path: "/documents/organizational-administrative",
        element: <OrganizationalAdministrative />,
      },
      {
        path: "/documents/organizational-legal",
        element: <OrganizationalLegal />,
      },
      {
        path: "/documents/administrative",
        element: <Administrative />,
      },
      {
        path: "/news",
        element: <News />,
      },
      {
        path: "/team/teachers",
        element: <Team />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AllUpcomingEvents from "../pages/AllUpcomingEvents";
import EventDetails from "../pages/EventDetails";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/all-upcoming-events",
        Component: AllUpcomingEvents,
      },
      {
        path: "/event-details",
        Component: EventDetails,
      },
    ],
  },
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/register",
    Component: Register,
  },
]);

export default router;

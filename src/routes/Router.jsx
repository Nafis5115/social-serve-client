import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AllUpcomingEvents from "../pages/AllUpcomingEvents";
import EventDetails from "../pages/EventDetails";
import DashboardLayout from "../layout/DashboardLayout";
import Dashboard from "../pages/dashboard/Dashboard";
import EditProfile from "../pages/dashboard/EditProfile";
import JoinedEvents from "../pages/dashboard/JoinedEvents";
import MyEvents from "../pages/dashboard/MyEvents";
import CreateEvent from "../pages/dashboard/CreateEvent";

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
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/dashboard",
        Component: DashboardLayout,
        children: [
          {
            index: true,
            Component: Dashboard,
          },
          {
            path: "/dashboard/edit-profile",
            Component: EditProfile,
          },
          {
            path: "/dashboard/joined-events",
            Component: JoinedEvents,
          },
          {
            path: "/dashboard/my-events",
            Component: MyEvents,
          },
          {
            path: "/dashboard/create-event",
            Component: CreateEvent,
          },
        ],
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
]);

export default router;

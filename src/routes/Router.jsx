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
import AllActiveEvents from "../pages/AllActiveEvents";
import PrivateRoute from "./PrivateRoute";
import axiosPublic from "../api/axiosPublic";
import EditEvent from "../pages/dashboard/EditEvent";

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
            element: (
              <PrivateRoute>
                <Dashboard></Dashboard>
              </PrivateRoute>
            ),
          },
          {
            path: "/dashboard/edit-profile",
            element: (
              <PrivateRoute>
                <EditProfile></EditProfile>
              </PrivateRoute>
            ),
          },
          {
            path: "/dashboard/joined-events",
            element: (
              <PrivateRoute>
                <JoinedEvents></JoinedEvents>
              </PrivateRoute>
            ),
          },
          {
            path: "/dashboard/my-events",
            element: (
              <PrivateRoute>
                <MyEvents></MyEvents>
              </PrivateRoute>
            ),
          },
          {
            path: "/dashboard/create-event",
            element: (
              <PrivateRoute>
                <CreateEvent></CreateEvent>
              </PrivateRoute>
            ),
          },
          {
            path: "/dashboard/edit-event/:id",
            element: (
              <PrivateRoute>
                <EditEvent></EditEvent>
              </PrivateRoute>
            ),
          },
        ],
      },
      {
        path: "/all-upcoming-events",
        Component: AllUpcomingEvents,
      },
      {
        path: "/all-active-events",
        Component: AllActiveEvents,
      },
      {
        path: "/event-details/:id",
        element: (
          <PrivateRoute>
            <EventDetails></EventDetails>
          </PrivateRoute>
        ),
        loader: async ({ params }) => {
          const res = await axiosPublic.get(`/event-details/${params.id}`);
          return res.data;
        },
      },
    ],
  },
]);

export default router;

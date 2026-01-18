import React from "react";
import Dashboard from "../pages/dashboard/Dashboard";
import { Outlet } from "react-router";

const DashboardLayout = () => {
  return (
    <div className="min-h-screen bg-soft flex text-black max-w-7xl mx-auto mt-4  ">
      <aside className="w-64 h-150 bg-navy text-white hidden md:flex flex-col">
        <nav className="flex-1 p-6 space-y-2 text-sm">
          <a className="block px-4 py-2 rounded bg-red text-white font-semibold">
            Dashboard
          </a>

          <a className="block px-4 py-2 rounded hover:bg-red hover:text-white">
            My Events
          </a>

          <a className="block px-4 py-2 rounded hover:bg-red hover:text-white">
            Joined Events
          </a>

          <a className="block px-4 py-2 rounded hover:bg-red hover:text-white">
            Create Event
          </a>

          <a className="block px-4 py-2 rounded hover:bg-red hover:text-white">
            Edit Profile
          </a>
        </nav>
      </aside>

      <main className="flex-1 p-0 md:px-10">
        <Outlet></Outlet>
      </main>
    </div>
  );
};

export default DashboardLayout;

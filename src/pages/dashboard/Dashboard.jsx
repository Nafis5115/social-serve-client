import React from "react";

const Dashboard = () => {
  return (
    <div>
      <div className="mb-10">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p className="text-gray-600 text-sm">
          Overview of your activities and events
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <StatCard title="Events Joined" value="12" />
        <StatCard title="Events Created" value="4" />
        <StatCard title="Active Events" value="2" />
        <StatCard title="Total Impact" value="320+" />
      </div>

      <div className="bg-white rounded-xl shadow p-6 mb-10">
        <h2 className="font-bold text-lg mb-4">My Recent Events</h2>

        <div className="space-y-4 text-sm">
          <EventRow
            title="Road Cleaning – Mirpur 10"
            date="25 Feb 2026"
            status="Upcoming"
          />
          <EventRow
            title="Tree Plantation – Gazipur"
            date="10 Mar 2026"
            status="Active"
          />
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ title, value }) => (
  <div className="bg-white rounded-xl shadow p-6">
    <p className="text-sm text-gray-500">{title}</p>
    <h3 className="text-3xl font-bold mt-2">{value}</h3>
  </div>
);

const EventRow = ({ title, date, status }) => (
  <div className="flex justify-between items-center border-b pb-3">
    <div>
      <p className="font-semibold">{title}</p>
      <p className="text-gray-500 text-xs">{date}</p>
    </div>
    <span className="text-xs px-3 py-1 rounded-full bg-red text-white">
      {status}
    </span>
  </div>
);
export default Dashboard;

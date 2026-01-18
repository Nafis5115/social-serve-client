import React from "react";

const MyEvents = () => {
  return (
    <div className="min-h-screen bg-soft">
      <div className="mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold">My Events</h1>
          <p className="text-gray-600 text-sm">
            Events you have created and are managing
          </p>
        </div>

        <div className="hidden md:block bg-white rounded-xl shadow overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr className="text-left">
                <th className="p-4">Event</th>
                <th className="p-4">Date</th>
                <th className="p-4">Location</th>
                <th className="p-4">Status</th>
                <th className="p-4">Actions</th>
              </tr>
            </thead>

            <tbody>
              <EventRow
                title="Road Cleaning – Mirpur 10"
                date="25 Feb 2026"
                location="Dhaka"
                status="Upcoming"
              />
              <EventRow
                title="Tree Plantation – Gazipur"
                date="10 Mar 2026"
                location="Gazipur"
                status="Active"
              />
            </tbody>
          </table>
        </div>

        <div className="md:hidden space-y-4">
          <EventCard
            title="Road Cleaning – Mirpur 10"
            date="25 Feb 2026"
            location="Dhaka"
            status="Upcoming"
          />
          <EventCard
            title="Tree Plantation – Gazipur"
            date="10 Mar 2026"
            location="Gazipur"
            status="Active"
          />
        </div>
      </div>
    </div>
  );
};

export default MyEvents;

const EventRow = ({ title, date, location, status }) => (
  <tr className="border-t">
    <td className="p-4 font-medium">{title}</td>
    <td className="p-4">{date}</td>
    <td className="p-4">{location}</td>
    <td className="p-4">
      <span className="px-3 py-1 rounded-full text-xs bg-red text-white">
        {status}
      </span>
    </td>
    <td className="p-4 space-x-3">
      <button className="text-green-500 font-semibold">View</button>
      <button className="text-blue-500 font-semibold">Edit</button>
      <button className="text-red font-semibold">Delete</button>
    </td>
  </tr>
);

const EventCard = ({ title, date, location, status }) => (
  <div className="bg-white rounded-xl shadow p-4">
    <div className="flex justify-between items-start">
      <h3 className="font-semibold">{title}</h3>
      <span className="px-3 py-1 rounded-full text-xs bg-red text-white">
        {status}
      </span>
    </div>

    <p className="text-sm text-gray-600 mt-2">📍 {location}</p>
    <p className="text-sm text-gray-600">🗓 {date}</p>

    <div className="flex gap-4 mt-4 text-sm font-semibold">
      <button className="text-green-500">View</button>
      <button className="text-blue-500">Edit</button>
      <button className="text-red">Delete</button>
    </div>
  </div>
);

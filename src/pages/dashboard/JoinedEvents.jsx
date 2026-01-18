import React from "react";

const JoinedEvents = () => {
  return (
    <div className=" bg-soft">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold">Joined Events</h1>
          <p className="text-gray-600 text-sm">
            Events you have joined as a volunteer
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <JoinedCard
            title="Road Cleaning – Mirpur 10"
            date="25 Feb 2026"
            location="Dhaka"
            role="Volunteer"
          />

          <JoinedCard
            title="Flood Relief Operations"
            date="02 Mar 2026"
            location="Sylhet"
            role="Support Team"
          />
        </div>
      </div>
    </div>
  );
};

export default JoinedEvents;

const JoinedCard = ({ title, date, location, role }) => (
  <div className="bg-white rounded-xl shadow p-6 flex flex-col justify-between">
    <div>
      <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full">
        Joined
      </span>

      <h3 className="font-bold text-lg mt-3">{title}</h3>

      <p className="text-sm text-gray-600 mt-1">📍 {location}</p>

      <p className="text-sm text-gray-600">🗓 {date}</p>

      <p className="text-sm text-gray-500 mt-2">Role: {role}</p>
    </div>

    <button className="mt-6 bg-red text-white py-2 rounded hover:bg-rose">
      View Event
    </button>
  </div>
);

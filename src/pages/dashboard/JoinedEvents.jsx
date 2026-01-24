import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

import { formattedDate } from "../../helpers/formattedData";
import { Link } from "react-router";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const JoinedEvents = () => {
  const [myJoins, setMyJoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user, tokenReady } = useAuth();
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    if (!user?.email || !tokenReady) return;
    (async () => {
      try {
        setLoading(true);
        const res = await axiosSecure.get(`/my-joins?email=${user?.email}`);
        setMyJoins(res.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [axiosSecure, user?.email, tokenReady]);
  if (loading)
    return (
      <div className=" flex justify-center w-full items-center h-screen">
        <span className="loading loading-spinner loading-xl text-black"></span>
      </div>
    );
  return (
    <div className=" bg-soft">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold">Joined Events</h1>
          <p className="text-gray-600 text-sm">
            Events you have joined as a volunteer
          </p>
        </div>
        {myJoins.length === 0 && (
          <div className="flex justify-center w-full items-center h-screen pb-40">
            <h3 className="text-xl font-semibold text-gray-600">
              No events found
            </h3>
          </div>
        )}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {myJoins.map((join) => (
            <JoinedCard key={join._id} event={join.event} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default JoinedEvents;

const JoinedCard = ({ event }) => (
  <div className="bg-white rounded-xl shadow p-6 flex flex-col justify-between">
    <div>
      <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full">
        Joined
      </span>

      <h3 className="font-bold text-lg mt-3">{event.eventTitle}</h3>

      <p className="text-sm text-gray-600 mt-1">📍 {event.location}</p>

      <p className="text-sm text-gray-600">
        🗓 {formattedDate(event.startDate)} - {formattedDate(event.endDate)}
      </p>
    </div>

    <Link
      to={`/event-details/${event._id}`}
      className="mt-6 bg-red text-white py-2 rounded hover:bg-rose flex justify-center"
    >
      View Event
    </Link>
  </div>
);

import { useEffect, useState } from "react";

import useAuth from "../../hooks/useAuth";
import { formattedDate } from "../../helpers/formattedData";
import { Link } from "react-router";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const MyEvents = () => {
  const [myEvents, setMyEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const res = await axiosSecure.get(`/my-events?email=${user?.email}`);
        setMyEvents(res.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [user, axiosSecure]);

  const handleEventDelete = async (id) => {
    try {
      setLoading(true);
      const res = await axiosSecure.delete(`/delete-event/${id}`);
      if (res.data.deletedCount) {
        const remainingEvent = myEvents.filter((event) => event._id !== id);
        setMyEvents(remainingEvent);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  if (loading)
    return (
      <div className=" flex justify-center w-full items-center h-screen">
        <span className="loading loading-spinner loading-xl"></span>
      </div>
    );
  return (
    <div className="min-h-screen bg-soft">
      <div className="mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold">My Events</h1>
          <p className="text-gray-600 text-sm">
            Events you have created and are managing
          </p>
        </div>
        {myEvents.length === 0 ? (
          <div className="flex justify-center w-full items-center h-screen pb-40">
            <h3 className="text-xl font-semibold text-gray-600">
              No events found
            </h3>
          </div>
        ) : (
          <div className="hidden md:block bg-white rounded-xl shadow overflow-hidden mb-10">
            <table className="w-full text-sm">
              <thead className="bg-gray-50">
                <tr className="text-left">
                  <th className="p-4">Event</th>
                  <th className="p-4">Start Date</th>
                  <th className="p-4">End Date</th>
                  <th className="p-4">Location</th>
                  <th className="p-4">Created At</th>
                  <th className="p-4">Actions</th>
                </tr>
              </thead>

              <tbody>
                {myEvents.map((event) => (
                  <EventRow
                    key={event._id}
                    event={event}
                    handleEventDelete={handleEventDelete}
                  ></EventRow>
                ))}
              </tbody>
            </table>
          </div>
        )}

        <div className="md:hidden space-y-4">
          {myEvents.map((event) => (
            <EventCard
              key={event._id}
              event={event}
              handleEventDelete={handleEventDelete}
            ></EventCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyEvents;

const EventRow = ({ event, handleEventDelete }) => (
  <tr className="border-t">
    <td className="p-4 font-medium">{event.eventTitle}</td>
    <td className="p-4">{formattedDate(event.startDate)}</td>
    <td className="p-4">{formattedDate(event.endDate)}</td>
    <td className="p-4">{event.location}</td>
    <td className="p-4">{formattedDate(event.createdAt)}</td>

    <td className="p-4 space-x-3">
      <Link
        to={`/event-details/${event._id}`}
        className="text-green-500 font-semibold"
      >
        View
      </Link>
      <Link
        to={`/dashboard/edit-event/${event._id}`}
        state={{ event }}
        className="text-blue-500 font-semibold"
      >
        Edit
      </Link>
      <button
        onClick={() => handleEventDelete(event._id)}
        className="text-red font-semibold cursor-pointer"
      >
        Delete
      </button>
    </td>
  </tr>
);

const EventCard = ({ event, handleEventDelete }) => (
  <div className="bg-white rounded-xl shadow p-4">
    <div className="flex justify-between items-start">
      <h3 className="font-semibold">{event.eventTitle}</h3>
    </div>

    <p className="text-sm text-gray-600 mt-2">📍 {event.location}</p>
    <p className="text-sm text-gray-600">
      🗓 {formattedDate(event.startDate)} - {formattedDate(event.endDate)}
    </p>

    <div className="flex gap-4 mt-4 text-sm font-semibold">
      <Link to={`/event-details/${event._id}`} className="text-green-500">
        View
      </Link>
      <Link to={`/dashboard/edit-event/${event._id}`} className="text-blue-500">
        Edit
      </Link>
      <button
        onClick={() => handleEventDelete(event._id)}
        className="text-red cursor-pointer"
      >
        Delete
      </button>
    </div>
  </div>
);

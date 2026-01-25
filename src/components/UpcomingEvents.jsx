import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import EventCard from "./cards/EventCard";
import useAxios from "../hooks/useAxios";

const UpcomingEvents = () => {
  const [events, setEvents] = useState([]);
  const axios = useAxios();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const res = await axios.get("/upcoming-events?page=1&limit=6");
        setEvents(res?.data?.events || []);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [axios]);

  if (loading)
    return (
      <div className=" flex justify-center w-full items-start mt-20 h-50">
        <span className="loading loading-spinner text-black loading-xl"></span>
      </div>
    );
  return (
    <div>
      <section className="py-24 bg-soft text-black">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl font-extrabold mb-10 text-center">
            Upcoming Events
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {events.map((event) => (
              <EventCard key={event._id} event={event}></EventCard>
            ))}
          </div>

          <div className="text-center mt-14 cursor-pointer">
            <Link
              to={"/all-upcoming-events"}
              className="inline-block bg-navy text-white px-8 py-3 rounded font-semibold hover:bg-black"
            >
              View All Upcoming Events
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UpcomingEvents;

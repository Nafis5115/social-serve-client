import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import useAxios from "../hooks/useAxios";
import { daysAgo } from "../helpers/daysAgo";

const ActiveEvents = () => {
  const [events, setEvents] = useState([]);
  const axios = useAxios();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const res = await axios.get("/active-events?page=1&limit=4");
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
      <section className="bg-navy text-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl font-extrabold text-center mb-16">
            Active Events Right Now
          </h3>

          <div className="grid md:grid-cols-2 gap-10">
            {events.map((event) => (
              <div key={event._id} className="bg-white/10 p-8 rounded-xl">
                <h4 className="font-bold text-xl">{event.eventTitle}</h4>
                <p className="text-sm text-white/70 mt-2">
                  Started {daysAgo(event.startDate)} days ago
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center mt-14 cursor-pointer">
          <Link
            to={"/all-active-events"}
            className="inline-block bg-white text-black px-8 py-3 rounded font-semibold hover:bg-red hover:text-white"
          >
            View All Active Events
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ActiveEvents;

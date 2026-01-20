import React, { useEffect, useState } from "react";
import useAxios from "../hooks/useAxios";
import EventCard from "../components/cards/EventCard";

const AllUpcomingEvents = () => {
  const [events, setEvents] = useState([]);
  const axios = useAxios();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const res = await axios.get("/upcoming-events");
        setEvents(res.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [axios]);
  if (loading)
    return (
      <div className=" flex justify-center w-full items-start mt-20 h-screen">
        <span className="loading loading-spinner text-black loading-xl"></span>
      </div>
    );
  return (
    <div class="bg-soft text-navy">
      <section class="bg-white py-14 shadow-sm">
        <h2 class="text-3xl md:text-4xl font-extrabold text-center mb-10">
          Upcoming Events
        </h2>
        <div class="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-4">
          <input
            type="text"
            placeholder="Search by event name..."
            class="border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary"
          />

          <select class="border rounded-lg px-4 py-3 text-sm">
            <option>All Categories</option>
            <option>Cleanup</option>
            <option>Plantation</option>
            <option>Donation</option>
            <option>Relief</option>
          </select>

          <select class="border rounded-lg px-4 py-3 text-sm">
            <option>All Locations</option>
            <option>Dhaka</option>
            <option>Chattogram</option>
            <option>Sylhet</option>
            <option>Rajshahi</option>
          </select>
        </div>
      </section>

      <section class="py-20">
        <div class="max-w-7xl mx-auto px-6">
          <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event) => (
              <EventCard key={event._id} event={event}></EventCard>
            ))}
          </div>

          <div class="flex justify-center mt-16 gap-2">
            <button class="px-4 py-2 border rounded hover:bg-soft cursor-pointer">
              Prev
            </button>
            <button class="px-4 py-2 bg-red text-white rounded cursor-pointer">
              1
            </button>
            <button class="px-4 py-2 border rounded hover:bg-soft cursor-pointer">
              2
            </button>
            <button class="px-4 py-2 border rounded hover:bg-soft cursor-pointer">
              3
            </button>
            <button class="px-4 py-2 border rounded hover:bg-soft cursor-pointer">
              Next
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AllUpcomingEvents;

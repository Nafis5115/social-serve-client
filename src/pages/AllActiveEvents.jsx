import React, { useEffect, useState } from "react";
import useAxios from "../hooks/useAxios";
import EventCard from "../components/cards/EventCard";

const AllActiveEvents = () => {
  const [events, setEvents] = useState([]);
  const axios = useAxios();
  const [loading, setLoading] = useState(true);
  const [limit] = useState(6);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const res = await axios.get(
          `/active-events?page=${page}&limit=${limit}`,
        );
        setEvents(res.data.events);
        setTotalPages(res.data.totalPages);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    })();
  }, [axios, limit, page]);
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
          Active Events
        </h2>
        <div class="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Search by event name..."
            class="border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary"
          />

          <select class="border rounded-lg px-4 py-3 text-sm">
            <option>All Categories</option>
            <option value="Cleanup">Cleanup</option>
            <option value="Environment">Environment</option>
            <option value="Donation">Donation</option>
            <option value="Relief">Relief</option>
            <option value="Social">Social</option>
            <option value="Health">Health</option>
            <option value="Education">Education</option>
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
            <button
              disabled={page === 1}
              onClick={() => setPage(page - 1)}
              className="px-4 py-2 border rounded disabled:opacity-50"
            >
              Prev
            </button>
            {[...Array(totalPages).keys()].map((num) => (
              <button
                key={num}
                onClick={() => setPage(num + 1)}
                className={`px-4 py-2 rounded ${
                  page === num + 1
                    ? "bg-red text-white"
                    : "border hover:bg-soft"
                }`}
              >
                {num + 1}
              </button>
            ))}

            <button
              disabled={page === totalPages}
              onClick={() => setPage(page + 1)}
              className="px-4 py-2 border rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AllActiveEvents;

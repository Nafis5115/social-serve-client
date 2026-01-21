import React, { useEffect, useState } from "react";
import useAxios from "../hooks/useAxios";
import EventCard from "../components/cards/EventCard";

const AllUpcomingEvents = () => {
  const [events, setEvents] = useState([]);
  const axios = useAxios();
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [limit] = useState(6);
  const [totalPages, setTotalPages] = useState(1);
  const [search, setSearch] = useState("");

  const [category, setCategory] = useState("");

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);

        const res = await axios.get(
          `/upcoming-events?page=${page}&limit=${limit}&search=${search}&category=${category}`,
        );

        setEvents(res.data.events);
        setTotalPages(res.data.totalPages);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    })();
  }, [axios, page, limit, category, search]);

  return (
    <div className="bg-soft text-navy">
      <section className="bg-white py-14 shadow-sm">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-10">
          All Upcoming Events
        </h2>
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-4">
          <input
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setPage(1);
            }}
            type="text"
            placeholder="Search by event name..."
            className="border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary"
          />

          <select
            value={category}
            className="border rounded-lg px-4 py-3 text-sm"
            onChange={(e) => {
              setCategory(e.target.value);
              setPage(1);
            }}
          >
            <option value="">All Categories</option>
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

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          {loading && (
            <div className="flex justify-center items-start  h-screen">
              <span className="loading loading-spinner loading-lg text-center"></span>
            </div>
          )}

          {!loading && events.length === 0 && (
            <div className="text-center py-20">
              <h3 className="text-xl font-semibold text-gray-600">
                No events found
              </h3>
            </div>
          )}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event) => (
              <EventCard key={event._id} event={event}></EventCard>
            ))}
          </div>
          {events.length >= limit && totalPages > 1 && (
            <div className="flex justify-center mt-16 gap-2">
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
          )}
        </div>
      </section>
    </div>
  );
};

export default AllUpcomingEvents;

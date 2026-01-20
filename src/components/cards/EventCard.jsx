import React from "react";
import { formattedDate } from "../../helpers/formattedData";
import { Link } from "react-router";

const EventCard = ({ event }) => {
  return (
    <div className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden">
      <img src={event.thumbnailUrl} className="h-44 w-full object-cover" />
      <div className="p-6">
        <span className="text-xs bg-red text-white px-3 py-1 rounded-full">
          {event.eventType}
        </span>
        <h4 className="font-bold text-lg mt-3">{event.eventTitle}</h4>
        <p className="text-sm text-gray-600 mt-1">
          📍 {event.location} • 🗓 {formattedDate(event.startDate)}
        </p>
        <Link
          to={`/event-details/${event._id}`}
          className="inline-block mt-4 text-red font-semibold cursor-pointer"
        >
          View Details →
        </Link>
      </div>
    </div>
  );
};

export default EventCard;

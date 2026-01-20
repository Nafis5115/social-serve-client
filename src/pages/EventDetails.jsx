import React from "react";
import { useLoaderData } from "react-router";
import { formattedDate } from "../helpers/formattedData";

const EventDetails = () => {
  const eventData = useLoaderData();

  return (
    <div className="bg-soft text-navy">
      <section className="relative h-95">
        <img
          src={eventData.thumbnailUrl}
          className="w-full h-full object-cover"
          alt="Event Banner"
        />

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl  mx-auto ">
            <div className="px-6 pb-10 text-white">
              <h2 className="text-5xl text-center font-extrabold mt-4">
                {eventData.eventTitle}
              </h2>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-12">
          <div className="bg-white rounded-xl p-8 shadow">
            <h3 className="text-2xl font-bold mb-4">About This Event</h3>
            <p className="text-gray-700 leading-relaxed">
              {eventData.description}
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow">
            <h3 className="text-2xl font-bold mb-4">
              Volunteer Responsibilities
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              {eventData.responsibilities.map((responsibility, index) => (
                <li key={index}>{responsibility}</li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-xl p-8 shadow">
            <h3 className="text-2xl font-bold mb-4">Safety & Guidelines</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              {eventData.safetyGuidelines.map((safetyGuideline, index) => (
                <li key={index}>{safetyGuideline}</li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-xl p-8 shadow">
            <h3 className="text-2xl font-bold mb-4">Event Location</h3>
            <div className="h-64  rounded flex items-center justify-center text-gray-500">
              <iframe
                className="w-full h-full"
                src={`https://maps.google.com/maps?hl=en&q=${eventData.location}&t=&z=14&ie=UTF8&iwloc=B&output=embed`}
              ></iframe>
            </div>
          </div>
        </div>

        <aside className="space-y-8">
          <div className="bg-white rounded-xl p-6 shadow">
            <h4 className="font-bold text-lg mb-4">Event Information</h4>

            <div className="space-y-3 text-sm">
              <p>
                <strong>Start Date:</strong>{" "}
                {formattedDate(eventData.startDate)}
              </p>
              <p>
                <strong>Start Date:</strong> {formattedDate(eventData.endDate)}
              </p>
              <p>
                <strong>Location:</strong> {eventData.location}
              </p>
              <p>
                <strong>Event Type:</strong> {eventData.eventType}
              </p>
              <p>
                <strong>Participants:</strong> 320 Joined
              </p>
            </div>

            <button className="mt-6 w-full bg-red text-white py-3 rounded-lg font-semibold hover:bg-rose">
              Join Event
            </button>
          </div>

          <div className="bg-white rounded-xl p-6 shadow">
            <h4 className="font-bold text-lg mb-4">Organizer</h4>

            <div className="flex items-center gap-4">
              <img src="https://i.pravatar.cc/60" className="rounded-full" />
              <div>
                <p className="font-semibold">Green Dhaka Initiative</p>
                <p className="text-sm text-gray-500">Verified Organizer</p>
              </div>
            </div>
          </div>
        </aside>
      </section>
    </div>
  );
};

export default EventDetails;

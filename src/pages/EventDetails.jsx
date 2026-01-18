import React from "react";

const EventDetails = () => {
  return (
    <div className="bg-soft text-navy">
      <section className="relative h-95">
        <img
          src="https://images.unsplash.com/photo-1597668094841-6ed2b257d9d1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cm9hZCUyMGNsZWFuaW5nfGVufDB8fDB8fHww"
          className="w-full h-full object-cover"
          alt="Event Banner"
        />

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl  mx-auto grid lg:grid-cols-2">
            <div className="px-6 pb-10 text-white">
              <span className="inline-block bg-red px-4 py-1 rounded-full text-sm">
                Upcoming Event
              </span>
              <h2 className="text-4xl font-extrabold mt-4">
                Road Cleaning Program – Mirpur 10, Dhaka
              </h2>
              <p className="mt-2 text-white/90 max-w-2xl">
                Join our community-driven cleanup initiative to improve urban
                hygiene and environmental awareness.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-12">
          <div className="bg-white rounded-xl p-8 shadow">
            <h3 className="text-2xl font-bold mb-4">About This Event</h3>
            <p className="text-gray-700 leading-relaxed">
              This road cleaning program is organized to improve cleanliness in
              Mirpur 10 and raise awareness about responsible waste disposal.
              Volunteers will work together to clean public roads, footpaths,
              and surrounding areas while engaging local residents.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              Necessary equipment such as gloves, masks, and waste bags will be
              provided. This event is suitable for individuals, students, and
              community groups who want to make a visible impact.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow">
            <h3 className="text-2xl font-bold mb-4">
              Volunteer Responsibilities
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Participate in cleaning assigned areas</li>
              <li>Follow safety guidelines provided by organizers</li>
              <li>Work collaboratively with other volunteers</li>
              <li>Help segregate and dispose waste responsibly</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl p-8 shadow">
            <h3 className="text-2xl font-bold mb-4">Safety & Guidelines</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Protective gear must be worn at all times</li>
              <li>Follow instructions from event coordinators</li>
              <li>Stay hydrated and take breaks if needed</li>
              <li>Report any unsafe situation immediately</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl p-8 shadow">
            <h3 className="text-2xl font-bold mb-4">Event Location</h3>
            <div className="h-64 bg-gray-200 rounded flex items-center justify-center text-gray-500">
              Map will be displayed here
            </div>
          </div>
        </div>

        <aside className="space-y-8">
          <div className="bg-white rounded-xl p-6 shadow">
            <h4 className="font-bold text-lg mb-4">Event Information</h4>

            <div className="space-y-3 text-sm">
              <p>
                <strong>Date:</strong> 25 February 2026
              </p>
              <p>
                <strong>Time:</strong> 8:00 AM – 12:00 PM
              </p>
              <p>
                <strong>Location:</strong> Mirpur 10, Dhaka
              </p>
              <p>
                <strong>Event Type:</strong> Cleanup Drive
              </p>
              <p>
                <strong>Participants:</strong> 320 Joined
              </p>
            </div>

            <button className="mt-6 w-full bg-red text-white py-3 rounded-lg font-semibold hover:bg-rose">
              Join Event
            </button>

            <p className="text-xs text-gray-500 mt-3 text-center">
              Login required to join this event
            </p>
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

          <div className="bg-white rounded-xl p-6 shadow">
            <h4 className="font-bold text-lg mb-4">Share Event</h4>
            <div className="flex gap-3">
              <button className="flex-1 border py-2 rounded hover:bg-soft">
                Facebook
              </button>
              <button className="flex-1 border py-2 rounded hover:bg-soft">
                Twitter (X)
              </button>
            </div>
          </div>
        </aside>
      </section>
    </div>
  );
};

export default EventDetails;

import React from "react";

const PlatformFeatures = () => {
  return (
    <div>
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl font-extrabold text-center mb-16">
            Platform Features
          </h3>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="border p-8 rounded-xl">
              <h4 className="font-bold text-lg">Event Lifecycle Control</h4>
              <p className="text-sm text-gray-600 mt-2">
                Draft, publish, update, track, and close events from a unified
                dashboard.
              </p>
            </div>

            <div className="border p-8 rounded-xl">
              <h4 className="font-bold text-lg">Volunteer History & Impact</h4>
              <p className="text-sm text-gray-600 mt-2">
                Volunteers maintain a verifiable participation and contribution
                record.
              </p>
            </div>

            <div className="border p-8 rounded-xl">
              <h4 className="font-bold text-lg">Role-Based Access</h4>
              <p className="text-sm text-gray-600 mt-2">
                Separate experiences for volunteers, organizers, and
                administrators.
              </p>
            </div>

            <div className="border p-8 rounded-xl">
              <h4 className="font-bold text-lg">Location-Based Discovery</h4>
              <p className="text-sm text-gray-600 mt-2">
                Events are discoverable based on district, city, and region.
              </p>
            </div>

            <div className="border p-8 rounded-xl">
              <h4 className="font-bold text-lg">
                Transparency & Accountability
              </h4>
              <p className="text-sm text-gray-600 mt-2">
                Every event is linked to an accountable organizer profile.
              </p>
            </div>

            <div className="border p-8 rounded-xl">
              <h4 className="font-bold text-lg">Scalable Infrastructure</h4>
              <p className="text-sm text-gray-600 mt-2">
                Designed to scale from local initiatives to national programs.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PlatformFeatures;

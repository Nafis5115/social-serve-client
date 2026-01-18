import React from "react";

const FAQ = () => {
  return (
    <div>
      <section className="bg-white py-24">
        <div className="max-w-5xl mx-auto px-6">
          <h3 className="text-3xl font-extrabold text-center mb-16">FAQ</h3>

          <div className="space-y-6">
            <div className="border p-6 rounded-xl">
              <h4 className="font-semibold">Is this platform free?</h4>
              <p className="text-sm text-gray-600 mt-2">
                Yes, SocialServe is free for volunteers and community
                organizers.
              </p>
            </div>

            <div className="border p-6 rounded-xl">
              <h4 className="font-semibold">
                Can NGOs manage multiple events?
              </h4>
              <p className="text-sm text-gray-600 mt-2">
                Yes, organizations can manage multiple programs simultaneously.
              </p>
            </div>

            <div className="border p-6 rounded-xl">
              <h4 className="font-semibold">
                How is event authenticity ensured?
              </h4>
              <p className="text-sm text-gray-600 mt-2">
                All events are tied to verified user accounts and audit trails.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;

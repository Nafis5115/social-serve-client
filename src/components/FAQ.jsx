import React from "react";

const FAQ = () => {
  return (
    <div>
      <section className="bg-white py-24 text-black">
        <div className="max-w-5xl mx-auto px-6">
          <h3 className="text-3xl font-extrabold text-center mb-16">FAQ</h3>

          <div className="space-y-6">
            <div className="collapse collapse-arrow border border-black/20">
              <input type="radio" name="my-accordion-2" defaultChecked />
              <div className="collapse-title font-semibold">
                Is this platform free?
              </div>
              <div className="collapse-content text-sm">
                Yes, SocialServe is free for volunteers and community
                organizers.
              </div>
            </div>
            <div className="collapse collapse-arrow border border-black/20">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title font-semibold">
                Can NGOs manage multiple events?
              </div>
              <div className="collapse-content text-sm">
                Yes, organizations can manage multiple programs simultaneously.
              </div>
            </div>
            <div className="collapse collapse-arrow border border-black/20">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title font-semibold">
                How is event authenticity ensured?
              </div>
              <div className="collapse-content text-sm">
                All events are tied to verified user accounts and audit trails.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;

import React from "react";

const WhoUse = () => {
  return (
    <div>
      <section className="bg-soft py-24 text-black">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl font-extrabold text-center mb-16">
            Who Uses SocialServe?
          </h3>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="bg-white p-6 rounded-xl shadow">Volunteers</div>
            <div className="bg-white p-6 rounded-xl shadow">
              Event Organizers
            </div>
            <div className="bg-white p-6 rounded-xl shadow">NGOs</div>
            <div className="bg-white p-6 rounded-xl shadow">Institutions</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhoUse;

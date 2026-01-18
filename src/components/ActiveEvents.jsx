import React from "react";

const ActiveEvents = () => {
  return (
    <div>
      <section className="bg-navy text-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl font-extrabold text-center mb-16">
            Active Events Right Now
          </h3>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-white/10 p-8 rounded-xl">
              <h4 className="font-bold text-xl">Urban Cleanup – Dhaka North</h4>
              <p className="text-sm text-white/70 mt-2">
                Started 2 days ago • 320 volunteers joined
              </p>
            </div>
            <div className="bg-white/10 p-8 rounded-xl">
              <h4 className="font-bold text-xl">
                School Donation Drive – Rangpur
              </h4>
              <p className="text-sm text-white/70 mt-2">
                Ongoing • Supplies being distributed
              </p>
            </div>
            <div className="bg-white/10 p-8 rounded-xl">
              <h4 className="font-bold text-xl">River Cleaning – Buriganga</h4>
              <p className="text-sm text-white/70 mt-2">
                Multi-phase operation
              </p>
            </div>
            <div className="bg-white/10 p-8 rounded-xl">
              <h4 className="font-bold text-xl">
                Tree Plantation – Coastal Areas
              </h4>
              <p className="text-sm text-white/70 mt-2">
                Disaster prevention initiative
              </p>
            </div>
          </div>
        </div>
        <div className="text-center mt-14 cursor-pointer">
          <a className="inline-block bg-white text-black px-8 py-3 rounded font-semibold hover:bg-red hover:text-white">
            View All Upcoming Events
          </a>
        </div>
      </section>
    </div>
  );
};

export default ActiveEvents;

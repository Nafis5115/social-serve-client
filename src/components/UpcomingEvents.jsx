import React from "react";

const UpcomingEvents = () => {
  return (
    <div>
      <section className="py-24 bg-soft">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl font-extrabold mb-10 text-center">
            Upcoming Events
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c"
                className="h-44 w-full object-cover"
              />
              <div className="p-6">
                <span className="text-xs bg-primary text-white px-3 py-1 rounded-full">
                  Cleanup
                </span>
                <h4 className="font-bold text-lg mt-3">
                  Community Cleanup – Uttara Sector 7
                </h4>
                <p className="text-sm text-gray-600 mt-1">
                  📍 Dhaka • 🗓 12 March 2026
                </p>
                <a
                  href="event-details.html"
                  className="inline-block mt-4 text-primary font-semibold hover:underline"
                >
                  View Details →
                </a>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1469474968028-56623f02e42e"
                className="h-44 w-full object-cover"
              />
              <div className="p-6">
                <span className="text-xs bg-rose text-white px-3 py-1 rounded-full">
                  Plantation
                </span>
                <h4 className="font-bold text-lg mt-3">
                  Tree Plantation – Gazipur Highway
                </h4>
                <p className="text-sm text-gray-600 mt-1">
                  📍 Gazipur • 🗓 20 March 2026
                </p>
                <a
                  href="event-details.html"
                  className="inline-block mt-4 text-primary font-semibold hover:underline"
                >
                  View Details →
                </a>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1526256262350-7da7584cf5eb"
                className="h-44 w-full object-cover"
              />
              <div className="p-6">
                <span className="text-xs bg-maroon text-white px-3 py-1 rounded-full">
                  Donation
                </span>
                <h4 className="font-bold text-lg mt-3">
                  Ramadan Food Distribution Program
                </h4>
                <p className="text-sm text-gray-600 mt-1">
                  📍 Sylhet • 🗓 28 March 2026
                </p>
                <a
                  href="event-details.html"
                  className="inline-block mt-4 text-primary font-semibold hover:underline"
                >
                  View Details →
                </a>
              </div>
            </div>
          </div>

          <div className="text-center mt-14">
            <a className="inline-block bg-navy text-white px-8 py-3 rounded font-semibold hover:bg-black">
              View All Upcoming Events
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UpcomingEvents;

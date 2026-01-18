import React from "react";

const Home = () => {
  return (
    <div>
      <section className="bg-gradient-to-r from-primary via-rose to-maroon text-white">
        <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-14 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Powering Community Action <br />
              At National Scale
            </h2>
            <p className="mt-6 text-white/90 max-w-xl">
              SocialServe connects volunteers, organizers, NGOs, and
              institutions through a unified system to plan, execute, and track
              social development initiatives.
            </p>
            <div className="mt-8 flex gap-4">
              <a className="bg-navy px-6 py-3 rounded font-semibold hover:bg-black">
                Browse Events
              </a>
              <a className="border border-white px-6 py-3 rounded font-semibold hover:bg-white hover:text-navy">
                Join as Volunteer
              </a>
            </div>
          </div>

          <img
            src="https://media.istockphoto.com/id/1190692184/photo/latin-american-volunteers-working-hard-at-a-charity-construction-project.webp?a=1&b=1&s=612x612&w=0&k=20&c=RM4y9BdCzVYjWumefCWC5I0vtSLrSb8COYm-hNGJxEk="
            className="rounded-2xl shadow-2xl"
          />
        </div>
      </section>
      <section className="py-24 bg-soft">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12 gap-6">
            <div>
              <h3 className="text-3xl font-extrabold">Upcoming Events</h3>
              <p className="text-gray-600 mt-2 max-w-xl">
                Discover and join upcoming community programs scheduled across
                different regions and categories.
              </p>
            </div>

            <div className="flex gap-3">
              <select className="border rounded-lg px-4 py-2 text-sm">
                <option>All Categories</option>
                <option>Cleanup</option>
                <option>Plantation</option>
                <option>Donation</option>
              </select>
              <select className="border rounded-lg px-4 py-2 text-sm">
                <option>All Locations</option>
                <option>Dhaka</option>
                <option>Chattogram</option>
                <option>Sylhet</option>
              </select>
            </div>
          </div>

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

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl font-extrabold text-center mb-16">
            Featured Community Programs
          </h3>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-soft rounded-xl shadow overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1581579186985-9d1a3d97b8a3"
                className="h-48 w-full object-cover"
              />
              <div className="p-6">
                <span className="text-xs bg-primary text-white px-3 py-1 rounded-full">
                  National Program
                </span>
                <h4 className="font-bold text-lg mt-3">Clean City Campaign</h4>
                <p className="text-sm text-gray-600 mt-1">
                  Running in 12 districts
                </p>
              </div>
            </div>

            <div className="bg-soft rounded-xl shadow overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1469474968028-56623f02e42e"
                className="h-48 w-full object-cover"
              />
              <div className="p-6">
                <span className="text-xs bg-rose text-white px-3 py-1 rounded-full">
                  Govt Partnered
                </span>
                <h4 className="font-bold text-lg mt-3">
                  Green Bangladesh Initiative
                </h4>
                <p className="text-sm text-gray-600 mt-1">
                  Tree plantation drive
                </p>
              </div>
            </div>

            <div className="bg-soft rounded-xl shadow overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1526256262350-7da7584cf5eb"
                className="h-48 w-full object-cover"
              />
              <div className="p-6">
                <span className="text-xs bg-maroon text-white px-3 py-1 rounded-full">
                  Emergency
                </span>
                <h4 className="font-bold text-lg mt-3">
                  Flood Relief Operations
                </h4>
                <p className="text-sm text-gray-600 mt-1">
                  Rapid response teams
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

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
      </section>

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

      <section className="bg-soft py-24">
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

export default Home;

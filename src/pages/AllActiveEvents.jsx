import React from "react";

const AllActiveEvents = () => {
  return (
    <div class="bg-soft text-navy">
      <section class="bg-white py-14 shadow-sm">
        <h2 class="text-3xl md:text-4xl font-extrabold text-center mb-10">
          Active Events
        </h2>
        <div class="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-4">
          <input
            type="text"
            placeholder="Search by event name..."
            class="border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary"
          />

          <select class="border rounded-lg px-4 py-3 text-sm">
            <option>All Categories</option>
            <option>Cleanup</option>
            <option>Plantation</option>
            <option>Donation</option>
            <option>Relief</option>
          </select>

          <select class="border rounded-lg px-4 py-3 text-sm">
            <option>All Locations</option>
            <option>Dhaka</option>
            <option>Chattogram</option>
            <option>Sylhet</option>
            <option>Rajshahi</option>
          </select>
        </div>
      </section>

      <section class="py-20">
        <div class="max-w-7xl mx-auto px-6">
          <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div class="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1581579186985-9d1a3d97b8a3"
                class="h-48 w-full object-cover"
              />
              <div class="p-6">
                <div class="flex justify-between items-center">
                  <span class="text-xs bg-red text-white px-3 py-1 rounded-full">
                    Cleanup
                  </span>
                  <span class="text-xs text-green-600 font-semibold">
                    Upcoming
                  </span>
                </div>

                <h4 class="font-bold text-lg mt-3">
                  Road Cleaning – Mirpur 10
                </h4>

                <p class="text-sm text-gray-600 mt-1">
                  📍 Dhaka • 🗓 25 Feb 2026
                </p>

                <a href="#" class="inline-block mt-4 text-red font-semibold ">
                  View Details →
                </a>
              </div>
            </div>

            <div class="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1469474968028-56623f02e42e"
                class="h-48 w-full object-cover"
              />
              <div class="p-6">
                <div class="flex justify-between items-center">
                  <span class="text-xs bg-rose text-white px-3 py-1 rounded-full">
                    Plantation
                  </span>
                  <span class="text-xs text-green-600 font-semibold">
                    Upcoming
                  </span>
                </div>

                <h4 class="font-bold text-lg mt-3">
                  Tree Plantation – Gazipur
                </h4>

                <p class="text-sm text-gray-600 mt-1">
                  📍 Gazipur • 🗓 10 Mar 2026
                </p>

                <a href="#" class="inline-block mt-4 text-red font-semibold ">
                  View Details →
                </a>
              </div>
            </div>

            <div class="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1526256262350-7da7584cf5eb"
                class="h-48 w-full object-cover"
              />
              <div class="p-6">
                <div class="flex justify-between items-center">
                  <span class="text-xs bg-maroon text-white px-3 py-1 rounded-full">
                    Donation
                  </span>
                  <span class="text-xs text-green-600 font-semibold">
                    Upcoming
                  </span>
                </div>

                <h4 class="font-bold text-lg mt-3">
                  Ramadan Food Distribution
                </h4>

                <p class="text-sm text-gray-600 mt-1">
                  📍 Sylhet • 🗓 28 Mar 2026
                </p>

                <a href="#" class="inline-block mt-4 text-red font-semibold">
                  View Details →
                </a>
              </div>
            </div>
          </div>

          <div class="flex justify-center mt-16 gap-2">
            <button class="px-4 py-2 border rounded hover:bg-soft cursor-pointer">
              Prev
            </button>
            <button class="px-4 py-2 bg-red text-white rounded cursor-pointer">
              1
            </button>
            <button class="px-4 py-2 border rounded hover:bg-soft cursor-pointer">
              2
            </button>
            <button class="px-4 py-2 border rounded hover:bg-soft cursor-pointer">
              3
            </button>
            <button class="px-4 py-2 border rounded hover:bg-soft cursor-pointer">
              Next
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AllActiveEvents;

import React from "react";

const FeaturedPrograms = () => {
  return (
    <div>
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl font-extrabold text-center mb-10">
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
    </div>
  );
};

export default FeaturedPrograms;

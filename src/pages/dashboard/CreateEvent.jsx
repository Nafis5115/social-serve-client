import React from "react";

const CreateEvent = () => {
  return (
    <div className="min-h-screen bg-soft">
      <div className="mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold">Create Event</h1>
          <p className="text-gray-600 text-sm">
            Fill in the details to create a new community event
          </p>
        </div>

        <div className="bg-white rounded-xl shadow p-6 md:p-8">
          <h2 className="font-bold text-lg mb-4">Basic Information</h2>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <Input label="Event Title" placeholder="Road Cleaning Program" />
            <Select label="Event Type">
              <option>Cleanup</option>
              <option>Plantation</option>
              <option>Donation</option>
              <option>Relief</option>
            </Select>

            <Input label="Start Date" type="date" />
            <Input label="End Date" type="date" />
          </div>

          <div className="mb-6">
            <label className="text-sm font-medium">Thumbnail Image URL</label>
            <input
              type="text"
              placeholder="https://example.com/image.jpg"
              className="w-full border rounded px-4 py-2 mt-1 focus:outline-none focus:border-red"
            />
          </div>
          <div className="mb-6">
            <Input label="Location" placeholder="Mirpur 10, Dhaka" />
          </div>

          <div className="mb-6">
            <label className="text-sm font-medium">Event Description</label>
            <textarea
              rows="4"
              placeholder="Describe the purpose and details of the event..."
              className="w-full border rounded px-4 py-2 mt-1 focus:outline-none focus:border-red"
            />
          </div>

          <div className="flex justify-end gap-4">
            <button className="px-6 py-2 border rounded hover:bg-soft">
              Cancel
            </button>
            <button className="px-6 py-2 bg-red text-white rounded font-semibold hover:bg-red-600">
              Create Event
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateEvent;

const Input = ({ label, placeholder, type = "text" }) => (
  <div>
    <label className="text-sm font-medium">{label}</label>
    <input
      type={type}
      placeholder={placeholder}
      className="w-full border rounded px-4 py-2 mt-1 focus:outline-none focus:border-red"
    />
  </div>
);

const Select = ({ label, children }) => (
  <div>
    <label className="text-sm font-medium">{label}</label>
    <select className="w-full border rounded px-4 py-2 mt-1 focus:outline-none focus:border-red">
      {children}
    </select>
  </div>
);

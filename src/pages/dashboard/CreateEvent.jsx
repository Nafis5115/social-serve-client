import React, { useState } from "react";

const CreateEvent = () => {
  const [responsibilities, setResponsibilities] = useState([""]);
  const [safetyGuidelines, setSafetyGuidelines] = useState([""]);
  const [checkAI, setCheckAI] = useState(false);
  const handleCreateEvent = (e) => {
    e.preventDefault();

    console.log("test");
  };

  return (
    <div className="min-h-screen bg-soft mb-4">
      <div className="mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold">Create Event</h1>
          <p className="text-gray-600 text-sm">
            Fill in the details to create a new community event
          </p>
        </div>

        <form
          onSubmit={handleCreateEvent}
          className="bg-white rounded-xl shadow p-6 md:p-8"
        >
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
          <div className="bg-soft border rounded-lg p-4 mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold">AI Assistance</h3>
                <p className="text-sm text-gray-600">
                  Auto-generate description & guidelines using AI
                </p>
              </div>

              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={checkAI}
                  onChange={(e) => setCheckAI(e.target.checked)}
                  className="accent-red"
                />
                <span className="text-sm font-medium">Enable AI</span>
              </label>
            </div>
          </div>
          <div
            className={`transition-all duration-300 ease-in-out
            ${
              checkAI
                ? "max-h-0 opacity-0 -translate-y-2"
                : "max-h-125 opacity-100 translate-y-0"
            }`}
          >
            <div className="mb-8">
              <h3 className="font-medium text-sm mb-3">
                Volunteer Responsibilities
              </h3>
              {responsibilities.map((item, index) => (
                <div key={index} className="space-y-3 mt-3">
                  <div className="flex gap-3">
                    <input
                      value={item}
                      onChange={(e) => {
                        handleArrayChange(
                          responsibilities,
                          e.target.value,
                          setResponsibilities,
                          index,
                        );
                      }}
                      type="text"
                      placeholder={`Responsibility `}
                      className="w-full border rounded px-4 py-2 focus:outline-none focus:border-red"
                    />

                    <button
                      onClick={() => {
                        removeItem(
                          responsibilities,
                          index,
                          setResponsibilities,
                        );
                      }}
                      type="button"
                      className="text-red font-bold"
                    >
                      ✕
                    </button>
                  </div>
                </div>
              ))}

              <button
                onClick={() => {
                  addItem(responsibilities, setResponsibilities);
                }}
                type="button"
                className="mt-3 text-sm text-red font-semibold"
              >
                + Add Responsibility
              </button>
            </div>

            <div className="mb-8">
              <h3 className="font-medium text-sm  mb-3">Safety & Guidelines</h3>
              {safetyGuidelines.map((item, index) => (
                <div key={index} className="space-y-3 mt-3">
                  <div className="flex gap-3">
                    <input
                      value={item}
                      type="text"
                      onChange={(e) => {
                        handleArrayChange(
                          safetyGuidelines,
                          e.target.value,
                          setSafetyGuidelines,
                          index,
                        );
                      }}
                      placeholder={`Guideline`}
                      className="w-full border rounded px-4 py-2 focus:outline-none focus:border-red"
                    />

                    <button
                      onClick={() => {
                        (safetyGuidelines, index, setSafetyGuidelines);
                      }}
                      type="button"
                      className="text-red font-bold"
                    >
                      ✕
                    </button>
                  </div>
                </div>
              ))}

              <button
                onClick={() => {
                  addItem(safetyGuidelines, setSafetyGuidelines);
                }}
                type="button"
                className="mt-3 text-sm text-red font-semibold"
              >
                + Add Guideline
              </button>
            </div>
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
            <button
              type="submit"
              className="px-6 py-2 bg-red text-white rounded font-semibold hover:bg-red-600"
            >
              Create Event
            </button>
          </div>
        </form>
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

const handleArrayChange = (array, value, setter, index) => {
  const updated = [...array];
  updated[index] = value;
  setter(updated);
};

const addItem = (array, setter) => {
  setter([...array, ""]);
};

const removeItem = (array, index, setter) => {
  const updated = array.filter((_, i) => i !== index);
  setter(updated.length ? updated : [""]);
};

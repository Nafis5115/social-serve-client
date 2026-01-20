import React, { useState } from "react";
import useAxios from "../../hooks/useAxios";
import useAuth from "../../hooks/useAuth";

const CreateEvent = () => {
  const [responsibilities, setResponsibilities] = useState([""]);
  const [safetyGuidelines, setSafetyGuidelines] = useState([""]);
  const [eventTitle, setEventTitle] = useState("");
  const [eventType, setEventType] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [thumbnailUrl, setThumbnailUrl] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [checkAI, setCheckAI] = useState(false);
  const axios = useAxios();
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();
  const validateForm = () => {
    const newErrors = {};
    if (!eventTitle.trim()) newErrors.eventTitle = "Event title is required";
    if (!eventType) newErrors.eventType = "Event type is required";
    if (!startDate) newErrors.startDate = "Start date is required";
    if (!endDate) newErrors.endDate = "End date is required";
    if (!thumbnailUrl) newErrors.thumbnailUrl = "Thumbnail URL is required";
    if (!location.trim()) newErrors.location = "Location is required";
    if (!description.trim()) newErrors.description = "Description is required";

    if (!checkAI) {
      const validResponsibilities = responsibilities.filter(
        (r) => r.trim() !== "",
      );
      const validGuidelines = safetyGuidelines.filter((g) => g.trim() !== "");

      if (validResponsibilities.length < 1) {
        newErrors.responsibilities =
          "Add at least one volunteer responsibility";
      }

      if (validGuidelines.length < 1) {
        newErrors.safetyGuidelines = "Add at least one safety guideline";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const resetForm = () => {
    setEventTitle("");
    setEventType("");
    setStartDate("");
    setEndDate("");
    setThumbnailUrl("");
    setLocation("");
    setDescription("");
    setResponsibilities([""]);
    setSafetyGuidelines([""]);
    setCheckAI(false);
  };
  const handleCreateEvent = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    const eventData = {
      eventTitle,
      eventType,
      startDate,
      endDate,
      thumbnailUrl,
      location,
      description,
      responsibilities,
      safetyGuidelines,
      ownerEmail: user?.email,
      aiAssistance: checkAI,
    };
    console.log("Sending data:", eventData);
    try {
      setLoading(true);
      const res = await axios.post("/create-event", eventData);
      setLoading(false);
      console.log(res.data);
      resetForm();
    } catch (err) {
      console.error(err);
    }
  };
  if (loading)
    return (
      <div className=" flex justify-center w-full items-center h-screen">
        <span className="loading loading-spinner loading-xl"></span>
      </div>
    );
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
            <div>
              <Input
                value={eventTitle}
                onChange={(e) => setEventTitle(e.target.value)}
                label="Event Title"
                placeholder="Road Cleaning Program"
              />
              {errors.eventTitle && (
                <p className="text-red text-sm mt-2">{errors.eventTitle}</p>
              )}
            </div>

            <div>
              <Select
                label="Event Type"
                value={eventType}
                onChange={(e) => setEventType(e.target.value)}
              >
                <option value="">Select a type</option>
                <option value="Cleanup">Cleanup</option>
                <option value="Environment">Environment</option>
                <option value="Donation">Donation</option>
                <option value="Relief">Relief</option>
                <option value="Social">Social</option>
                <option value="Health">Health</option>
                <option value="Education">Education</option>
              </Select>
              {errors.eventType && (
                <p className="text-red text-sm mt-2">{errors.eventType}</p>
              )}
            </div>

            <div>
              <Input
                label="Start Date"
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
              {errors.startDate && (
                <p className="text-red text-sm mt-2">{errors.startDate}</p>
              )}
            </div>
            <div>
              <Input
                label="End Date"
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />
              {errors.endDate && (
                <p className="text-red text-sm mt-2">{errors.endDate}</p>
              )}
            </div>
          </div>

          <div className="mb-6">
            <label className="text-sm font-medium">Thumbnail Image URL</label>
            <input
              value={thumbnailUrl}
              onChange={(e) => setThumbnailUrl(e.target.value)}
              type="text"
              placeholder="https://example.com/image.jpg"
              className="w-full border rounded px-4 py-2 mt-1 focus:outline-none focus:border-red"
            />
            {errors.thumbnailUrl && (
              <p className="text-red text-sm mt-2">{errors.thumbnailUrl}</p>
            )}
          </div>
          <div className="bg-soft border rounded-lg p-4 mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold">AI Assistance</h3>
                <p className="text-sm text-gray-600">
                  Auto-Generate "Volunteer Responsibilities" And "Safety &
                  Guidelines" Using AI
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
          <div className="mb-6">
            <Input
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              label="Location"
              placeholder="Mirpur 10, Dhaka"
            />
            {errors.location && (
              <p className="text-red text-sm mt-2">{errors.location}</p>
            )}
          </div>

          <div className="mb-6">
            <label className="text-sm font-medium">Event Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows="4"
              placeholder="Describe the purpose and details of the event..."
              className="w-full border rounded px-4 py-2 mt-1 focus:outline-none focus:border-red"
            />
            {errors.description && (
              <p className="text-red text-sm mt-2">{errors.description}</p>
            )}
          </div>
          {!checkAI && (
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
                    {errors.responsibilities && index === 0 && (
                      <p className="text-red text-sm mt-2">
                        {errors.responsibilities}
                      </p>
                    )}
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
                <h3 className="font-medium text-sm  mb-3">
                  Safety & Guidelines
                </h3>
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
                          removeItem(
                            safetyGuidelines,
                            index,
                            setSafetyGuidelines,
                          );
                        }}
                        type="button"
                        className="text-red font-bold"
                      >
                        ✕
                      </button>
                    </div>
                    {errors.safetyGuidelines && index === 0 && (
                      <p className="text-red text-sm mt-2">
                        {errors.safetyGuidelines}
                      </p>
                    )}
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
          )}

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

const Input = ({ label, placeholder, type = "text", ...props }) => (
  <div>
    <label className="text-sm font-medium">{label}</label>
    <input
      {...props}
      type={type}
      placeholder={placeholder}
      className="w-full border rounded px-4 py-2 mt-1 focus:outline-none focus:border-red"
    />
  </div>
);

const Select = ({ label, children, ...props }) => (
  <div>
    <label className="text-sm font-medium">{label}</label>
    <select
      {...props}
      className="w-full border rounded px-4 py-2 mt-1 focus:outline-none focus:border-red"
    >
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

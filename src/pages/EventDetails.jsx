import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { formattedDate } from "../helpers/formattedData";
import useAxios from "../hooks/useAxios";
import useAuth from "../hooks/useAuth";
import toast from "react-hot-toast";

const EventDetails = () => {
  const data = useLoaderData();
  const [loading, setLoading] = useState(false);
  const axios = useAxios();
  const { user } = useAuth();
  const [isJoined, setIsJoined] = useState(false);
  const [joinedCount, setJoinedCount] = useState(0);
  const handleEventJoin = async () => {
    try {
      setLoading(true);
      const newJoin = {
        eventId: data.event._id,
        userEmail: user?.email,
      };
      const res = await axios.post("/create-join", newJoin);
      if (res.data.insertedId) {
        setIsJoined(true);
        setJoinedCount((prev) => prev + 1);
        toast.success("Successfully joined event.");
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const res = await axios.get(`event-joins/${data.event._id}`);
        console.log(res);
        setJoinedCount(res.data.length);
        const joined = res.data.some((join) => join.userEmail === user?.email);

        setIsJoined(joined);

        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [axios, data, user]);

  const handleLeaveEvent = async () => {
    try {
      setLoading(true);
      const res = await axios.delete("/delete-join", {
        data: {
          eventId: data.event._id,
          userEmail: user?.email,
        },
      });
      if (res.data.deletedCount > 0) {
        setIsJoined(false);
        setJoinedCount((prev) => prev - 1);
        toast.success("Successfully leaved event.");
      }

      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  if (loading)
    return (
      <div className=" flex justify-center w-full items-center h-screen">
        <span className="loading loading-spinner loading-xl text-black"></span>
      </div>
    );
  return (
    <div className="bg-soft text-navy">
      <section className="relative h-95">
        <img
          src={data.event.thumbnailUrl}
          className="w-full h-full object-cover"
          alt="Event Banner"
        />

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl  mx-auto ">
            <div className="px-6 pb-10 text-white">
              <h2 className="text-5xl text-center font-extrabold mt-4">
                {data.event.eventTitle}
              </h2>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-12">
          <div className="bg-white rounded-xl p-8 shadow">
            <h3 className="text-2xl font-bold mb-4">About This Event</h3>
            <p className="text-gray-700 leading-relaxed">
              {data.event.description}
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow">
            <h3 className="text-2xl font-bold mb-4">
              Volunteer Responsibilities
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              {data.event.responsibilities.map((responsibility, index) => (
                <li key={index}>{responsibility}</li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-xl p-8 shadow">
            <h3 className="text-2xl font-bold mb-4">Safety & Guidelines</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              {data.event.safetyGuidelines.map((safetyGuideline, index) => (
                <li key={index}>{safetyGuideline}</li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-xl p-8 shadow">
            <h3 className="text-2xl font-bold mb-4">Event Location</h3>
            <div className="h-64  rounded flex items-center justify-center text-gray-500">
              <iframe
                loading="lazy"
                className="w-full h-full"
                src={`https://maps.google.com/maps?hl=en&q=${data.event.location}&t=&z=14&ie=UTF8&iwloc=B&output=embed`}
              ></iframe>
            </div>
          </div>
        </div>

        <aside className="space-y-8">
          <div className="bg-white rounded-xl p-6 shadow">
            <h4 className="font-bold text-lg mb-4">Event Information</h4>

            <div className="space-y-3 text-sm">
              <p>
                <strong>Start Date:</strong>{" "}
                {formattedDate(data.event.startDate)}
              </p>
              <p>
                <strong>Start Date:</strong> {formattedDate(data.event.endDate)}
              </p>
              <p>
                <strong>Location:</strong> {data.event.location}
              </p>
              <p>
                <strong>Event Type:</strong> {data.event.eventType}
              </p>
              <p>
                <strong>Participants:</strong> {joinedCount} Joined
              </p>
            </div>
            {data.event.ownerEmail !== user?.email ? (
              !isJoined ? (
                <button
                  onClick={handleEventJoin}
                  className="mt-6 w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-semibold "
                >
                  <p>Join Event</p>
                </button>
              ) : (
                <button
                  onClick={() =>
                    document.getElementById("leaveEventModal").showModal()
                  }
                  className="mt-6 w-full bg-red hover:bg-rose text-white py-3 rounded-lg font-semibold"
                >
                  <p>Leave Event</p>
                </button>
              )
            ) : (
              <p className="italic flex justify-center items-center -mb-4 mt-4 text-sm">
                "This is my event"
              </p>
            )}
          </div>

          <div className="bg-white rounded-xl p-6 shadow">
            <h4 className="font-bold text-lg mb-4">Creator</h4>

            <div className="flex items-center gap-4">
              <img
                src={data.userInfo.photoURL}
                className="w-12 h-12 rounded-full"
              />
              <div>
                <p className="font-semibold">{data.userInfo.name}</p>
                <p className="text-sm text-gray-500">{data.userInfo.email}</p>
              </div>
            </div>
          </div>
        </aside>
      </section>
      <dialog id="leaveEventModal" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg text-white">
            Do you want to leave this event?
          </h3>

          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn bg-gray-50 text-black mr-4">No</button>
              <button onClick={handleLeaveEvent} className="btn bg-red">
                Yes
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default EventDetails;

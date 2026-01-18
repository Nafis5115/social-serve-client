import React from "react";

const EditProfile = () => {
  return (
    <div className=" bg-soft flex justify-center ">
      <div className="bg-white rounded-xl shadow w-full p-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold">Edit Profile</h1>
          <p className="text-gray-600 text-sm">
            Update your personal information
          </p>
        </div>

        <form className="grid md:grid-cols-2 gap-6">
          <Input label="Full Name" />
          <Input label="Email Address" />
          <Input label="Phone Number" />
          <Input label="Location" />

          <div className="md:col-span-2">
            <label className="text-sm font-medium">Image URL</label>
            <Input
              rows="4"
              className="w-full border rounded px-4 py-2 mt-1 focus:outline-none focus:border-primary"
            />
          </div>
        </form>

        <div className="mt-10 flex justify-end">
          <button className="bg-red text-white px-6 py-3 rounded font-semibold hover:bg-rose">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;

const Input = ({ label, placeholder }) => (
  <div>
    <label className="text-sm font-medium">{label}</label>
    <input
      type="text"
      placeholder={placeholder}
      className="w-full border rounded px-4 py-2 mt-1 focus:outline-none focus:border-primary"
    />
  </div>
);

import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

const EditProfile = () => {
  const { user, updateUser } = useAuth();
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState(user?.displayName || "");
  const [email, setEmail] = useState(user?.email || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
  useEffect(() => {
    setLoading(true);
    if (user) {
      setLoading(false);
      setName(user.displayName || "");
      setEmail(user.email || "");
      setPhotoURL(user.photoURL || "");
    }
  }, [user]);

  const handleUpdateUser = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      await updateUser(name, photoURL);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  if (loading)
    return (
      <div className=" flex justify-center w-full items-center h-screen">
        <span className="loading loading-spinner loading-sm"></span>
      </div>
    );
  return (
    <div className=" bg-soft flex justify-center ">
      <div className="bg-white rounded-xl shadow w-full p-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold">Edit Profile</h1>
          <p className="text-gray-600 text-sm">
            Update your personal information
          </p>
        </div>

        <form onSubmit={handleUpdateUser}>
          <div className="grid md:grid-cols-2 gap-6">
            <Input
              label="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              label="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              readOnly
            />

            <div className="md:col-span-2">
              <label className="text-sm font-medium">Image URL</label>
              <Input
                value={photoURL}
                onChange={(e) => setPhotoURL(e.target.value)}
                rows="4"
                className="w-full border rounded px-4 py-2 mt-1 focus:outline-none focus:border-primary"
              />
            </div>
          </div>
          <div className="mt-10 flex justify-end">
            <button
              type="submit"
              className="bg-red text-white px-6 py-3 rounded font-semibold hover:bg-rose "
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const Input = ({ label, placeholder, ...props }) => (
  <div>
    <label className="text-sm font-medium">{label}</label>
    <input
      {...props}
      type="text"
      placeholder={placeholder}
      className="w-full border rounded px-4 py-2 mt-1 focus:outline-none focus:border-primary"
    />
  </div>
);

export default EditProfile;

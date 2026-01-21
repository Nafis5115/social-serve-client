import React, { useState } from "react";
import { Link, Navigate, useLocation } from "react-router";
import useAuth from "../hooks/useAuth";
import useAxios from "../hooks/useAxios";

const Register = () => {
  const { createUser, updateUser, googleLogin, user, loading } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const location = useLocation();
  const redirect = location.state?.pathname || "/";
  const axios = useAxios();
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const result = await createUser(email, password);
      const user = result.user;
      await updateUser(name, photoURL);
      const newUser = {
        name: user.displayName,
        photoURL: user.photoURL,
        email: user.email,
      };
      const res = await axios.post("/create-user", newUser);
      console.log(res.data);
    } catch (error) {
      console.error(error);
    }
  };
  const handleGoogleRegister = async () => {
    try {
      const result = await googleLogin();
      const user = result.user;
      const newUser = {
        name: user.displayName,
        photoURL: user.photoURL,
        email: user.email,
      };
      const res = await axios.post("/create-user", newUser);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  if (loading)
    return (
      <div className=" flex justify-center w-full items-center h-screen">
        <span className="loading loading-spinner text-black loading-sm"></span>
      </div>
    );
  if (user) {
    return <Navigate to={redirect} replace />;
  }
  return (
    <div className="bg-soft flex items-center justify-center px-4 py-10 text-black">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-extrabold text-red">Create Account</h1>
          <p className="text-sm text-gray-500 mt-1">
            Join and make social impact
          </p>
        </div>

        <form onSubmit={handleRegister} className="space-y-4 text-black">
          <div>
            <label className="block text-sm font-semibold mb-1">
              Full Name
            </label>
            <input
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Your full name"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-primary"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">
              Email Address
            </label>
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-primary"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">
              Photo URL
            </label>
            <input
              onChange={(e) => setPhotoURL(e.target.value)}
              type="text"
              placeholder="https://image-link.com"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-primary"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">Password</label>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Minimum 6 characters"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-primary"
            />
          </div>

          <button className="w-full bg-red text-white py-3 rounded-lg font-semibold hover:bg-rose transition">
            Create Account
          </button>
        </form>
        <div className="flex items-center gap-4 my-6">
          <div className="flex-1 h-px bg-gray-200"></div>
          <span className="text-xs text-gray-400">OR</span>
          <div className="flex-1 h-px bg-gray-200"></div>
        </div>

        <button
          onClick={handleGoogleRegister}
          className="w-full border border-gray-300 py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-soft transition"
        >
          <svg className="w-5 h-5" viewBox="0 0 48 48">
            <path
              fill="#EA4335"
              d="M24 9.5c3.3 0 6.3 1.2 8.7 3.3l6.5-6.5C35.2 2.5 29.9 0 24 0 14.6 0 6.4 5.4 2.4 13.3l7.6 5.9C11.8 13.1 17.4 9.5 24 9.5z"
            />
            <path
              fill="#4285F4"
              d="M46.5 24c0-1.6-.1-2.8-.4-4.1H24v7.7h12.7c-.5 3-2.1 5.6-4.7 7.3l7.2 5.6C43.8 36.5 46.5 30.8 46.5 24z"
            />
            <path
              fill="#FBBC05"
              d="M10 28.8c-.5-1.5-.8-3-.8-4.8s.3-3.3.8-4.8l-7.6-5.9C.8 16.9 0 20.3 0 24s.8 7.1 2.4 10.7l7.6-5.9z"
            />
            <path
              fill="#34A853"
              d="M24 48c6.5 0 12-2.1 16-5.7l-7.2-5.6c-2 1.4-4.6 2.3-8.8 2.3-6.6 0-12.2-3.6-15-9.5l-7.6 5.9C6.4 42.6 14.6 48 24 48z"
            />
          </svg>
          Continue with Google
        </button>
        <p className="text-center text-black text-sm mt-6">
          Already have an account?{" "}
          <Link to="/login" className="text-red font-semibold hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;

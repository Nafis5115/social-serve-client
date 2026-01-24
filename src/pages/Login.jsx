import React, { useState } from "react";
import { Link, Navigate, useLocation } from "react-router";
import useAuth from "../hooks/useAuth";
import toast, { Toaster } from "react-hot-toast";
import { Eye, EyeOff } from "lucide-react";
const Login = () => {
  const { loginUser, googleLogin, user, loading } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const location = useLocation();
  const redirect = location?.state?.from || "/";

  const validateForm = () => {
    const newErrors = {};
    if (!email.trim()) newErrors.email = "Email is required";
    if (!password.trim()) newErrors.password = "Password is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    try {
      await loginUser(email, password);
    } catch (error) {
      if (error.code === "auth/invalid-credential") {
        toast.error("Invalid Credential.");
      }
    }
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then(() => {})
      .catch((e) => console.log(e));
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
    <div className="bg-soft flex items-center justify-center px-4 text-black py-10">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-extrabold text-red">SocialServe</h1>
          <p className="text-sm text-gray-500 mt-1">
            Welcome back to the community
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-sm font-semibold mb-1">
              Email Address
            </label>
            <input
              value={email}
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-primary"
            />
            <p className="text-red">{errors.email}</p>
          </div>

          <div className="relative">
            <label className="block text-sm font-semibold mb-1">Password</label>
            <input
              value={password}
              type={`${!showPassword ? "password" : "text"}`}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-primary "
            />
            <div
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-2 top-10 cursor-pointer"
            >
              {!showPassword ? (
                <Eye size={20}></Eye>
              ) : (
                <EyeOff size={20}></EyeOff>
              )}
            </div>

            <p className="text-red">{errors.password}</p>
          </div>

          <button className="w-full bg-red text-white py-3 rounded-lg font-semibold hover:bg-rose transition">
            Login
          </button>
        </form>
        <Toaster></Toaster>

        <div className="flex items-center gap-4 my-6">
          <div className="flex-1 h-px bg-gray-200"></div>
          <span className="text-xs text-gray-400">OR</span>
          <div className="flex-1 h-px bg-gray-200"></div>
        </div>

        <button
          onClick={handleGoogleLogin}
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

        <p className="text-center text-sm mt-6">
          Don’t have an account?{" "}
          <Link
            to="/register"
            className="text-red font-semibold hover:underline"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;

import React from "react";

const Register = () => {
  return (
    <div className="bg-soft min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-extrabold text-red">Create Account</h1>
          <p className="text-sm text-gray-500 mt-1">
            Join and make social impact
          </p>
        </div>

        <form className="space-y-4 text-black">
          <div>
            <label className="block text-sm font-semibold mb-1">
              Full Name
            </label>
            <input
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
              placeholder="you@example.com"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-primary"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">
              Photo URL
            </label>
            <input
              type="text"
              placeholder="https://image-link.com"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-primary"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">Password</label>
            <input
              type="password"
              placeholder="Minimum 6 characters"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-primary"
            />
          </div>

          <button className="w-full bg-red text-white py-3 rounded-lg font-semibold hover:bg-rose transition">
            Create Account
          </button>
        </form>

        <p className="text-center text-black text-sm mt-6">
          Already have an account?{" "}
          <a
            href="login.html"
            className="text-red font-semibold hover:underline"
          >
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;

import React from "react";

const Navbar = () => {
  return (
    <header className="bg-navy text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-extrabold text-red">SocialServe</h1>
          <p className="text-xs text-white/70">
            Community Development Platform
          </p>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a className="hover:text-red cursor-pointer">Home</a>
          <a className="hover:text-red cursor-pointer">Events</a>
          <a className="hover:text-red cursor-pointer">Impact</a>
          <a className="hover:text-red cursor-pointer">FAQ</a>
          <a
            href="login.html"
            className="bg-red px-4 py-2 rounded hover:bg-rose"
          >
            Login
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

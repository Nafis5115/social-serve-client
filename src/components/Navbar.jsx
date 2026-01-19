import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router";
import useAuth from "../hooks/useAuth";

const Navbar = () => {
  const navLinks = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Upcoming Events",
      link: "/all-upcoming-events",
    },
    {
      name: "Active Events",
      link: "/all-active-events",
    },
  ];
  const [open, setOpen] = useState(false);
  const { logoutUser, user, loading } = useAuth();

  return (
    <header className="bg-navy text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto md:px-0 p-6 py-4 flex justify-between items-center">
        <div className="cursor-pointer">
          <Link to={"/"} className="text-2xl font-extrabold text-red">
            SocialServe
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link) => (
            <NavLink
              key={link.link}
              to={link.link}
              className={({ isActive }) =>
                `hover:text-red cursor-pointer ${isActive && "text-red"}`
              }
            >
              {link.name}
            </NavLink>
          ))}
          {!loading ? (
            user ? (
              <div className="relative group cursor-pointer">
                <div className="flex items-center gap-2">
                  <img
                    src={user.photoURL}
                    alt="profile"
                    className="w-8 h-8 rounded-full object-cover"
                  />
                </div>

                <div
                  className="
                absolute right-0 mt-0 w-54 bg-white text-gray-800 shadow-lg
                opacity-0 scale-95 translate-y-2
                group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0
                transition-all duration-200 origin-top
                pointer-events-none group-hover:pointer-events-auto
              "
                >
                  <Link
                    to="/dashboard/edit-profile"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Edit Profile
                  </Link>
                  <Link
                    to="/dashboard"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Dashboard
                  </Link>
                  <span
                    onClick={logoutUser}
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Sign out
                  </span>
                </div>
              </div>
            ) : (
              <Link
                to="/login"
                className="bg-red px-4 py-2 rounded hover:bg-rose"
              >
                Login
              </Link>
            )
          ) : (
            <span className="loading loading-spinner loading-sm"></span>
          )}
        </nav>

        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <div
        className={`
          md:hidden overflow-hidden transition-all duration-300 ease-in-out
          ${open ? "max-h-125 opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <nav className="flex flex-col items-center text-center gap-4 py-6 text-sm font-medium">
          {navLinks.map((link) => (
            <NavLink
              onClick={() => setOpen(false)}
              key={link.link}
              to={link.link}
              className={({ isActive }) =>
                `hover:text-red cursor-pointer ${isActive && "text-red"}`
              }
            >
              {link.name}
            </NavLink>
          ))}

          {!loading ? (
            user ? (
              <div className="flex flex-col items-center text-center gap-4 text-sm font-medium">
                <Link
                  to={"/dashboard/edit-profile"}
                  onClick={() => setOpen(false)}
                  className="block hover:text-red cursor-pointer"
                >
                  Edit Profile
                </Link>
                <Link
                  to={"/dashboard"}
                  onClick={() => setOpen(false)}
                  className="block hover:text-red cursor-pointer"
                >
                  Dashboard
                </Link>
                <span
                  onClick={() => {
                    logoutUser();
                    setOpen(false);
                  }}
                  className="block hover:text-red cursor-pointer"
                >
                  Sign out
                </span>
              </div>
            ) : (
              <Link
                to="/login"
                onClick={() => setOpen(false)}
                className="bg-red px-6 py-2 rounded hover:bg-rose"
              >
                Login
              </Link>
            )
          ) : (
            <span className="loading loading-spinner loading-sm"></span>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

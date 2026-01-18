import { Menu } from "lucide-react";
import { useState } from "react";
import { Link, NavLink, Outlet } from "react-router";

const DashboardLayout = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-soft text-black max-w-7xl mx-auto mt-4 relative">
      <div
        className="md:hidden bg-navy text-white w-12 rounded items-center flex justify-center py-2 mx-5"
        onClick={() => setIsOpen(true)}
      >
        <Menu></Menu>
      </div>

      <div className="flex">
        <aside className="w-64 h-screen bg-navy text-white hidden md:flex flex-col mb-4">
          <SidebarLinks />
        </aside>

        <aside
          className={`fixed top-14 left-0 h-full w-64 bg-navy text-white z-50 transform transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full"} md:hidden`}
        >
          <div className="p-4 border-b border-white/10 flex justify-end">
            <button onClick={() => setIsOpen(false)}>✕</button>
          </div>

          <SidebarLinks closeMenu={() => setIsOpen(false)} />
        </aside>

        {isOpen && (
          <div
            className="fixed inset-0 bg-black/40 z-40 md:hidden"
            onClick={() => setIsOpen(false)}
          />
        )}

        <main className="flex-1 px-4 md:px-10 md:py-0 py-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

const SidebarLinks = ({ closeMenu }) => {
  const sidebarLinks = [
    {
      name: "Dashboard",
      link: "/dashboard",
    },
    {
      name: "My Events",
      link: "/dashboard/my-events",
    },
    {
      name: "Joined Events",
      link: "/dashboard/joined-events",
    },
    {
      name: "Create Event",
      link: "/dashboard/create-event",
    },
    {
      name: "Edit Profile",
      link: "/dashboard/edit-profile",
    },
  ];

  const handleClick = () => {
    closeMenu && closeMenu();
  };

  return (
    <nav className="flex-1 p-6 space-y-2 text-sm">
      {sidebarLinks.map((sidebarLink) => (
        <NavLink
          onClick={() => {
            handleClick();
          }}
          key={sidebarLink.link}
          to={sidebarLink.link}
          end={sidebarLink.link === "/dashboard"}
          className={({ isActive }) =>
            `block px-4 py-2 rounded  text-white font-semibold cursor-pointer ${isActive && "bg-red"}`
          }
        >
          {sidebarLink.name}
        </NavLink>
      ))}
    </nav>
  );
};

export default DashboardLayout;

import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12 text-sm">
        <div>
          <h4 className="font-bold text-red text-lg">SocialServe</h4>
          <p className="mt-3 text-white/70">
            National-scale community development and volunteer coordination
            platform.
          </p>
        </div>
        <div>
          <h5 className="font-semibold mb-3">Platform</h5>
          <ul className="space-y-2 text-white/70">
            <li>Events</li>
            <li>Dashboard</li>
            <li>Create Event</li>
          </ul>
        </div>
        <div>
          <h5 className="font-semibold mb-3">Community</h5>
          <ul className="space-y-2 text-white/70">
            <li>Volunteers</li>
            <li>Organizers</li>
            <li>NGOs</li>
          </ul>
        </div>
        <div>
          <h5 className="font-semibold mb-3">Support</h5>
          <ul className="space-y-2 text-white/70">
            <li>FAQ</li>
            <li>Privacy Policy</li>
            <li>Terms</li>
          </ul>
        </div>
      </div>

      <p className="text-center text-xs text-white/50 mt-12">
        © 2026 SocialServe • Community Development Platform
      </p>
    </footer>
  );
};

export default Footer;

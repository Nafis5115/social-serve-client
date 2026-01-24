import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState({});

  const { user, tokenReady } = useAuth();
  const [loading, setLoading] = useState(false);
  const axiosSecure = useAxiosSecure();
  useEffect(() => {
    if (!user?.email || !tokenReady) return;

    (async () => {
      setLoading(true);
      const res = await axiosSecure.get(`/dashboard?email=${user.email}`);

      setLoading(false);
      setDashboardData(res?.data?.data);
    })();
  }, [axiosSecure, user?.email, tokenReady]);

  if (loading)
    return (
      <div className=" flex justify-center w-full items-center h-screen">
        <span className="loading loading-spinner loading-xl"></span>
      </div>
    );
  return (
    <div>
      <div className="mb-10">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p className="text-gray-600 text-sm">
          Overview of your activities and events
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <StatCard title="Events Joined" value={dashboardData.eventsJoined} />
        <StatCard title="Events Created" value={dashboardData.eventsCreated} />
        <StatCard title="Active Events" value={dashboardData.activeEvents} />
      </div>
    </div>
  );
};

const StatCard = ({ title, value }) => (
  <div className="bg-white rounded-xl shadow p-6">
    <p className="text-sm text-gray-500">{title}</p>
    <h3 className="text-3xl font-bold mt-2">{value}</h3>
  </div>
);

export default Dashboard;

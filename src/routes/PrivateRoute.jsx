import React from "react";
import useAuth from "../hooks/useAuth";
import { Navigate, useLocation } from "react-router";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();
  if (loading)
    return (
      <div className=" flex justify-center w-full items-center h-screen">
        <span className="loading loading-spinner loading-xl"></span>
      </div>
    );
  if (!user) {
    return <Navigate to={"/login"} state={location}></Navigate>;
  }
  return children;
};

export default PrivateRoute;
